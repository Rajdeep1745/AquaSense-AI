import { NavLink, Outlet } from "react-router-dom";
import "./Dashboard.css";

const DashboardLayout = () => {
  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className="dashboard-sidebar">
        <NavLink to="/dashboard" end>
          Dashboard
        </NavLink>

        <NavLink to="field">Field Status</NavLink>

        <NavLink to="schedule">AI Schedule</NavLink>

        <NavLink to="analytics">Analytics</NavLink>
      </div>

      {/* Main Content */}
      <div className="dashboard-content">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
