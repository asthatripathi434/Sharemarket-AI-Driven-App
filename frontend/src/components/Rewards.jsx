import "./Rewards.css";

export default function Rewards() {
  return (
    <div className="rewards-container">
      {/* Intro card */}
      <div className="intro-card">
        <h1 className="heading">🏆 Rewards Center</h1>
        <p className="intro-text">
          Welcome to your Rewards dashboard! Track your progress, celebrate achievements, and unlock exclusive perks.
        </p>
      </div>

      {/* Stats grid */}
      <div className="stats-grid">
        <div className="stat-card">
          <h2 className="stat-value">1200</h2>
          <p className="stat-label">Points Earned</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-value">8</h2>
          <p className="stat-label">Badges Unlocked</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-value">Level 3</h2>
          <p className="stat-label">Current Level</p>
        </div>
        <div className="stat-card">
          <h2 className="stat-value">3</h2>
          <p className="stat-label">Active Offers</p>
        </div>
      </div>

      {/* Banner */}
      <div className="banner">
        🎯 Keep engaging with forecasts, learning modules, and advisory tools to earn more rewards!
      </div>
    </div>
  );
}