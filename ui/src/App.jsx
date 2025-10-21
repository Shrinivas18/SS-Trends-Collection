import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddItem from "./pages/AddItem";
import ItemsList from "./pages/ItemsList";
import Stock from "./pages/Stock";
import Sold from "./pages/Sold";
import Profit from "./pages/Profit";
import Home from "./pages/Home";
import Starter from "./pages/Starter";
import { ThemeProvider } from "./context/ThemeContext";
import { useTheme } from "./context/useTheme";
import { MAIN_CLASS } from "./features/mode/lightMode";
import { DARK_MODE_MAIN_CLASS } from "./features/mode/darkMode";

const App = () => {
  const [showLogo, setShowLogo] = useState(false);
  const isDarkMode = useTheme();
  console.log("isDarkMode::", isDarkMode);
  useEffect(() => {
    const hasShownLogo = sessionStorage.getItem("logoShown");

    if (!hasShownLogo) {
      setShowLogo(true);
      sessionStorage.setItem("logoShown", "true");

      setTimeout(() => {
        setShowLogo(false);
      }, 7000);
    }
  }, []);

  return (
    <div>
      {!showLogo && <Navbar />}
      {showLogo && <Starter />}
      <main className={isDarkMode.darkMode ? DARK_MODE_MAIN_CLASS : MAIN_CLASS}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/items-list" element={<ItemsList />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/sold" element={<Sold />} />
          <Route path="/profit" element={<Profit />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
