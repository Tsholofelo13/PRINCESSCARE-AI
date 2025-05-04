import React, { useState } from "react";
import "../index.css";
import Navigation from "../components/Navigation";
const SettingsPage = () => {
  const [activeSection, setActiveSection] = useState("account-settings");
  const [photoSuccess, setPhotoSuccess] = useState(false);
  const [accountSuccess, setAccountSuccess] = useState(false);
  const [filtersSuccess, setFiltersSuccess] = useState(false);
  const [preferencesSuccess, setPreferencesSuccess] = useState(false);
  const [accessibilitySuccess, setAccessibilitySuccess] = useState(false);
  const [displaySuccess, setDisplaySuccess] = useState(false);
  const [languageSuccess, setLanguageSuccess] = useState(false);
  const [passwordSuccess, setPasswordSuccess] = useState(false);
  const [twoFactorSuccess, setTwoFactorSuccess] = useState(false);
  const [devicesSuccess, setDevicesSuccess] = useState(false);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setAccountSuccess(true);
    setTimeout(() => setAccountSuccess(false), 3000);
  };

  const handlePasswordSubmit = (event) => {
    event.preventDefault();
    const newPassword = event.target.newPassword.value;
    const confirmPassword = event.target.confirmPassword.value;
    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    setPasswordSuccess(true);
    setTimeout(() => setPasswordSuccess(false), 3000);
  };

  const togglePanel = (panelId) => {
    const panel = document.getElementById(panelId);
    panel.style.display = panel.style.display === "block" ? "none" : "block";
  };

  return (
    <div>
      <Navigation />

      <main>
        <div className="settings-menu">
          <ul>
            <li
              data-section="account-settings"
              className={activeSection === "account-settings" ? "active" : ""}
              onClick={() => handleSectionChange("account-settings")}
            >
              Account Settings
            </li>
            <li
              data-section="notifications"
              className={activeSection === "notifications" ? "active" : ""}
              onClick={() => handleSectionChange("notifications")}
            >
              Notifications
            </li>
            <li
              data-section="accessibility"
              className={activeSection === "accessibility" ? "active" : ""}
              onClick={() => handleSectionChange("accessibility")}
            >
              Accessibility, Display, & Language
            </li>
            <li
              data-section="password-security"
              className={activeSection === "password-security" ? "active" : ""}
              onClick={() => handleSectionChange("password-security")}
            >
              Password & Security
            </li>
          </ul>
        </div>

        <div
          className={`settings-section ${
            activeSection === "account-settings" ? "active" : ""
          }`}
          id="account-settings"
        >
          <h2>Account Settings</h2>
          <div className="update-photo">
            <label htmlFor="upload-photo">Upload a New Photo</label>
            <input type="file" id="upload-photo" accept="image/*" />
            <button id="update-photo-btn" onClick={() => setPhotoSuccess(true)}>
              Update
            </button>
            {photoSuccess && (
              <div className="success-message">Photo updated successfully!</div>
            )}
          </div>
          <div className="update-information">
            <form id="account-form" onSubmit={handleFormSubmit}>
              <label htmlFor="full-name">Full Name</label>
              <input type="text" id="full-name" defaultValue="Jane Doe" />
              <label htmlFor="email-address">Email Address</label>
              <input
                type="email"
                id="email-address"
                defaultValue="jane.doe@example.com"
              />
              <label htmlFor="address">Address</label>
              <input type="text" id="address" defaultValue="123 Main St" />
              <label htmlFor="city">City</label>
              <input type="text" id="city" defaultValue="New York" />
              <label htmlFor="state">State/Province</label>
              <input type="text" id="state" defaultValue="NY" />
              <label htmlFor="country">Country</label>
              <input type="text" id="country" defaultValue="USA" />
              <button type="submit">Update Information</button>
              {accountSuccess && (
                <div className="success-message">
                  Information updated successfully!
                </div>
              )}
            </form>
          </div>
        </div>

        {/* Notifications Section */}
        <div
          className={`settings-section ${
            activeSection === "notifications" ? "active" : ""
          }`}
          id="notifications"
        >
          <h2>Notifications</h2>
          {/* More notification options go here */}
        </div>

        {/* Accessibility, Display, & Language Section */}
        <div
          className={`settings-section ${
            activeSection === "accessibility" ? "active" : ""
          }`}
          id="accessibility"
        >
          <h2>Accessibility, Display, & Language</h2>
          {/* More accessibility options go here */}
        </div>

        {/* Password & Security Section */}
        <div
          className={`settings-section ${
            activeSection === "password-security" ? "active" : ""
          }`}
          id="password-security"
        >
          <h2>Password & Security</h2>
          <form id="password-form" onSubmit={handlePasswordSubmit}>
            <label htmlFor="current-password">Current Password</label>
            <input type="password" id="current-password" required />
            <label htmlFor="new-password">New Password</label>
            <input type="password" id="new-password" required />
            <label htmlFor="confirm-password">Confirm New Password</label>
            <input type="password" id="confirm-password" required />
            <button type="submit">Update Password</button>
            {passwordSuccess && (
              <div className="success-message">
                Password updated successfully!
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
};

export default SettingsPage;
