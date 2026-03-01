import { useState } from "react";
import "./Dashboard.css";

const FieldStatus = () => {
  const [crop, setCrop] = useState("Rice");
  const [area, setArea] = useState(2);
  const [growth, setGrowth] = useState("Vegetative Stage");
  const [pumpCount, setPumpCount] = useState(2);
  const [pumpCapacity, setPumpCapacity] = useState(120);

  const areaValue = Number(area) || 0;
  const totalOutput = (Number(pumpCount) || 0) * (Number(pumpCapacity) || 0);

  return (
    <div>
      <h2 className="fw-bold mb-4">🌿 Field Configuration</h2>

      <div className="info-grid">
        <div className="info-card">
          <h6>🌾 Crop Type</h6>
          <select
            className="field-select"
            value={crop}
            onChange={(e) => setCrop(e.target.value)}
          >
            <option>Rice</option>
            <option>Wheat</option>
            <option>Maize</option>
            <option>Cotton</option>
            <option>Sugarcane</option>
          </select>
        </div>

        <div className="info-card">
          <h6>📏 Field Area</h6>
          <div className="input-with-unit">
            <input
              type="number"
              min="0.1"
              step="0.1"
              className="field-input"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="Enter area"
            />
            <span className="input-unit">ha</span>
          </div>
          <p className="field-hint mb-0">Total cultivated land in hectares.</p>
        </div>

        <div className="info-card">
          <h6>🌱 Growth Stage</h6>
          <select
            className="field-select"
            value={growth}
            onChange={(e) => setGrowth(e.target.value)}
          >
            <option>Seedling</option>
            <option>Vegetative Stage</option>
            <option>Flowering</option>
            <option>Maturity</option>
          </select>
        </div>

        <div className="info-card">
          <h6>🚰 Number of Pumps</h6>
          <input
            type="number"
            min="0"
            className="field-input"
            value={pumpCount}
            onChange={(e) => setPumpCount(e.target.value)}
          />
        </div>

        <div className="info-card">
          <h6>💧 Each Pump Output (L/min)</h6>
          <input
            type="number"
            min="0"
            className="field-input"
            value={pumpCapacity}
            onChange={(e) => setPumpCapacity(e.target.value)}
          />
        </div>
      </div>

      <div className="field-visual-card mt-5">
        <h4 className="mb-4">⚙️ Pump System Overview</h4>

        <div className="health-grid">
          <div>
            <h6>🗺️ Total Field Area</h6>
            <p>{areaValue} ha</p>
          </div>

          <div>
            <h6>🔢 Total Pumps</h6>
            <p>{pumpCount || 0}</p>
          </div>

          <div>
            <h6>💦 Individual Output</h6>
            <p>{pumpCapacity || 0} L/min</p>
          </div>

          <div>
            <h6>🚿 Total Output Capacity</h6>
            <p>{totalOutput} L/min</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldStatus;
