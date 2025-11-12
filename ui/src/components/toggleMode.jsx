import React from "react";
import { useTheme } from "../context/useTheme";
import { Sun, Moon } from "lucide-react";

const ToggleMode = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div>
      {/* 🖥️ Desktop View */}
      <button
        onClick={toggleDarkMode}
        className={`hidden md:flex relative w-14 h-8 items-center rounded-full transition-all duration-300 cursor-pointer
          ${darkMode ? "bg-gray-700" : "bg-yellow-300"}`}
      >
        <span
          className={`absolute left-1 transition-all duration-300 ${
            darkMode ? "opacity-100" : "opacity-0"
          }`}
        >
          🌙
        </span>
        <span
          className={`absolute right-1 transition-all duration-300 ${
            darkMode ? "opacity-0" : "opacity-100"
          }`}
        >
          ☀️
        </span>

        <span
          className={`absolute w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300
            ${darkMode ? "translate-x-6" : "translate-x-1"}`}
        ></span>
      </button>

      {/* Mobile View */}
      <button
        onClick={toggleDarkMode}
        className={`md:hidden fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center cursor-pointer
          shadow-lg transition-all duration-300 hover:scale-110
          ${
            darkMode
              ? "bg-gray-700 text-yellow-400 drop-shadow-[0_0_12px_#facc15]"
              : "bg-yellow-300 text-gray-800 drop-shadow-[0_0_8px_#fde047]"
          }`}
      >
        {darkMode ? (
          <Moon className="w-7 h-7 animate-pulse" />
        ) : (
          <Sun className="w-7 h-7 animate-spin-slow" />
        )}
      </button>
    </div>
  );
};

export default ToggleMode;
