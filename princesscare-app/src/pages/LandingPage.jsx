import React from "react";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation.jsx";
import Footer from "../components/Footer.jsx";
import "../index.css";
import logo from "../assets/images/logo.png";
import hamper from "../assets/images/hamper graphic.png";

const LandingPage = () => {
  return (
    <>
      <Navigation />
      <main className="container">
        <section className="hero-content">
          <img className="landingpage-logo" src={logo} alt="Logo" />
          <p>
            Princess Care is dedicated to providing high-quality sanitary
            products and supporting women in need through our princess hamper
            initiative.
          </p>
          <div className="cta-buttons">
            <Link to="/login" className="btn">
              Get Started
            </Link>
          </div>
        </section>

        <section className="horizontal-sections">
          <div className="section">
            <h2>Our Mission</h2>
            <p>
              We strive to ensure that every woman and young girl has access to
              essential sanitary products, promoting health and dignity.
            </p>
          </div>
          <div className="section">
            <h2>How It Works</h2>
            <p>
              Every purchase contributes to our princess hamper program,
              providing sanitary supplies to those in need.
            </p>
          </div>
          <div className="section">
            <h2>Join Us</h2>
            <p>
              Become part of a community that supports women and girls through
              your everyday purchases.
            </p>
          </div>
        </section>

        <section className="container-princess-hamper">
          <h3>About the Princess Hamper</h3>
          <div className="princess-hamper-info">
            <p>
              The princess hamper is a curated package of essential sanitary
              products delivered to women and girls in need. Your support helps
              us distribute these hampers to schools, shelters, and communities
              across the country.
            </p>
            <img src={hamper} alt="Princess Hamper" />
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
