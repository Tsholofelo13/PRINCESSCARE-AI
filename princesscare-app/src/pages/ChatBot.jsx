import React, { useState } from "react";
import "../index.css";
import Navigation from "../components/Navigation";
import Footer from "../components/Footer";

const ChatBot = () => {
  const [input, setInput] = useState(""); // Store user's input
  const [messages, setMessages] = useState([]); // Store messages (user + AI)
  const [loading, setLoading] = useState(false); // Loading state while waiting for the response

  // Function to handle sending the question to the backend
  const sendMessage = async () => {
    if (!input.trim()) return; // Don't send empty messages

    const newMessage = {
      text: input,
      sender: "user",
    };

    const requestBody = {
      input,
    };
    // Add user's message to the chat
    setMessages((prevMessages) => [...prevMessages, newMessage]);
    setInput(""); // Clear input field
    setLoading(true); // Start loading indicator

    try {
      console.log("Sending request to API with:", requestBody);
      // Call the backend API using fetch
      const response = await fetch(
        "https://cashzen-api.onrender.com/api/ai/aimenstrualhealth",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }
      );

      console.log("API Response Status:", response.status);
      // Check if the response is OK (status 200)
      if (response.ok) {
        const result = await response.json();
        console.log("API Response Data:", result);

        const aiMessage = {
          text: result,
          sender: "ai",
        };

        setMessages((prevMessages) => [...prevMessages, aiMessage]);
      } else {
        // Handle API error
        console.error("API Error: ", response.status);
        setMessages((prevMessages) => [
          ...prevMessages,
          {
            text: "Sorry, there was an error. Please try again.",
            sender: "ai",
          },
        ]);
      }
    } catch (error) {
      // Handle any network or fetch error
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: "Sorry, there was an error. Please try again.", sender: "ai" },
      ]);
    }

    setLoading(false); // Stop loading
  };

  return (
    <div>
      <Navigation />

      <div className="chatbot-container">
        <div className="chatbox">
          {/* Display all messages */}
          <div className="messages">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`message ${
                  message.sender === "user" ? "user" : "ai"
                }`}
              >
                {message.text}
              </div>
            ))}
          </div>

          {/* Input area */}
          <div className="input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask me about menstrual cycles..."
            />
            <button onClick={sendMessage} disabled={loading}>
              {loading ? "Loading..." : "Send"}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ChatBot;
