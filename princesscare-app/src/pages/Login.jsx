import React, { useState } from "react";
import "../index.css";
import icon from "../assets/images/princesscare-icon.svg";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://cashzen-api.onrender.com/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Login failed");
      }

      localStorage.setItem("token", data.token);
      localStorage.setItem("userId", data.userId);
      navigate(`/dashboard`);
    } catch (error) {
      console.error("Error response:", error.message);
      setErrorMessage(error.message);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <div className="princess-logo">
          <img src={icon} alt="princess care icon" />
        </div>
        <header>PrincessCare</header>
        <h2>Login to Your Account</h2>

        {errorMessage && (
          <p
            className="error-message"
            style={{ color: "red", textAlign: "center" }}
          >
            {errorMessage}
          </p>
        )}

        <form onSubmit={handleLogin}>
          <div className="input-field">
            <label htmlFor="email">
              <i className="fas fa-envelope"></i>Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="password">
              <i className="fas fa-lock"></i>Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <button className="login-btn" type="submit">
            Login
          </button>
        </form>

        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
