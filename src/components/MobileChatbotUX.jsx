// MobileChatbotUX.jsx
import React from 'react';
import { FaTimes } from 'react-icons/fa';
import logo from '../assets/booklogo.jpg';

const MobileChatbotUX = ({ isOpen, setIsOpen, children }) => {
  return (
<div
  className={`fixed bottom-[80px] left-4 right-4 w-auto max-w-[420px] bg-white border border-gray-300 rounded-xl shadow-2xl z-50 transition-transform duration-300 sm:hidden ${
    isOpen ? 'translate-y-0 chatbot-slide-in' : 'translate-y-full'
  }`}
>

      {/* Top Bar */}
      <div className="flex justify-between items-center px-4 py-2 bg-black text-white rounded-t-xl">
        <img src={logo} alt="bookfortravel logo" className="h-6" />
        <button onClick={() => setIsOpen(false)} className="text-white text-xl">
          <FaTimes />
        </button>
      </div>

      {/* Scrollable Chat Content */}
      <div className="p-4 text-sm overflow-y-auto max-h-[65vh]">
        {children}
      </div>
    </div>
  );
};

export default MobileChatbotUX;


