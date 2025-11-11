import React from "react";
import { motion } from "framer-motion";
import { XMarkIcon } from "@heroicons/react/24/outline";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div
        className="
          relative
          bg-white dark:bg-gray-800 rounded-lg 
          w-11/12 max-w-xl 
          max-h-[90vh]
          shadow-lg animate-fadeIn 
          flex flex-col
        "
      >
        <motion.button
          className="absolute top-3 right-3 text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white cursor-pointer"
          onClick={onClose}
          aria-label="Close"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <XMarkIcon className="w-6 h-6" />
        </motion.button>

        <div className="overflow-y-auto p-6">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
