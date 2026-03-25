import "./TimeHorizon.css";

export default function TimeHorizon() {
  return (
    <div className="horizon-container">
      <h2 className="horizon-heading">⏳ Time Horizon</h2>
      <p className="horizon-text">
        Understand how investment performance changes over different time horizons.
      </p>

      {/* Overall Horizon Indicator */}
      <div className="horizon-ring">
        <span>5 Years</span>
      </div>

      {/* Horizon Options */}
      <div className="horizon-grid">
        <div className="horizon-card horizon-short">Short Term – 1 Year</div>
        <div className="horizon-card horizon-medium">Medium Term – 3 Years</div>
        <div className="horizon-card horizon-long">Long Term – 10 Years</div>
      </div>

      {/* Summary */}
      <div className="horizon-summary">
        <h3>Projection Summary</h3>
        <p>
          Short-term investments carry higher volatility, while long-term horizons
          smooth out risks and maximize returns.
        </p>
      </div>
    </div>
  );
}