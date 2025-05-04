import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import { Circles } from "react-loader-spinner";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import AIRecommendations from "./components/AiCycleCheck";
import Donation from "./pages/Donation";

function App() {
  const [loading, setLoading] = useState(true); // Add the loading state

  useEffect(() => {
    // Simulate a loading delayfu
    const timer = setTimeout(() => {
      setLoading(false); // After 3 seconds, hide the loading animation
    }, 3000);

    return () => clearTimeout(timer); // Clean up the timer on component unmount
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <div>
      {/* Show the loading animation while the state is true */}
      {loading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Circles color="#ff69b4" height={80} width={80} />
        </div>
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/aicyclecheck" element={<AIRecommendations />} />
            <Route path="/donation" element={<Donation />} />
          </Routes>
        </BrowserRouter>
      )}
    </div>
  );
}
export default App;
