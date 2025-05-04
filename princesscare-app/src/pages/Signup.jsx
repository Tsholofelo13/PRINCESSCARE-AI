import React, { useState } from "react";
import "../index.css";
import icon from "../assets/images/princesscare-icon.svg";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "https://cashzen-api.onrender.com/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            first_name: formData.first_name,
            last_name: formData.last_name,
            email: formData.email,
            password: formData.password,
          }),
        }
      );

      const data = await response.json();

      console.log({
        first_name,
        last_name,
        email,
        password,
      });
      if (!response.ok) {
        throw new Error(data.error || "Signup failed");
      }

      localStorage.setItem("token", data.token);
      navigate("/dashboard");
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
        <h2>Create an Account</h2>

        {errorMessage && (
          <p
            className="error-message"
            style={{ color: "red", textAlign: "center" }}
          >
            {errorMessage}
          </p>
        )}

        <form onSubmit={handleSignup}>
          <div className="input-field">
            <label htmlFor="first_name">
              <i className="fas fa-user"></i>First Name
            </label>
            <input
              type="text"
              id="first_name"
              name="first_name"
              placeholder="Enter your first name"
              value={formData.first_name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-field">
            <label htmlFor="last_name">
              <i className="fas fa-user"></i>Last Name
            </label>
            <input
              type="text"
              id="last_name"
              name="last_name"
              placeholder="Enter your last name"
              value={formData.last_name}
              onChange={handleChange}
              required
            />
          </div>

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

          <div className="input-field">
            <label htmlFor="confirmPassword">
              <i className="fas fa-lock"></i>Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              placeholder="Confirm your password"
              required
            />
          </div>

          <button className="login-btn" type="submit">
            Sign Up
          </button>
        </form>

        <p style={{ marginTop: "1rem", textAlign: "center" }}>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
