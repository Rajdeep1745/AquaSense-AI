import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>

        <div className="container text-center hero-content">
          <h1 className="display-4 fw-bold">
            Intelligent Water Optimization System
          </h1>

          <p className="lead mt-3">
            AI-powered Precision Irrigation using Soil Moisture, Weather
            Forecasts & Crop Data.
          </p>

          <div className="mt-4">
            <NavLink to="/dashboard" className="btn btn-success btn-lg me-3">
              Go to Dashboard
            </NavLink>

            <NavLink to="/about" className="btn btn-outline-light btn-lg">
              Learn More
            </NavLink>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-5 bg-light">
        <div className="container text-center">
          <h2 className="mb-4">How It Works</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h5>🌱 Soil Moisture Sensors</h5>
                <p>
                  Real-time monitoring of soil conditions using IoT sensors.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h5>🌦 Weather Forecast API</h5>
                <p>
                  Integrates live weather predictions to prevent overwatering.
                </p>
              </div>
            </div>

            <div className="col-md-4">
              <div className="card shadow-sm p-3">
                <h5>🤖 AI Irrigation Scheduler</h5>
                <p>Smart algorithm generates optimized irrigation schedules.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-5">
        <div className="container text-center">
          <h2 className="mb-4">Key Features</h2>
          <div className="row">
            <div className="col-md-3">
              <h6>📊 Real-Time Monitoring</h6>
              <p>Track soil moisture and water usage live.</p>
            </div>

            <div className="col-md-3">
              <h6>💧 Water Usage Optimization</h6>
              <p>Minimizes water wastage efficiently.</p>
            </div>

            <div className="col-md-3">
              <h6>🌾 Crop Health Insights</h6>
              <p>Maintains ideal moisture levels for crops.</p>
            </div>

            <div className="col-md-3">
              <h6>⚙ Automated Pump Control</h6>
              <p>Auto irrigation based on AI schedule.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="text-center py-5 bg-dark text-light">
        <h2>Start Optimizing Water Today</h2>
        <NavLink to="/dashboard" className="btn btn-success btn-lg mt-3">
          Launch Dashboard
        </NavLink>
      </section>
    </div>
  );
};

export default Home;
