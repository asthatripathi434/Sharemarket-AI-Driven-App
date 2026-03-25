import "./AvgReturns.css";

export default function AvgReturns({ stats }) {
  const returns = stats?.sectorReturns || { IT: 15, Energy: 10, Finance: 11, Healthcare: 9, Pharma: 12, FMCG: 8 };
  return (
    <div className="avg-container">
      <h2 className="avg-heading">💰 Nextgen AI — Average Returns</h2>
      <p className="avg-text">AI-generated average returns across Indian market sectors.</p>
      <div className="metric-box"><span className="metric-value">+{stats?.avgReturns ?? 12.5}%</span></div>
      <div className="returns-grid">
        {Object.entries(returns).map(([sector, ret]) => (
          <div key={sector} className={`return-card return-${sector.toLowerCase()}`}>{sector} – +{ret}%</div>
        ))}
      </div>
    </div>
  );
}
