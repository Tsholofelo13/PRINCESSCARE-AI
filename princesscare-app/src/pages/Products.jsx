import React from "react";
import "../index.css";

const Products = () => {
  return (
    <div className="container">
      <header>
        <h1>Princess Care</h1>
        <nav>
          <ul>
            <li>
              <a href="/" className="active">
                Home
              </a>
            </li>
            <li>
              <a href="/products">Products</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
          <div className="search-bar">
            <input type="text" placeholder="Search for products..." />
          </div>
        </nav>
      </header>

      <section className="hero">
        <div>
          <h1>Welcome to Princess Care</h1>
          <p className="slogan">Empowering women with every purchase</p>
          <div className="cta-buttons">
            <a href="/shop" className="btn">
              Shop Now
            </a>
            <a href="/learn-more" className="btn">
              Learn More
            </a>
          </div>
        </div>
        <img src="/your-logo.png" alt="Princess Care Logo" className="logo" />
      </section>

      <section className="horizontal-sections">
        <div className="section">
          <h2>Our Mission</h2>
          <p>
            We provide high-quality sanitary products and contribute to women’s
            health initiatives.
          </p>
        </div>
        <div className="section">
          <h2>Princess Hamper</h2>
          <p>
            Every purchase helps fund a hamper of essential sanitary products
            for those in need.
          </p>
        </div>
        <div className="section">
          <h2>Get Involved</h2>
          <p>
            Join our community drives and make a difference in women's lives.
          </p>
        </div>
      </section>

      <section className="gallery">
        <div className="product-card">
          <img src="/product1.jpg" alt="Product 1" className="product-image" />
          <h2>Product 1</h2>
          <p>$10.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
        <div className="product-card">
          <img src="/product2.jpg" alt="Product 2" className="product-image" />
          <h2>Product 2</h2>
          <p>$15.00</p>
          <button className="add-to-cart">Add to Cart</button>
        </div>
      </section>

      <footer>
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>Email: info@princesscare.com</p>
          <p>Phone: +123 456 7890</p>
        </div>
        <div className="footer-section">
          <h3>Follow Us</h3>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook
          </a>{" "}
          |{" "}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
        </div>
        <div className="footer-section">
          <h3>Subscribe</h3>
          <form>
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </footer>
    </div>
  );
};

export default Products;
