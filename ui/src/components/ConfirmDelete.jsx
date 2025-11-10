import React from "react";
import { motion } from "framer-motion";
import { TrashIcon } from "@heroicons/react/24/outline";

const ConfirmDelete = ({ itemName, onConfirm, onCancel }) => {
  return (
    <div className="flex flex-col items-center gap-4">
      <TrashIcon className="w-12 h-12 text-red-500" />

      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
        Delete Item
      </h2>

      <p className="text-center text-gray-600 dark:text-gray-300">
        Are you sure you want to delete{" "}
        <span className="font-medium text-red-600">{itemName}</span>? This
        action cannot be undone.
      </p>

      <div className="flex gap-4 mt-4">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded bg-gray-300 dark:bg-gray-700 text-black dark:text-white hover:bg-gray-400 dark:hover:bg-gray-600"
          onClick={onCancel}
        >
          Cancel
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="px-4 py-2 rounded bg-red-600 text-white hover:bg-red-700"
          onClick={onConfirm}
        >
          Yes, Delete
        </motion.button>
      </div>
    </div>
  );
};

export default ConfirmDelete;
