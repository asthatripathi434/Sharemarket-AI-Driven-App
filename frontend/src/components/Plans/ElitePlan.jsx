import "./ElitePlan.css";

export default function Elite() {
  return (
    <div className="elite-container">
      {/* Hero Banner */}
      <section className="elite-hero">
        <h1>🌟 Nextgen ShareMarket & AI Elite Plan</h1>
        <p>Unlock premium features, exclusive insights, and priority support.</p>
      </section>

      {/* Plan Benefits */}
      <section className="elite-benefits">
        <h2>Why Choose Elite?</h2>
        <ul>
          <li>📊 Advanced analytics & forecasts</li>
          <li>💎 Exclusive sector insights</li>
          <li>⚡ Priority advisory support</li>
          <li>🔒 Secure portfolio management</li>
          <li>🚀 Early access to new features</li>
        </ul>
      </section>

      {/* Pricing Section */}
      <section className="elite-pricing">
        <h2>Elite Membership</h2>
        <div className="pricing-card">
          <h3>₹999 / month</h3>
          <p>or ₹9,999 / year (save 20%)</p>
          <button className="join-btn">Join Elite Now</button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="elite-testimonials">
        <h2>What Our Members Say</h2>
        <div className="testimonial">
          <p>"Elite gave me the confidence to diversify my portfolio strategically."</p>
          <span>- Premium Member</span>
        </div>
        <div className="testimonial">
          <p>"The exclusive insights helped me stay ahead of market volatility."</p>
          <span>- Elite Investor</span>
        </div>
      </section>

      {/* Footer */}
      <footer className="elite-footer">
        <p>✨ Nextgen ShareMarket & AI Elite — Designed for visionaries who demand more.</p>
      </footer>
    </div>
  );
}