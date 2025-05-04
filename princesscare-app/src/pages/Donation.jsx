import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer.jsx";
import "../index.css";
import logo from "../assets/images/logo.png";
import hamper from "../assets/images/hamper graphic.png";

function Donation() {
  const handleSubmit = (event) => {
    event.preventDefault();

    // Gather all the data from the form
    const orgName = document.getElementById("orgName").value;
    const email = document.getElementById("email").value;
    const contactPerson = document.getElementById("contactPerson").value;
    const products = [];

    // Collect all products and their quantities
    document.querySelectorAll(".product-item").forEach((item) => {
      const productType = item.querySelector(".productType").value;
      const productQuantity = item.querySelector(".productQuantity").value;
      products.push({ type: productType, quantity: productQuantity });
    });

    const message = document.getElementById("message").value;

    // Display a confirmation message
    alert("Thank you for your donation! We will contact you soon.");

    // Optional: Here, you could send the collected data to a server or API
  };

  const addProduct = () => {
    const productSection = document.getElementById("product-section");
    const newProductItem = document.createElement("div");
    newProductItem.classList.add("product-item");

    newProductItem.innerHTML = `
      <select class="productType" required>
          <option value="">Select Product Type</option>
          <option value="pads">Pads</option>
          <option value="pantyliners">Pantyliners</option>
          <option value="tampons">Tampons</option>
          <option value="menstrualcups">Menstrual Cups</option>
          <option value="periodUnderwear">Period Underwear</option>
          <option value="periodSponges">Period Sponges</option>
          <option value="menstrualWipes">Menstrual Wipes</option>
          <option value="maternityPads">Maternity Pads</option>
          <option value="handWashes">Hand Washes</option>
      </select>
      <input type="number" class="productQuantity" placeholder="Quantity" min="1" required>
      <button type="button" class="remove-product" onclick="removeProduct(this)">Remove</button>
    `;

    productSection.appendChild(newProductItem);
  };

  const removeProduct = (button) => {
    button.parentElement.remove();
  };

  return (
    <div>
      <Navigation />
      <section className="section" id="donate">
        <h3>Donate Sanitary Products</h3>
        <p>
          Your donation can help provide pads, pantyliners, wipes, hand washes,
          and more to girls in need. Fill out the form below to get involved.
        </p>

        {/* Donation Form */}
        <form className="donation-form" onSubmit={handleSubmit}>
          <input
            type="text"
            id="orgName"
            placeholder="Organization/NGO Name"
            required
          />
          <input type="email" id="email" placeholder="Contact Email" required />
          <input
            type="text"
            id="contactPerson"
            placeholder="Contact Person"
            required
          />

          {/* Product Selection and Quantity */}
          <div id="product-section">
            <div className="product-item">
              <select className="productType" required>
                <option value="">Select Product Type</option>
                <option value="pads">Pads</option>
                <option value="pantyliners">Pantyliners</option>
                <option value="tampons">Tampons</option>
                <option value="menstrualcups">Menstrual Cups</option>
                <option value="periodUnderwear">Period Underwear</option>
                <option value="periodSponges">Period Sponges</option>
                <option value="menstrualWipes">Menstrual Wipes</option>
                <option value="maternityPads">Maternity Pads</option>
                <option value="handWashes">Hand Washes</option>
              </select>
              <input
                type="number"
                className="productQuantity"
                placeholder="Quantity"
                min="1"
                required
              />
              <button
                type="button"
                className="remove-product"
                onClick={() => removeProduct}
              >
                Remove
              </button>
            </div>
          </div>

          {/* Add More Products Button */}
          <button type="button" onClick={addProduct}>
            Add Another Product
          </button>

          {/* Message and Submit Button */}
          <textarea
            id="message"
            rows="5"
            placeholder="Message or Additional Information"
          ></textarea>
          <button type="submit">Submit Donation</button>
        </form>
      </section>

      <Footer />
    </div>
  );
}

export default Donation;
