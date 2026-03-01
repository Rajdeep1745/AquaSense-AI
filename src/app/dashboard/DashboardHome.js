import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import "./Dashboard.css";

const DashboardHome = () => {
  // 🔹 Summary Mock Data
  const summary = {
    moisture: 32,
    temperature: 29,
    humidity: 65,
    tank: 78,
  };

  // 🔹 Soil Moisture Trend (7 Days)
  const moistureData = [
    { day: "Mon", value: 40 },
    { day: "Tue", value: 35 },
    { day: "Wed", value: 30 },
    { day: "Thu", value: 32 },
    { day: "Fri", value: 28 },
    { day: "Sat", value: 34 },
    { day: "Sun", value: 32 },
  ];

  // 🔹 Water Usage Data
  const waterUsageData = [
    { day: "Mon", value: 300 },
    { day: "Tue", value: 280 },
    { day: "Wed", value: 350 },
    { day: "Thu", value: 290 },
    { day: "Fri", value: 310 },
    { day: "Sat", value: 260 },
    { day: "Sun", value: 240 },
  ];

  return (
    <div>
      <h2 className="fw-bold mb-4">Smart Irrigation Dashboard</h2>

      {/* 🔹 Summary Cards */}
      <div className="summary-grid">
        <div className="summary-card">
          <h6>🌱 Soil Moisture</h6>
          <h3>{summary.moisture}%</h3>
        </div>

        <div className="summary-card">
          <h6>🌡 Temperature</h6>
          <h3>{summary.temperature}°C</h3>
        </div>

        <div className="summary-card">
          <h6>💨 Humidity</h6>
          <h3>{summary.humidity}%</h3>
        </div>

        <div className="summary-card">
          <h6>🚰 Water Tank Level</h6>
          <h3>{summary.tank}%</h3>
        </div>
      </div>

      {/* 🔹 Soil Moisture Trend */}
      <div className="chart-card">
        <h5>Soil Moisture Trend (Last 7 Days)</h5>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={moistureData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#10B981"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 🔹 Water Usage Chart */}
      <div className="chart-card">
        <h5>Daily Water Usage (Liters)</h5>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={waterUsageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#38BDF8" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DashboardHome;
