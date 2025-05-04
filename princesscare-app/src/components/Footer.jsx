import React from "react";
import "/src/index.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-section">
        <h3>Princess Care</h3>
        <p>© {new Date().getFullYear()} Princess Care. All rights reserved.</p>
      </div>
      <div className="footer-section">
        <a href="/privacy">Privacy Policy</a> |{" "}
        <a href="/terms">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
