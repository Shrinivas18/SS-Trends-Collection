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

const App = () => {
  const [showLogo, setShowLogo] = useState(false);

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
    <ThemeProvider>
      <div>
        {!showLogo && <Navbar />}
        {showLogo && <Starter />}
        <main className="pt-20 px-4">
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
    </ThemeProvider>
  );
};

export default App;
