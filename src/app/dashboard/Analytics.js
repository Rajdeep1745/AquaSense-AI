import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
  AreaChart,
  Area
} from "recharts";
import "./Dashboard.css";

const Analytics = () => {

  // 🔹 Summary Mock Data
  const summary = {
    totalUsed: 8420,
    saved: 1560,
    efficiency: 18
  };

  // 🔹 30 Day Water Usage
  const usageData = [
    { day: "1", value: 300 },
    { day: "5", value: 280 },
    { day: "10", value: 350 },
    { day: "15", value: 290 },
    { day: "20", value: 310 },
    { day: "25", value: 260 },
    { day: "30", value: 240 }
  ];

  // 🔹 Moisture vs Irrigation
  const comparisonData = [
    { day: "Mon", moisture: 40, irrigation: 300 },
    { day: "Tue", moisture: 35, irrigation: 280 },
    { day: "Wed", moisture: 30, irrigation: 350 },
    { day: "Thu", moisture: 32, irrigation: 290 },
    { day: "Fri", moisture: 28, irrigation: 310 },
    { day: "Sat", moisture: 34, irrigation: 260 },
    { day: "Sun", moisture: 32, irrigation: 240 }
  ];

  return (
    <div>
      <h2 className="fw-bold mb-4">System Analytics</h2>

      {/* 🔹 Summary Cards */}
      <div className="summary-grid">

        <div className="summary-card">
          <h6>Total Water Used (Month)</h6>
          <h3>{summary.totalUsed} L</h3>
        </div>

        <div className="summary-card">
          <h6>Water Saved by AI</h6>
          <h3>{summary.saved} L</h3>
        </div>

        <div className="summary-card">
          <h6>System Efficiency</h6>
          <h3>{summary.efficiency}%</h3>
        </div>

      </div>

      {/* 🔹 Water Usage Trend */}
      <div className="chart-card">
        <h5>Water Usage Trend (Last 30 Days)</h5>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={usageData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#0F766E"
              strokeWidth={3}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* 🔹 Moisture vs Irrigation */}
      <div className="chart-card">
        <h5>Soil Moisture vs Irrigation Comparison</h5>

        <ResponsiveContainer width="100%" height={300}>
          <AreaChart data={comparisonData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="day" />
            <YAxis />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="moisture"
              stroke="#10B981"
              fill="#10B981"
              fillOpacity={0.3}
            />
            <Area
              type="monotone"
              dataKey="irrigation"
              stroke="#38BDF8"
              fill="#38BDF8"
              fillOpacity={0.3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

    </div>
  );
};

export default Analytics;