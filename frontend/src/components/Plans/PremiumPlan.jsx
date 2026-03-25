import "./PremiumPlan.css";

export default function Premium() {
  return (
    <div className="premium-container">
      {/* Hero Banner */}
      <section className="premium-hero">
        <h1>💼 Premium Plan</h1>
        <p>The perfect balance of power and value.</p>
        <span className="badge">⭐ Best Value</span>
      </section>

      {/* Feature Showcase */}
      <section className="premium-features">
        <div className="feature">
          <span>📊</span>
          <p>Advanced Forecasts</p>
        </div>
        <div className="feature">
          <span>📈</span>
          <p>Sector Dashboards</p>
        </div>
        <div className="feature">
          <span>🔔</span>
          <p>Smart Alerts</p>
        </div>
        <div className="feature">
          <span>🎓</span>
          <p>Learning Modules</p>
        </div>
        <div className="feature">
          <span>⚡</span>
          <p>Priority Updates</p>
        </div>
      </section>

      {/* Pricing Spotlight */}
      <section className="premium-pricing">
        <div className="pricing-card">
          <h2>₹499 / month</h2>
          <p>or ₹4,999 / year (save 15%)</p>
          <button className="join-btn">Upgrade to Premium</button>
        </div>
      </section>

      {/* Comparison Strip */}
      <section className="premium-comparison">
        <div className="plan-strip free">Free: Basic insights</div>
        <div className="plan-strip premium">Premium: Best balance</div>
        <div className="plan-strip elite">Elite: Exclusive access</div>
      </section>

      {/* Footer */}
      <footer className="premium-footer">
        <p>✨ Premium — designed for ambitious investors who want more without overpaying.</p>
      </footer>
    </div>
  );
}