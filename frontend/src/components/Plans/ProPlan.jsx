import "./ProPlan.css";

export default function Pro() {
  return (
    <div className="pro-container">
      {/* Sidebar */}
      <aside className="pro-sidebar">
        <h2>🚀 Pro Plan</h2>
        <ul>
          <li>📊 Advanced analytics</li>
          <li>⚡ Faster updates</li>
          <li>🔔 Smart alerts</li>
          <li>🎓 Learning modules</li>
        </ul>
      </aside>

      {/* Main Content */}
      <main className="pro-main">
        {/* Hero Section */}
        <section className="pro-hero">
          <h1>Nextgen ShareMarket & AI Pro</h1>
          <p>Professional tools for investors who want more control and insight.</p>
        </section>

        {/* Features Showcase */}
        <section className="pro-features">
          <div className="feature-box">
            <span>📈</span>
            <h3>Sector Dashboards</h3>
            <p>Track performance across industries with interactive charts.</p>
          </div>
          <div className="feature-box">
            <span>💡</span>
            <h3>Smart Insights</h3>
            <p>AI-driven recommendations tailored to your portfolio.</p>
          </div>
          <div className="feature-box">
            <span>🔒</span>
            <h3>Secure Access</h3>
            <p>Enhanced data protection and privacy features.</p>
          </div>
        </section>

        {/* Pricing Ribbon */}
        <section className="pro-pricing">
          <div className="pricing-ribbon">
            <h2>₹799 / month</h2>
            <p>or ₹7,999 / year (save 15%)</p>
            <button className="join-btn">Go Pro</button>
          </div>
        </section>
      </main>
    </div>
  );
}