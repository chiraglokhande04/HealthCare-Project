import React, { useState } from "react";
import BottomBar from "../components/BottomBar";
import 'regenerator-runtime/runtime';  // Ensure regenerator-runtime is imported
import { FaMicrophone } from "react-icons/fa6";

// Import react-speech-recognition
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const ChatPage = () => {
  // State for user messages and chatbot responses
  const [messages, setMessages] = useState([]);
  const [textInput, setTextInput] = useState("");

  // Speech Recognition hooks (if using react-speech-recognition)
  const { transcript, resetTranscript, listening, browserSupportsSpeechRecognition } = useSpeechRecognition();

  // Handler for sending messages
  const handleSendMessage = () => {
    if (textInput) {
      setMessages([...messages, { user: textInput, bot: "Bot: I'm here to help!" }]);
      setTextInput("");  // Clear the input field after sending
    }
  };

  // Handler for sending speech input
  const handleVoiceMessage = () => {
    if (transcript) {
      setMessages([...messages, { user: transcript, bot: "Bot: I'm here to help!" }]);
      resetTranscript();  // Reset transcript after sending the voice input
    }
  };

  // Ensure that Speech Recognition is supported in the browser
  if (!browserSupportsSpeechRecognition) {
    return <p>Browser doesn't support speech recognition.</p>;
  }

  // Handle automatic message sending after speech recognition stops
  if (transcript && !listening) {
    handleVoiceMessage();
  }

  return (
    <div className="flex flex-col items-center bg-blue-50 h-full py-8">
      <h1 className="text-2xl font-semibold text-gray-700">Chat</h1>
      <p className="text-gray-500 mt-4">Chat with our bot!</p>

      {/* Chat Container */}
      <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg mt-6 flex flex-col space-y-4">
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-scroll mb-4">
          {messages.map((message, index) => (
            <div key={index} className={`my-2 p-2 rounded-lg ${message.user ? 'bg-blue-100' : 'bg-gray-100'}`}>
              <p className="text-gray-700">{message.user}</p>
              <p className="text-gray-600 text-sm">{message.bot}</p>
            </div>
          ))}
        </div>

        {/* Text Input and Send Button */}
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={listening ? transcript : textInput}  // Use speech-to-text transcript if speaking
            onChange={(e) => setTextInput(e.target.value)}  // Manually input text
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none"
            placeholder="Type a message..."
            onFocus={() => { if (!listening) { setTextInput(""); } }}  // Clear on focus if not listening
          />
          <button
            onClick={handleSendMessage}
            className="p-3 bg-blue-600 text-white rounded-lg"
          >
            Send
          </button>
          
          {/* Voice Input (Mic) Button */}
          <button
            onClick={() => SpeechRecognition.startListening()}
            className="p-3 bg-green-600 text-white rounded-full"
          >
            {listening ? "Listening..." : <FaMicrophone className="text-2xl" />}
          </button>
        </div>
      </div>

      {/* Chatbot Input Section */}
      <BottomBar />
    </div>
  );
};

export default ChatPage;
