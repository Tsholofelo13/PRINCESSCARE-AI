import React, { useState, useEffect } from "react";
import Navigation from "../components/Navigation";
import "../index.css";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const [cartItems, setCartItems] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  // Store items data
  const storeItems = {
    1: {
      id: 1,
      name: "Always Maxi Duo Sanitary Pads Super Plus x 18",
      price: 53.95 + 53.95 * 0.4,
      quantity: 0,
      image: "/src/assets/images/always pad pack.jpeg",
    },
    2: {
      id: 2,
      name: "Lil-lets Tampons x32",
      price: 54.99 + 54.99 * 0.4,
      quantity: 0,
      image: "/src/assets/images/lilets tampons.jpeg",
    },
    3: {
      id: 3,
      name: "Always Sensitive Sanitary Pads Ultra Super Plus",
      price: 52.95 + 52.95 * 0.4,
      quantity: 0,
      image:
        "/src/assets/images/Always Sensitive Santary Pads Ultra Super Plus.webp",
    },
    4: {
      id: 4,
      name: "PURA Health Alcohol Wipes Hand Sanitizer",
      price: 32.5 + 32.5 * 0.4,
      quantity: 0,
      image: "/src/assets/images/Alcohol Wipes Hand Sanitizer.webp",
    },
    5: {
      id: 5,
      name: "Dettol Hand Sanitizer",
      price: 86.45 + 86.45 * 0.4,
      quantity: 0,
      image: "/src/assets/images/Hand Sanitizer.webp",
    },
  };

  // Add item to cart
  const addToCart = (productId) => {
    const product = storeItems[productId];
    const existingItem = cartItems.find((item) => item.id === productId);

    if (existingItem) {
      existingItem.quantity += 1; // Increase quantity by 1
    } else {
      const cartItem = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      };
      setCartItems([...cartItems, cartItem]);
    }

    updateCartTotal();
  };

  // Update the total cart price
  const updateCartTotal = () => {
    let total = 0;
    cartItems.forEach((item) => {
      total += item.price * item.quantity;
    });
    setCartTotal(total);
  };

  // Handle placing an order
  const handlePlaceOrder = () => {
    // Logic for placing the order
    alert("Order placed successfully!");
  };

  // Handle tracking an order
  const trackOrder = () => {
    // Logic for tracking the order
    alert("Tracking your order...");
  };

  // Render product cards
  const renderProducts = () => {
    return Object.values(storeItems).map((product) => (
      <div key={product.id} className="product-card">
        <img src={product.image} alt={product.name} />
        <h3>{product.name}</h3>
        <p>R{product.price.toFixed(2)}</p>
        <button onClick={() => addToCart(product.id)}>Add to Cart</button>
      </div>
    ));
  };

  return (
    <div>
      <Navigation />

      {/* Hero Section */}
      <section id="hero" className="hero">
        <div className="princess-hamper-information">
          <h1>Princess Hamper</h1>
          <p>
            The Princess Hamper is a basket of sanitary health products. By
            purchasing on our website you help fund a princess hamper for a girl
            in need.
          </p>
        </div>
        <img src="/src/assets/images/hamper graphic.png" alt="hamper graphic" />
      </section>

      {/* Product Gallery */}
      <div className="gallery">{renderProducts()}</div>

      {/* Cart Section */}
      <div className="cart" id="cart">
        <h2>Your Cart</h2>
        <div id="cartItems">
          {cartItems.map((item, index) => (
            <div key={index}>
              <span>
                {item.name} x {item.quantity}
              </span>
            </div>
          ))}
        </div>
        <p>
          Total: R<span id="cartTotal">{cartTotal.toFixed(2)}</span>
        </p>
      </div>

      {/* Order Form */}
      <div className="order-form">
        <h2>Your Details</h2>
        <input type="text" id="name" placeholder="Full Name" />
        <input type="email" id="email" placeholder="Email Address" />
        <input type="text" id="address" placeholder="Delivery Address" />
        <button id="place-order-button" onClick={handlePlaceOrder}>
          Place Order
        </button>
      </div>

      {/* Order Tracking */}
      <div className="order-tracking">
        <h2>Track Your Order</h2>
        <input type="text" id="orderId" placeholder="Enter your Order ID" />
        <button onClick={trackOrder}>Track Order</button>
        <div id="trackingResult"></div>
      </div>

      {/* Info Section */}
      <div className="info-section">
        <h2>Menstrual Health Tips</h2>
        <ul>
          <li>Change your pad or tampon every 4-8 hours.</li>
          <li>Maintain good hygiene practices during your period.</li>
          <li>Stay hydrated and eat a balanced diet.</li>
          <li>Exercise regularly to help with cramps and mood.</li>
        </ul>
      </div>

      {/* Footer */}
      <footer id="contact">
        <div className="container">
          <div className="footer-section">
            <h3>Contact Us</h3>
            <p>Email: support@princesscare.co.za</p>
            <p>Phone: +011 456 7890</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Products;
