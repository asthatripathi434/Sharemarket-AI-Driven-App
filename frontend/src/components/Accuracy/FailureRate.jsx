import "./FailureRate.css";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar, Doughnut } from "react-chartjs-2";

export default function FailureRate({ stats }) {
  const sectorStats = stats?.sectorStats || [
    {sector:"IT",failure:16},{sector:"Pharma",failure:22},{sector:"FMCG",failure:28},{sector:"Banking",failure:12},{sector:"Energy",failure:20}
  ];
  const barData = {
    labels: sectorStats.map(s => s.sector),
    datasets: [
      { label: "Success Rate (%)", data: sectorStats.map(s => 100 - s.failure), backgroundColor: "#4fef44", borderRadius: 6 },
      { label: "Failure Rate (%)", data: sectorStats.map(s => s.failure), backgroundColor: "#ef4444", borderRadius: 6 },
    ],
  };
  const doughnutData = {
    labels: ["Success", "Failure"],
    datasets: [{ data: [stats?.overallSuccess ?? 82, stats?.overallFailure ?? 18], backgroundColor: ["#22c55e", "#ef4444"], borderWidth: 2 }],
  };
  return (
    <div className="failure-container">
      <h2 className="failure-heading">❌ Nextgen AI — Failure Analysis</h2>
      <p className="failure-text">Monitor the areas where AI trading insights faced challenges.</p>
      <div className="stats-grid">
        <div className="stat-box failure"><span className="stat-label">Overall Failure</span><span className="stat-value">{stats?.overallFailure ?? 18}%</span></div>
        <div className="stat-box highlight"><span className="stat-label">Most Challenging Sector</span><span className="stat-value">{stats?.worstSector ?? "FMCG (28%)"}</span></div>
      </div>
      <div className="chart-section"><h3 className="chart-heading">📊 Sector-wise Failure</h3><Bar data={barData} /></div>
      <div className="chart-section small-chart"><h3 className="chart-heading">🍩 Overall Failure Distribution</h3><div className="chart-wrapper"><Doughnut data={doughnutData} options={{ maintainAspectRatio: false }} /></div></div>
    </div>
  );
}
