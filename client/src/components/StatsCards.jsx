import {
  FaUser,
  FaHardHat,
  FaShieldAlt,
  FaExclamationTriangle,
} from "react-icons/fa";

function StatsCards() {
  const stats = [
    {
      title: "Persons",
      value: 18,
      icon: <FaUser />,
      color: "#2563eb",
    },
    {
      title: "Helmet",
      value: 15,
      icon: <FaHardHat />,
      color: "#22c55e",
    },
    {
      title: "Safety Vest",
      value: 14,
      icon: <FaShieldAlt />,
      color: "#f59e0b",
    },
    {
      title: "Violations",
      value: 3,
      icon: <FaExclamationTriangle />,
      color: "#ef4444",
    },
  ];

  return (
    <div className="stats-grid">
      {stats.map((item, index) => (
        <div className="stat-card" key={index}>
          <div
            className="stat-icon-box"
            style={{ background: item.color }}
          >
            {item.icon}
          </div>

          <h4>{item.title}</h4>

          <h1>{item.value}</h1>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;