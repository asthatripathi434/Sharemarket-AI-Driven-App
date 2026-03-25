import { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, PieChart, Pie, Cell, Legend } from "recharts";
import { fetchDashboardStats } from "../../aiService";
import "./Stats.css";

export default function Stats() {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats()
      .then(setStats)
      .catch(console.error)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="stats-container"><p className="ai-loading">🤖 AI is generating your stats dashboard...</p></div>;
  if (!stats) return null;

  const lineData = stats.portfolio_trend || [];
  const barData = stats.sector_returns || [];
  const pieData = stats.asset_allocation || [];
  const COLORS = ["#0077cc", "#00c49f", "#ff8042"];

  return (
    <div className="stats-container">
      <h2 className="stats-heading">📊 Nextgen AI — Stats Dashboard</h2>

      <div className="stats-grid">
        <div className="stat-card"><h3>Total Invested</h3><p>₹{stats.totalInvested}</p></div>
        <div className="stat-card"><h3>Current Value</h3><p>₹{stats.currentValue}</p></div>
        <div className="stat-card"><h3>Gain/Loss</h3><p>{stats.gainLoss}</p></div>
      </div>
      <div className="stats-grid">
        <div className="stat-card"><h3>Success Rate</h3><p>{stats.successRate}%</p></div>
        <div className="stat-card"><h3>Failure Rate</h3><p>{stats.failureRate}%</p></div>
        <div className="stat-card"><h3>Avg Returns</h3><p>{stats.avgReturns}%</p></div>
      </div>
      <div className="stats-grid">
        <div className="stat-card"><h3>Top Gainer</h3><p>{stats.topGainer}</p></div>
        <div className="stat-card"><h3>Top Loser</h3><p>{stats.topLoser}</p></div>
        <div className="stat-card"><h3>Volatility Index</h3><p>{stats.volatilityIndex}</p></div>
      </div>

      {lineData.length > 0 && (
        <div className="charts-section">
          <h3>Portfolio Growth</h3>
          <LineChart width={600} height={300} data={lineData}>
            <XAxis dataKey="date" /><YAxis /><Tooltip /><CartesianGrid stroke="#ccc" />
            <Line type="monotone" dataKey="value" stroke="#0077cc" strokeWidth={2} dot={{ r: 4 }} isAnimationActive animationDuration={2000} />
          </LineChart>
          <h3>Sector Returns</h3>
          <BarChart width={600} height={300} data={barData}>
            <XAxis dataKey="sector" /><YAxis /><Tooltip /><CartesianGrid stroke="#ccc" />
            <Bar dataKey="returns" fill="#0077cc" isAnimationActive animationDuration={1500} />
          </BarChart>
          <h3>Asset Allocation</h3>
          <PieChart width={400} height={300}>
            <Pie data={pieData} cx={200} cy={150} outerRadius={100} fill="#8884d8" dataKey="value" label isAnimationActive animationDuration={2000}>
              {pieData.map((_, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Legend /><Tooltip />
          </PieChart>
        </div>
      )}
    </div>
  );
}
