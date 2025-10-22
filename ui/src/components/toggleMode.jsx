import React from "react";
import { useTheme } from "../context/useTheme";
import { LIGHT_MODE } from "../features/mode/lightMode";
import { DARK_MODE } from "../features/mode/darkMode";

const TorchToggle = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <div className="fixed top-[72px] right-4 z-50">
      <button
        onClick={toggleDarkMode}
        className={`${LIGHT_MODE.POSITION} relative group
                ${darkMode ? LIGHT_MODE.ANIMATE : DARK_MODE.ANIMATE}`}
      >
        <span className={LIGHT_MODE.tooltip}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </span>

        {darkMode ? (
          // Light mode
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            className="w-8 h-8 text-yellow-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d={LIGHT_MODE.ICON}
            />
          </svg>
        ) : (
          // Dark mode
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-gray-200"
          >
            <path d={DARK_MODE.ICON} />
          </svg>
        )}
      </button>
    </div>
  );
};

export default TorchToggle;
