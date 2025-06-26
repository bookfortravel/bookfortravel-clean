import React from 'react';
import { X } from 'lucide-react';

const PolicyModal = ({ isOpen, onClose, title, icon: Icon, color, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-2 sm:px-0">

      <div className="bg-white w-[95%] max-w-2xl max-h-[85vh] overflow-y-auto rounded-xl p-4 shadow-xl relative">

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-3 right-3 text-gray-500 hover:text-black">
          <X size={20} />
        </button>

        {/* Icon + Title */}
        <div className="flex items-center gap-3 mb-4">
          <Icon size={26} className={`text-${color}-500`} />
          <h2 className="text-xl font-bold">{title}</h2>
        </div>

        {/* Content */}
        <div className="text-sm text-gray-800 space-y-3">{children}</div>
      </div>
    </div>
  );
};

export default PolicyModal;
