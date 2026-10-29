import {
  FaVideo,
  FaClock,
  FaShieldAlt,
  FaCheckCircle,
} from "react-icons/fa";

function DetectionSummary() {
  return (
    <div className="summary-card">

      <h2>Detection Summary</h2>

      <div className="summary-item">
        <span><FaVideo /> Video</span>
        <strong>test.mp4</strong>
      </div>

      <div className="summary-item">
        <span><FaClock /> Processing</span>
        <strong>18 sec</strong>
      </div>

      <div className="summary-item">
        <span><FaShieldAlt /> Compliance</span>
        <strong>87%</strong>
      </div>

      <div className="summary-item">
        <span><FaCheckCircle /> Status</span>
        <strong className="success">Completed</strong>
      </div>

    </div>
  );
}

export default DetectionSummary;