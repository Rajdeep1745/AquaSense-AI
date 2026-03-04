import React, { useState } from "react";
import "./Overview.css";

export default function CropsOverview() {
  const cropsData = [
    {
      name: "Rice",
      icon: "🌾",
      water: "High",
      soil: "Clayey soil",
      strategy: "Controlled flooding with moisture monitoring.",
    },
    {
      name: "Maize",
      icon: "🌽",
      water: "Moderate",
      soil: "Well-drained loamy soil",
      strategy: "Drip irrigation based on root-zone moisture.",
    },
    {
      name: "Tomato",
      icon: "🍅",
      water: "Moderate",
      soil: "Sandy loam",
      strategy: "Precise drip irrigation to prevent overwatering.",
    },
    {
      name: "Wheat",
      icon: "🌱",
      water: "Low to Moderate",
      soil: "Well-drained fertile soil",
      strategy: "Scheduled irrigation during critical growth stages.",
    },
    {
      name: "Cotton",
      icon: "🌿",
      water: "Moderate",
      soil: "Black cotton soil (Regur)",
      strategy: "Drip irrigation during flowering and boll development.",
    },
    {
      name: "Sugarcane",
      icon: "🌾",
      water: "Very High",
      soil: "Deep well-drained loamy soil",
      strategy: "Drip irrigation with fertigation.",
    },
    {
      name: "Potato",
      icon: "🥔",
      water: "Moderate",
      soil: "Sandy loam",
      strategy: "Frequent light irrigation to avoid water stress.",
    },
    {
      name: "Onion",
      icon: "🧅",
      water: "Low to Moderate",
      soil: "Well-drained sandy loam",
      strategy: "Drip irrigation with moisture threshold control.",
    },
    {
      name: "Groundnut",
      icon: "🥜",
      water: "Low",
      soil: "Sandy loam",
      strategy: "Irrigation during flowering and pod formation stage.",
    },
    {
      name: "Soyabean",
      icon: "🌱",
      water: "Moderate",
      soil: "Well-drained loamy soil",
      strategy: "Avoid overwatering during vegetative stage.",
    },
  ];

  const [selectedCrops, setSelectedCrops] = useState([]);

  const handleAddCrop = (crop) => {
    if (!selectedCrops.includes(crop.name)) {
      setSelectedCrops([...selectedCrops, crop.name]);
    }
  };

  const handleRemoveCrop = (cropName) => {
    setSelectedCrops(selectedCrops.filter((c) => c !== cropName));
  };

  return (
    <section className="crops-container">
      <h1>Crops Overview</h1>

      <p className="intro">
        Select crops to generate customized irrigation scheduling and water
        optimization strategies.
      </p>

      {/* Selected Crops Section */}
      {selectedCrops.length > 0 && (
        <div className="selected-section">
          <h2>🌟 Selected Crops</h2>
          <div className="selected-list">
            {selectedCrops.map((crop) => (
              <div key={crop} className="selected-item">
                {crop}
                <button
                  className="delete-icon"
                  onClick={() => handleRemoveCrop(crop)}
                >
                  X
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Crop Grid */}
      <div className="crop-grid">
        {cropsData.map((crop) => (
          <div key={crop.name} className="crop-card">
            <h2>
              {crop.icon} {crop.name}
            </h2>
            <p>
              <strong>Water Requirement:</strong> {crop.water}
            </p>
            <p>
              <strong>Ideal Soil:</strong> {crop.soil}
            </p>
            <p>
              <strong>Irrigation Strategy:</strong> {crop.strategy}
            </p>

            <button className="add-btn" onClick={() => handleAddCrop(crop)}>
              Add to List
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
