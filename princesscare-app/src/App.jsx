import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";

import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AIRecommendations from "./components/AiCycleCheck";
import Donation from "./pages/Donation";
import Products from "./pages/Products";
import SettingsPage from "./pages/Settings";
import ChatBot from "./pages/ChatBot";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/aicyclecheck" element={<AIRecommendations />} />
          <Route path="/donation" element={<Donation />} />
          <Route path="/products" element={<Products />} />
          <Route path="/settings" element={<SettingsPage />} />
          <Route path="/chatbot" element={<ChatBot />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
