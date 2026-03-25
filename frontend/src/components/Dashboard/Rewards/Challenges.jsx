import "./Challenges.css";

export default function Challenges() {
  const challenges = [
    {
      icon: "🔥",
      title: "Daily Trade Streak",
      desc: "Complete at least 1 trade every day for 7 days.",
      progress: 60,
      reward: "Badge + 50 points",
    },
    {
      icon: "📊",
      title: "Weekly Analyst",
      desc: "Submit 5 forecasts in a week.",
      progress: 40,
      reward: "Badge + 100 points",
    },
    {
      icon: "🏆",
      title: "Portfolio Champion",
      desc: "Grow your portfolio by 20% this month.",
      progress: 25,
      reward: "Exclusive Trophy Badge",
    },
  ];

  return (
    <div className="challenges-container">
      <h2 className="challenges-heading">🎯 Challenges</h2>
      <p className="challenges-text">
        Take on challenges to test your skills, earn badges, and collect rewards.
      </p>

      {/* Challenge cards */}
      <div className="challenges-grid">
        {challenges.map((c, i) => (
          <div key={i} className="challenge-card">
            <div className="challenge-icon">{c.icon}</div>
            <h3 className="challenge-title">{c.title}</h3>
            <p className="challenge-desc">{c.desc}</p>

            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${c.progress}%` }}
              ></div>
            </div>
            <p className="progress-label">{c.progress}% complete</p>

            <div className="challenge-reward">🏅 Reward: {c.reward}</div>
          </div>
        ))}
      </div>

      {/* Example section */}
      <div className="example-section">
        <h3 className="example-heading">📌 Example Challenge</h3>
        <p className="example-text">
          Here’s how a challenge looks when you’re halfway through:
        </p>
        <div className="challenge-card example-card">
          <div className="challenge-icon">⚡</div>
          <h3 className="challenge-title">Example: Forecast Master</h3>
          <p className="challenge-desc">
            Submit 20 forecasts to unlock this badge.
          </p>
          <div className="progress-bar">
            <div className="progress-fill" style={{ width: "50%" }}></div>
          </div>
          <p className="progress-label">50% complete</p>
          <div className="challenge-reward">🏅 Reward: Forecast Master Badge</div>
        </div>
      </div>

      <div className="banner">
        🌟 Keep pushing! Complete challenges to unlock exclusive rewards.
      </div>
    </div>
  );
}