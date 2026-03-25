import "./Progress.css";

export default function Progress() {
  const milestones = [
    {
      title: "First Trade",
      desc: "Complete your first trade to unlock this badge.",
      progress: 100,
    },
    {
      title: "100 Trades",
      desc: "Reach 100 trades to earn this badge.",
      progress: 65,
    },
    {
      title: "Portfolio Growth",
      desc: "Grow your portfolio by 50% to unlock.",
      progress: 35,
    },
  ];

  return (
    <div className="progress-container">
      <h2 className="progress-heading">📊 Progress</h2>
      <p className="progress-text">
        Track your journey, see milestones, and stay motivated as you unlock rewards.
      </p>

      {/* Overall progress */}
      <div className="overall-progress">
        <h3>Level Progress</h3>
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: "70%" }}></div>
        </div>
        <p className="progress-label">Level 2 — 70% complete</p>
      </div>

      {/* Stats grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <h4>Trades Completed</h4>
          <p>65</p>
        </div>
        <div className="stat-card">
          <h4>Points Earned</h4>
          <p>1200</p>
        </div>
        <div className="stat-card">
          <h4>Badges Unlocked</h4>
          <p>2</p>
        </div>
      </div>

      {/* Milestones */}
      <div className="milestones">
        {milestones.map((m, i) => (
          <div key={i} className="milestone-card">
            <h4>{m.title}</h4>
            <p>{m.desc}</p>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{ width: `${m.progress}%` }}
              ></div>
            </div>
            <p className="progress-label">{m.progress}% complete</p>
          </div>
        ))}
      </div>

      {/* Encouragement banner */}
      <div className="banner">
        🌟 Keep going! You’re close to unlocking your next badge.
      </div>
    </div>
  );
}