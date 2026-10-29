import Navbar from "../components/Navbar";
import Upload from "../components/Upload";
import StatsCards from "../components/StatsCards";
import ComplianceCard from "../components/ComplianceCard";
import AnalyticsChart from "../components/AnalyticsChart";
import VideoPlayer from "../components/VideoPlayer";
import Footer from "../components/Footer";
import DetectionSummary from "../components/DetectionSummary";

function Dashboard() {
  return (
    <>
      <Navbar />

      <div className="dashboard">

        <div className="hero">
          <h1>Construction Site PPE Detection</h1>

          <p>
            Upload a construction site video and detect helmets,
            safety vests and PPE violations using Artificial Intelligence.
          </p>
        </div>

        {/* Upload + Stats */}
        <div className="dashboard-grid">
          <Upload />
          <StatsCards />
        </div>

        {/* Compliance + Summary */}
        <div className="dashboard-grid">
          <ComplianceCard />
          <DetectionSummary />
        </div>

        {/* Chart */}
        <AnalyticsChart />

        {/* Processed Video */}
        <VideoPlayer />

        <Footer />

      </div>
    </>
  );
}

export default Dashboard;