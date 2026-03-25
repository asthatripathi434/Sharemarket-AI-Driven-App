import "./Comparison.css";

export default function Comparison() {
  return (
    <div className="comparison-container">
      <h2 className="comparison-heading">📊 Comparison Dashboard</h2>
      <p className="comparison-text">
        Compare performance metrics across sectors and strategies.
      </p>

      {/* Comparison Grid */}
      <div className="comparison-grid">
        <div className="comparison-card comparison-success">
          <h3>Success Rate</h3>
          <p>82%</p>
        </div>
        <div className="comparison-card comparison-failure">
          <h3>Failure Rate</h3>
          <p>18%</p>
        </div>
        <div className="comparison-card comparison-returns">
          <h3>Avg Returns</h3>
          <p>+12.5%</p>
        </div>
        <div className="comparison-card comparison-risk">
          <h3>Risk Level</h3>
          <p>Moderate</p>
        </div>
        <div className="comparison-card comparison-horizon">
          <h3>Time Horizon</h3>
          <p>5 Years</p>
        </div>
      </div>

      {/* Summary Box */}
      <div className="comparison-summary">
        <h3>Insights</h3>
        <p>
          Success rates remain strong across most sectors, while average returns
          improve with longer horizons. Risk is moderate, suggesting balanced
          diversification.
        </p>
      </div>
    </div>
  );
}