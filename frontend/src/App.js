import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CollectionPage from "./pages/CollectionPage";
import TradePage from "./pages/TradePage";
import CardSearch from './CardSearch';
import AuctionPage from "./pages/AuctionPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collection" element={<CollectionPage />} />
        <Route path="/trade" element={<TradePage />} />
        <Route path="/auction" element={<AuctionPage />} />
      </Routes>
    </Router>
  );
}

export default App;