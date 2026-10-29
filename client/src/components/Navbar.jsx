import { FaHardHat } from "react-icons/fa";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <FaHardHat className="logo-icon" />
        <div>
          <h2>PPE Detection Dashboard</h2>
          <p>AI Powered Construction Safety Monitoring</p>
        </div>
      </div>

      <div className="status">
        <span className="online-dot"></span>
        AI Model Online
      </div>
    </nav>
  );
}

export default Navbar;