import "./AlgoPricing.css";

export default function AlgoPricing() {
  const plans = [
    {
      name: "Starter", price: "₹499", period: "/ month", color: "basic",
      features: ["✔ Market Signals (5/day)", "✔ Daily AI Updates", "✔ Basic Momentum Tracker", "✔ Email Alerts", "✖ Advanced Analytics", "✖ Custom Models", "✖ Priority Support"],
      cta: "Get Started", highlight: false,
    },
    {
      name: "Pro", price: "₹999", period: "/ month", color: "pro",
      features: ["✔ Market Signals (20/day)", "✔ Advanced AI Analytics", "✔ Smart Price Alerts", "✔ Value Screener", "✔ Volatility Guard", "✔ WhatsApp Alerts", "✖ Custom AI Models"],
      cta: "Go Pro", highlight: false,
    },
    {
      name: "Premium", price: "₹1,999", period: "/ month", color: "premium",
      features: ["✔ Unlimited AI Signals", "✔ All Pro Features", "✔ AI Forecasts & Backtesting", "✔ Custom Model Builder", "✔ Priority Support 24/7", "✔ Portfolio Auto-Rebalance", "✔ IPO AI Analysis"],
      cta: "Go Premium", highlight: true, badge: "⭐ Most Popular",
    },
    {
      name: "Enterprise", price: "Custom", period: "pricing", color: "enterprise",
      features: ["✔ All Premium Features", "✔ Dedicated AI Advisor", "✔ Unlimited Custom Models", "✔ API Access", "✔ White-label Options", "✔ SLA Guarantee", "✔ On-site Training"],
      cta: "Contact Us", highlight: false,
    },
  ];

  return (
    <div className="algo-container">
      <header className="algo-header">
        <h2>⚡ Nextgen ShareMarket & AI — Algo Subscription Plans</h2>
        <p>Choose the AI-powered plan that powers your trading journey on Indian markets</p>
      </header>

      <section className="algo-cards">
        {plans.map((plan) => (
          <div key={plan.name} className={`pricing-card ${plan.color} ${plan.highlight ? "highlighted" : ""}`}>
            {plan.badge && <div className="popular-badge">{plan.badge}</div>}
            <h3>{plan.name}</h3>
            <div className="price-wrap">
              <span className="price-main">{plan.price}</span>
              <span className="price-period">{plan.period}</span>
            </div>
            <ul>
              {plan.features.map((f, i) => (
                <li key={i} style={{color: f.startsWith("✖") ? "#94a3b8" : "inherit"}}>{f}</li>
              ))}
            </ul>
            <button onClick={() => alert(`Subscribing to ${plan.name} plan...`)}>
              {plan.cta}
            </button>
          </div>
        ))}
      </section>

      <div style={{background:"linear-gradient(135deg,#f0f9ff,#e0f2fe)",border:"1px solid #bae6fd",borderRadius:"14px",padding:"20px",marginTop:"24px",textAlign:"center"}}>
        <h3 style={{margin:"0 0 8px",color:"#0369a1"}}>🎁 Annual Plans Save 20%</h3>
        <p style={{color:"#0c4a6e",margin:0,fontSize:"14px"}}>Switch to yearly billing and save significantly. Cancel anytime. All plans include 7-day free trial.</p>
      </div>

      <footer className="algo-footer">
        <p>✨ Nextgen ShareMarket & AI — flexible AI-powered pricing for every Indian trader.</p>
      </footer>
    </div>
  );
}
