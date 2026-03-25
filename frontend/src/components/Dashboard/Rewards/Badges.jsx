import "./Badges.css";

export default function Badges() {
  const badges = [
    {
      icon: "📈",
      title: "First Trade",
      desc: "Awarded for completing your very first trade.",
      unlocked: true,
    },
    {
      icon: "💯",
      title: "100 Trades",
      desc: "Earned after successfully completing 100 trades.",
      unlocked: true,
    },
    {
      icon: "🚀",
      title: "Portfolio Growth",
      desc: "Unlocked when your portfolio grows by 50% or more.",
      unlocked: false,
      progress: "35%",
    },
  ];

  // Example click handler
  const handleBadgeClick = (badge) => {
    alert(`You clicked on ${badge.title} badge!`);
    // Instead of alert, you could navigate, open modal, etc.
  };

  return (
    <div className="badges-container">
      <h2 className="badges-heading">🏅 Badges</h2>
      <p className="badges-text">
        Collect badges for milestones and showcase your trading achievements.
      </p>

      <div className="badges-grid">
        {badges.map((badge, index) => (
          <div
            key={index}
            className={`badge-card ${badge.unlocked ? "unlocked" : "locked"}`}
            onClick={() => handleBadgeClick(badge)}   // ✅ make box clickable
          >
            <div className="badge-icon">{badge.icon}</div>
            <h3 className="badge-title">{badge.title}</h3>
            <p className="badge-desc">{badge.desc}</p>

            {!badge.unlocked && (
              <>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: badge.progress }}
                  ></div>
                </div>
                <p className="progress-text">{badge.progress} complete</p>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}