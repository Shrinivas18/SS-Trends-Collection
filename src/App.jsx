import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import AddItem from "./components/AddItem";
import ItemsList from "./components/ItemsList";
import Stock from "./components/Stock";
import Sold from "./components/Sold";
import Profit from "./components/Profit";
import Home from "./components/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-20 px-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/items-list" element={<ItemsList />} />
          <Route path="/stock" element={<Stock />} />
          <Route path="/sold" element={<Sold />} />
          <Route path="/profit" element={<Profit />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
