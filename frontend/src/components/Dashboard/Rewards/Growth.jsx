import "./Growth.css";

export default function Growth() {
  const milestones = [
    { title: "₹1 Lakh Portfolio", desc: "First major milestone achieved!", unlocked: true },
    { title: "₹5 Lakh Portfolio", desc: "Keep compounding to reach this goal.", unlocked: false, progress: "60%" },
    { title: "₹10 Lakh Portfolio", desc: "Long-term achievement ahead.", unlocked: false, progress: "25%" },
  ];

  const achievements = [
    { icon: "🏆", title: "5 Years of Trading", desc: "Consistent growth over half a decade." },
    { icon: "🌍", title: "Global Diversification", desc: "Investments across 3+ international markets." },
    { icon: "💎", title: "High Value Portfolio", desc: "Crossed ₹1 crore in lifetime value." },
  ];

  return (
    <div className="growth-container">
      {/* Page heading */}
      <h2 className="growth-heading">🌱 Growth</h2>
      <p className="growth-text">
        Visualize your long-term growth, track milestones, and celebrate lifetime achievements.
      </p>

      {/* Overall growth chart */}
      <div className="growth-chart">
        <h3>📈 Yearly Growth Rate</h3>
        <p>+12% CAGR over the last 5 years</p>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "80%" }}></div>
        </div>
      </div>

      {/* Portfolio milestones (heading + results in one box) */}
      <div className="growth-chart">
        <h3>💰 Portfolio Value Milestones</h3>
        {milestones.map((m, i) => (
          <div key={i} className={`milestone-card ${m.unlocked ? "unlocked" : "locked"}`}>
            <h4>{m.title}</h4>
            <p>{m.desc}</p>
            {!m.unlocked && (
              <>
                <div className="progress-bar">
                  <div className="progress-fill" style={{ width: m.progress }}></div>
                </div>
                <p className="progress-label">{m.progress} complete</p>
              </>
            )}
          </div>
        ))}
      </div>

      {/* Lifetime achievements */}
      <div className="growth-chart">
        <h3>🏆 Lifetime Achievements</h3>
        <div className="achievements-grid">
          {achievements.map((a, i) => (
            <div key={i} className="achievement-card">
              <div className="achievement-icon">{a.icon}</div>
              <h4>{a.title}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Motivation banner */}
      <div className="banner">
        🌟 Keep compounding — small steps today lead to big achievements tomorrow!
      </div>
    </div>
  );
}