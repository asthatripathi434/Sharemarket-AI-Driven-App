export default function Rewards() {
  return (
    <main className="main">
      <h1 className="page-title font-extrabold advisory-gradient">
        Rewards
      </h1>

      <div className="cards">
        {/* Left column: Points + Badges stacked */}
        <div className="left-column">
          <div className="card card-float points-card">
            <h3 className="font-bold mb-3">⭐ Points Earned</h3>
            <p>🎯 Daily login → +10 points</p>
            <p>📈 Forecast completed → +50 points</p>
            <p>🤝 Refer a friend → +100 points</p>
          </div>

          <div className="card card-float badges-card">
            <h3 className="font-bold mb-2">🎖️ Badges Unlocked</h3>
            <p>🏅 Beginner → First forecast completed</p>
            <p>🥈 Explorer → 10 forecasts completed</p>
            <p>🥇 Champion → 100 forecasts completed</p>
          </div>
        </div>

        {/* Right column: Levels + Offers */}
        <div className="card card-float rewards-card-wide">
          <h3 className="font-bold mb-3">🎁 Levels & Offers</h3>
          <p>📊 Level 1 → 0–500 points</p>
          <p>📊 Level 2 → 501–2000 points</p>
          <p>📊 Level 3 → 2001+ points</p>

          <hr className="my-3" />

          <p>🎉 Redeem your points for exclusive perks:</p>
          <p>📚 500 points → Free eBook</p>
          <p>💎 1000 points → Premium subscription trial</p>
          <p>👩‍🏫 5000 points → Mentorship session</p>

          <small>⚠️ Rewards are for engagement only, not financial returns</small>
        </div>
      </div>
    </main>
  );
}