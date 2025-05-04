import React from "react";
import { Link } from "react-router-dom";
import "/src/index.css";

const Navigation = () => {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/dashboard" className="active">
              Home
            </Link>
          </li>
          <li>
            <Link to="/products">Products</Link>
          </li>
          <li>
            <Link to="/aicyclecheck">AI Track Cycle</Link>
          </li>
          <li>
            <Link to="/donation">Donation</Link>
          </li>
          <li>
            <Link to="/chatbot">AI Chatbot</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navigation;
