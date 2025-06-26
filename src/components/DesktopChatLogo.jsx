import React from 'react';
import { useNavigate } from 'react-router-dom';
import chatbotLogo from '../assets/Chatbotlogo.png';

const DesktopChatLogo = ({ onClick }) => {
  const navigate = useNavigate();

  return (
    <div
      className="fixed bottom-8 right-6 z-[9999] sm:flex hidden flex-col items-center cursor-pointer"

      onClick={onClick || (() => navigate('/'))}
    >
      <img
        src={chatbotLogo}
        alt="Chat Icon"
        className="w-20 h-20 rounded-full hover:scale-105 transition-transform"
      />
      <span className="text-sm font-semibold mt-1 text-purple-800">Chat with Us!</span>
    </div>
  );
};

export default DesktopChatLogo;

