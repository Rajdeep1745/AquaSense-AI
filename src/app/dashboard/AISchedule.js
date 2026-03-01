import { useState } from "react";
import "./Dashboard.css";

const AISchedule = () => {
  const [autoMode, setAutoMode] = useState(true);

  // Mock AI Recommendation
  const aiRecommendation = {
    time: "6:00 AM",
    duration: "45 Minutes",
    waterAmount: "280 Liters",
    savings: "18%",
  };

  const weeklyPlan = [
    { day: "Monday", plan: "6:00 AM - 40 mins" },
    { day: "Tuesday", plan: "Skipped (Rain Expected)" },
    { day: "Wednesday", plan: "6:00 AM - 45 mins" },
    { day: "Thursday", plan: "6:00 AM - 35 mins" },
    { day: "Friday", plan: "6:00 AM - 50 mins" },
    { day: "Saturday", plan: "6:00 AM - 30 mins" },
    { day: "Sunday", plan: "Skipped (Soil Moisture Optimal)" },
  ];

  return (
    <div>
      <h2 className="fw-bold mb-4">AI Irrigation Schedule</h2>

      {/* 🔹 AI Recommendation Card */}
      <div className="ai-card">
        <h4 className="mb-4">🤖 AI Recommendation</h4>

        <div className="ai-grid">
          <div>
            <h6>Recommended Time</h6>
            <p>{aiRecommendation.time}</p>
          </div>

          <div>
            <h6>Duration</h6>
            <p>{aiRecommendation.duration}</p>
          </div>

          <div>
            <h6>Water Amount</h6>
            <p>{aiRecommendation.waterAmount}</p>
          </div>

          <div>
            <h6>Water Savings</h6>
            <p className="text-success fw-bold">{aiRecommendation.savings}</p>
          </div>
        </div>

        {/* Auto Toggle */}
        <div className="mt-4">
          <button
            className={`mode-btn ${autoMode ? "active-mode" : ""}`}
            onClick={() => setAutoMode(!autoMode)}
          >
            {autoMode ? "AUTO MODE ENABLED" : "MANUAL MODE"}
          </button>
        </div>
      </div>

      {/* 🔹 Weekly Plan */}
      <div className="chart-card mt-4">
        <h3 className="mb-3 fw-bold">Weekly Irrigation Plan</h3>

        {weeklyPlan.map((item, index) => (
          <div key={index} className="schedule-row">
            <strong>{item.day}</strong>
            <span>{item.plan}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AISchedule;
