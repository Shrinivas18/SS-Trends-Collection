import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className="
          bg-white dark:bg-gray-800 rounded-lg 
          w-11/12 max-w-xl 
          max-h-[90vh]
          shadow-lg animate-fadeIn 
          flex flex-col
        "
      >
        {/* Scrollable Content */}
        <div className="dark:bg-gray-800 overflow-y-auto p-6">{children}</div>

        {/* Footer button stays fixed */}
        <div className="p-4 border-t dark:bg-gray-800 border-gray-300 dark:border-gray-700">
          <button
            className="w-full px-4 py-2 dark:bg-gray-800 bg-gray-700 text-white rounded hover:bg-gray-900"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
