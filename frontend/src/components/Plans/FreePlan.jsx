import "./FreePlan.css";

export default function Free() {
  return (
    <div className="free-container">
      {/* Hero Banner */}
      <section className="free-hero">
        <h1>🎉 Nextgen ShareMarket & AI Free Plan</h1>
        <p>Start your journey with essential insights at zero cost.</p>
      </section>

      {/* Features */}
      <section className="free-features">
        <h2>What You Get for Free</h2>
        <ul>
          <li>📊 Basic market snapshots</li>
          <li>📰 Daily news updates</li>
          <li>📈 Weekly outlook summaries</li>
          <li>🎓 Access to learning modules</li>
          <li>🔔 Watchlist alerts</li>
        </ul>
      </section>

      {/* Comparison Section */}
      <section className="free-vs-elite">
        <h2>Free vs Elite</h2>
        <div className="comparison">
          <div className="plan free-plan">
            <h3>Free</h3>
            <p>Basic insights, limited features</p>
          </div>
          <div className="plan elite-plan">
            <h3>Elite</h3>
            <p>Advanced analytics, exclusive insights, priority support</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="free-cta">
        <p>Upgrade anytime to unlock Elite benefits 🚀</p>
        <button className="upgrade-btn">Explore Elite</button>
      </section>

      {/* Footer */}
      <footer className="free-footer">
        <p>✨ Nextgen ShareMarket & AI Free — your first step into smarter investing.</p>
      </footer>
    </div>
  );
}