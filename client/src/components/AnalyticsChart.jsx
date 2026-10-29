import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Persons", value: 18 },
  { name: "Helmet", value: 15 },
  { name: "Vest", value: 14 },
  { name: "Violations", value: 3 },
];

function AnalyticsChart() {
  return (
    <div className="chart-card">
      <h2>Detection Analytics</h2>

      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="value" fill="#2563eb" radius={[8, 8, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

export default AnalyticsChart;