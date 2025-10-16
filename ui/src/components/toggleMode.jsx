import React, { useEffect, useState } from "react";
import { LIGHT_MODE } from "../mode/lightMode";
import { DARK_MODE } from "../mode/darkMode";

const TorchToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme on mount
  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    localStorage.setItem("theme", newMode ? "dark" : "light");
  };

  return (
    <div className="fixed top-[72px] right-4 z-50">
      <button
        onClick={toggleDarkMode}
        className={`${LIGHT_MODE.POSITION} relative group
          ${darkMode ? LIGHT_MODE.ANIMATE : DARK_MODE.ANIMATE}
        `}
      >
        <span className={LIGHT_MODE.tooltip}>
          {darkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        </span>

        {darkMode ? (
          // Light mode
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-yellow-900"
          >
            <path d={LIGHT_MODE.ICON} />
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
