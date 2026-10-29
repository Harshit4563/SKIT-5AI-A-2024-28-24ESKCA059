import { FaRobot } from "react-icons/fa";

function StatusCard() {
  return (
    <div className="status-card">

      <div className="status-header">

        <FaRobot className="status-icon"/>

        <div>
          <h3>AI Model</h3>
          <p>YOLOv8 PPE Detection</p>
        </div>

      </div>

      <div className="status-online">
        🟢 ONLINE
      </div>

    </div>
  );
}

export default StatusCard;