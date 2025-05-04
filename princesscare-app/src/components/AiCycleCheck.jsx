import React, { useState } from "react";
import Navigation from "./Navigation";

const AiRecommendation = () => {
  const [lastPeriod, setLastPeriod] = useState("");
  const [cycleLength, setCycleLength] = useState("");
  const [periodLength, setPeriodLength] = useState("");
  const [flow, setFlow] = useState("");
  const [pain, setPain] = useState("");
  const [discomfort, setDiscomfort] = useState("");
  const [prediction, setPrediction] = useState("");
  const [recommendations, setRecommendations] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!lastPeriod || !cycleLength || !periodLength || !flow || !pain) {
      setPrediction("Please fill out all required fields.");
      return;
    }

    const requestBody = {
      cycleData: {
        lastPeriodDate: lastPeriod,
        cycleLength: Number(cycleLength),
        periodLength: Number(periodLength),
      },
    };

    setPrediction("Thinking...");

    try {
      const response = await fetch(
        "https://cashzen-api.onrender.com/api/ai/recommend",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(requestBody),
        }
      );

      const data = await response.json();
      const aiText = data.choices[0].message.content;
      setPrediction(aiText);
      setRecommendations(
        "Based on your input, here are some tips and recommendations."
      );
    } catch (error) {
      console.error(error);
      setPrediction("Error fetching recommendations.");
      setRecommendations("");
    }
  };

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        background: "#ffe0f0",
        textAlign: "center",
        padding: "20px",
      }}
    >
      {" "}
      <Navigation />
      <h2>Let's Get to Know You</h2>
      <form id="cycleForm" onSubmit={handleSubmit}>
        <label htmlFor="lastPeriod">When did your last period start?</label>
        <input
          type="date"
          id="lastPeriod"
          name="lastPeriod"
          value={lastPeriod}
          onChange={(e) => setLastPeriod(e.target.value)}
          required
        />

        <label htmlFor="cycleLength">
          What is your average cycle length (in days)?
        </label>
        <input
          type="number"
          id="cycleLength"
          name="cycleLength"
          min="20"
          max="45"
          value={cycleLength}
          onChange={(e) => setCycleLength(e.target.value)}
          required
        />

        <label htmlFor="periodLength">
          How many days does your period usually last?
        </label>
        <input
          type="number"
          id="periodLength"
          name="periodLength"
          min="1"
          max="10"
          value={periodLength}
          onChange={(e) => setPeriodLength(e.target.value)}
          required
        />

        <label htmlFor="flow">How would you describe your flow?</label>
        <select
          id="flow"
          name="flow"
          value={flow}
          onChange={(e) => setFlow(e.target.value)}
          required
        >
          <option value="">Select one</option>
          <option value="light">Light</option>
          <option value="medium">Medium</option>
          <option value="heavy">Heavy</option>
        </select>

        <label htmlFor="pain">Do you experience period pain?</label>
        <select
          id="pain"
          name="pain"
          value={pain}
          onChange={(e) => setPain(e.target.value)}
          required
        >
          <option value="">Select one</option>
          <option value="none">None</option>
          <option value="mild">Mild</option>
          <option value="moderate">Moderate</option>
          <option value="severe">Severe</option>
        </select>

        <label htmlFor="discomfort">
          Any other symptoms or discomfort you'd like to share?
        </label>
        <input
          type="text"
          id="discomfort"
          name="discomfort"
          value={discomfort}
          onChange={(e) => setDiscomfort(e.target.value)}
          placeholder="(Optional)"
        />

        <button type="submit">Get My Cycle & Tips</button>
      </form>
      <div id="results" style={{ marginTop: "20px" }}>
        <h3>Your Cycle & Recommendations</h3>
        <p id="prediction">{prediction}</p>
        <p id="recommendations">{recommendations}</p>
      </div>
    </div>
  );
};

export default AiRecommendation;
