import React, { useState } from "react";
import BottomBar from "../components/BottomBar";
import 'regenerator-runtime/runtime'; // Ensure regenerator-runtime is imported
import { FaMicrophone } from "react-icons/fa6";
import axios from "axios"; // Import axios
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const ChatPage = () => {
  const [messages, setMessages] = useState([]);
  const [textInput, setTextInput] = useState("");
  const [audioUrl, setAudioUrl] = useState("");

  const { transcript, resetTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

  // Backend URL
  const BACKEND_URL = "http://127.0.0.1:4000";

  // Function to send a message to the backend and receive a response (text + audio)
  const sendMessageToBackend = async (message) => {
    try {
      const response = await axios.post(`${BACKEND_URL}/chat`, { user_input: message });

      return {
        text: response.data.text_response, // Text response
        audio: `${BACKEND_URL}/audio-response?text=${encodeURIComponent(response.data.text_response)}` // Audio URL
      };
    } catch (error) {
      console.error("Error communicating with backend:", error);
      return { text: "Error: Unable to connect to the backend.", audio: "" };
    }
  };

  // Handler for sending text messages
  const handleSendMessage = async () => {
    if (textInput) {
      const userMessage = textInput;
      setMessages((prev) => [...prev, { user: userMessage, bot: "Typing..." }]);

      const botResponse = await sendMessageToBackend(userMessage);
      if (botResponse.text.startsWith("Error:")) {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { user: userMessage, bot: "Sorry, something went wrong. Please try again later." },
        ]);
      } else {
        setMessages((prev) => [
          ...prev.slice(0, -1),
          { user: userMessage, bot: botResponse.text },
        ]);
        setAudioUrl(botResponse.audio);
      }
      setTextInput("");
    }
  };

  // Handler for sending speech input
  const handleVoiceMessage = async () => {
    if (transcript) {
      const userMessage = transcript;
      setMessages((prev) => [...prev, { user: userMessage, bot: "Typing..." }]);

      const botResponse = await sendMessageToBackend(userMessage);
      setMessages((prev) => [
        ...prev.slice(0, -1),
        { user: userMessage, bot: botResponse.text },
      ]);
      setAudioUrl(botResponse.audio);
      resetTranscript();
    }
  };

  if (!browserSupportsSpeechRecognition) {
    return <p>Browser doesn't support speech recognition.</p>;
  }

  // Automatically handle voice message when speech recognition stops
  if (transcript && !listening) {
    handleVoiceMessage();
  }

  return (
    <div className="flex flex-col items-center bg-blue-50 h-full py-8 rounded-lg">
      <h1 className="text-2xl font-semibold text-gray-700">Chat</h1>
      <p className="text-gray-500 mt-4">Chat with our bot!</p>

      {/* Chat Container */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg mt-6 flex flex-col space-y-4">
        <div className="flex-1 overflow-y-scroll mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`my-2 p-2 rounded-lg ${message.user ? 'bg-blue-100' : 'bg-gray-100'}`}>
              <p className="text-gray-700">{message.user}</p>
              <p className="text-gray-600 text-sm">{message.bot}</p>
            </div>
          ))}
        </div>

        {/* Text Input and Buttons */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={listening ? transcript : textInput}
            onChange={(e) => setTextInput(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Type a message..."
          />
          <button
            onClick={handleSendMessage}
            className="p-3 bg-blue-600 text-white rounded-lg"
          >
            Send
          </button>
          <button
            onClick={() => SpeechRecognition.startListening()}
            className="p-3 bg-green-600 text-white rounded-full"
          >
            {listening ? "Listening..." : <FaMicrophone className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Audio Player for Bot Response */}
      {audioUrl && (
        <div className="mt-4">
          <audio controls>
            <source src={audioUrl} type="audio/mp3" />
            Your browser does not support the audio element.
          </audio>
        </div>
      )}

      <BottomBar />
    </div>
  );
};

export default ChatPage;
