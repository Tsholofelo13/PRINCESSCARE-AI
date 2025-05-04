import React from "react";
import { useNavigate } from "react-router-dom";
import Navigation from "../components/Navigation";
import "../index.css";

const Dashboard = () => {
  const navigate = useNavigate();

  const features = [
    { title: "🛍️ Products", path: "/products" },
    { title: "❤️ Donate", path: "/donate" },
    { title: "📅 Track Period", path: "/track-period" },
    { title: "📘 Learn", path: "/menstrual-health" },
    { title: "⚙️ Settings", path: "/settings" },
  ];

  return (
    <div>
      <Navigation />
      <div style={styles.page}>
        <div style={styles.dashboard}>
          <h1 style={styles.title}>Welcome to Your Dashboard</h1>
          <div style={styles.grid}>
            {features.map((feature, idx) => (
              <div
                key={idx}
                style={styles.card}
                onClick={() => navigate(feature.path)}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.background = "#ec407a")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.background = "#f8bbd0")
                }
              >
                {feature.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    backgroundColor: "#fff0f5",
    minHeight: "100vh",
    padding: "20px",
  },
  dashboard: {
    maxWidth: "900px",
    margin: "0 auto",
    background: "white",
    padding: "40px 30px",
    borderRadius: "16px",
    boxShadow: "0 0 30px rgba(0,0,0,0.1)",
  },
  title: {
    textAlign: "center",
    color: "#ec407a",
    marginBottom: "40px",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "25px",
  },
  card: {
    background: "#f8bbd0",
    color: "white",
    borderRadius: "12px",
    padding: "30px 20px",
    textAlign: "center",
    fontSize: "1.1rem",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    userSelect: "none",
  },
};

export default Dashboard;
