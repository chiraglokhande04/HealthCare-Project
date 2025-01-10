import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const BottomBar = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const navigate = useNavigate(); // Get the navigate function from React Router

  // Function to handle tab click and set the active tab
  const handleTabClick = (tab, path) => {
    setActiveTab(tab);  
    navigate(path);      
  };

  return (
    <div className="bg-gray-50 shadow-md fixed bottom-0 max-w-sm w-full flex justify-around py-4">
      <div
        onClick={() => handleTabClick('profile', '/profile')}
        className={`flex flex-col items-center px-6 py-2 rounded-lg cursor-pointer ${
          activeTab === 'profile' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        <span className="material-icons">person</span>
        <span className="text-sm">Profile</span>
      </div>
      <div
        onClick={() => handleTabClick('chat', '/chat')}
        className={`flex flex-col items-center px-6 py-2 rounded-lg cursor-pointer ${
          activeTab === 'chat' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        <span className="material-icons">chat</span>
        <span className="text-sm">Chat</span>
      </div>
      <div
        onClick={() => handleTabClick('video', '/video')}
        className={`flex flex-col items-center px-6 py-2 rounded-lg cursor-pointer ${
          activeTab === 'video' ? 'bg-blue-500 text-white' : 'text-gray-600 hover:text-blue-600'
        }`}
      >
        <span className="material-icons">videocam</span>
        <span className="text-sm">Video</span>
      </div>
    </div>
  );
};

export default BottomBar;
