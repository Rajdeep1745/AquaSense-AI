import "./Footer.css";

const Footer = () => {
  return (
    <footer className="custom-footer mt-auto">
      <div className="container">
        <div className="row">
          {/* About */}
          <div className="col-md-4 mb-3">
            <h5>AquaSense AI</h5>
            <p>
              Intelligent Water Optimization System for Precision Irrigation.
              Helping farmers save water and improve crop health using IoT & AI.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 mb-3">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-light text-decoration-none">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/dashboard"
                  className="text-light text-decoration-none"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a href="/overview" className="text-light text-decoration-none">
                  Field Overview
                </a>
              </li>
              <li>
                <a href="/schedule" className="text-light text-decoration-none">
                  Schedule
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="col-md-4 mb-3">
            <h5>Contact</h5>
            <p>Email: support@aquasense.ai</p>
            <p>Location: Smart Agriculture Lab</p>
          </div>
        </div>

        <hr className="border-light" />

        <div className="text-center">
          <small>
            © {new Date().getFullYear()} AquaSense AI. All Rights Reserved.
          </small>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
