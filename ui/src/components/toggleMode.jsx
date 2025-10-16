import React, { useEffect, useState } from "react";

const TorchToggle = () => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("theme") === "dark"
  );

  // Apply theme on mount
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
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
        className={`relative w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300
          ${
            darkMode
              ? "bg-yellow-400 shadow-[0_0_20px_8px_rgba(255,255,0,0.6)] animate-[torch-glow_2s_ease-in-out_infinite]"
              : "bg-gray-700 shadow-[0_0_10px_2px_rgba(100,100,100,0.4)]"
          }
        `}
      >
        {darkMode ? (
          // Sun (Light mode)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-yellow-900"
          >
            <path d="M12 4V2m0 20v-2m10-8h2M2 12H0m18.364-6.364l1.414-1.414M4.222 19.778l1.414-1.414M18.364 18.364l1.414 1.414M4.222 4.222l1.414 1.414M12 6a6 6 0 100 12 6 6 0 000-12z" />
          </svg>
        ) : (
          // Moon (Dark mode)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-6 h-6 text-gray-200"
          >
            <path d="M21.752 15.002A9.718 9.718 0 0112 21.75a9.75 9.75 0 010-19.5c.84 0 1.667.11 2.457.318a.75.75 0 01.147 1.392 7.5 7.5 0 008.901 11.042.75.75 0 01.247 1.3z" />
          </svg>
        )}
      </button>
    </div>
  );
};

export default TorchToggle;
