import "./SuccessRate.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";

export default function SuccessRate({ stats }) {
  const sectorStats = stats?.sectorStats || [
    {sector:"IT",success:84,failure:16},{sector:"Pharma",success:78,failure:22},
    {sector:"FMCG",success:72,failure:28},{sector:"Banking",success:88,failure:12},{sector:"Energy",success:80,failure:20}
  ];

  const barData = {
    labels: sectorStats.map(s => s.sector),
    datasets: [
      { label: "Success Rate (%)", data: sectorStats.map(s => s.success), backgroundColor: "#22c55e", borderRadius: 6 },
      { label: "Failure Rate (%)", data: sectorStats.map(s => s.failure), backgroundColor: "#ef4444", borderRadius: 6 },
    ],
  };
  const doughnutData = {
    labels: ["Success", "Failure"],
    datasets: [{ data: [stats?.overallSuccess ?? 82, stats?.overallFailure ?? 18], backgroundColor: ["#22c55e", "#ef4444"], borderWidth: 2 }],
  };

  return (
    <div className="success-container">
      <h2 className="success-heading">🎯 Nextgen AI — Success Rate</h2>
      <p className="success-text">Track the AI prediction accuracy across Indian market sectors.</p>
      <div className="stats-grid">
        <div className="stat-box success"><span className="stat-label">AI Success Rate</span><span className="stat-value">{stats?.overallSuccess ?? 82}%</span></div>
        <div className="stat-box highlight"><span className="stat-label">Best Performing Sector</span><span className="stat-value">{stats?.bestSector ?? "Banking (88%)"}</span></div>
      </div>
      <div className="chart-section"><h3 className="chart-heading">📊 Sector-wise Success vs Failure</h3><Bar data={barData} /></div>
      <div className="chart-section small-chart"><h3 className="chart-heading">🍩 Overall Distribution</h3><div className="chart-wrapper"><Doughnut data={doughnutData} options={{ maintainAspectRatio: false }} /></div></div>
    </div>
  );
}
