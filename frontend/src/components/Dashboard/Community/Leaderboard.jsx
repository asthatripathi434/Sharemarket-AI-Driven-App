import "./Leaderboard.css";

export default function Leaderboard() {
  return (
    <div className="leaderboard-container">
      <h2 className="leaderboard-heading">🏆 Community Leaderboard</h2>
      <p className="leaderboard-text">
        Track top contributors and see who’s leading the community with insights and engagement.
      </p>

      {/* Leaderboard list */}
      <ul className="leaderboard-list">
        <li className="leaderboard-item first">
          <span className="rank">1</span>
          <span className="name">Astha Tripathi</span>
          <span className="points">1200 pts</span>
        </li>
        <li className="leaderboard-item second">
          <span className="rank">2</span>
          <span className="name">Apurva Sarode</span>
          <span className="points">950 pts</span>
        </li>
        <li className="leaderboard-item third">
          <span className="rank">3</span>
          <span className="name">Priya Sharma</span>
          <span className="points">870 pts</span>
        </li>
        <li className="leaderboard-item fourth">
          <span className="rank">4</span>
          <span className="name">Arjun Patel</span>
          <span className="points">750 pts</span>
        </li>

        <li className="leaderboard-item fifth">
          <span className="rank">5</span>
          <span className="name">Sneha Rao</span>
          <span className="points">680 pts</span>
        </li>
         
      </ul>
      

      {/* Banner */}
      <div className="leaderboard-banner">
        🌟 Keep contributing to climb the leaderboard and earn rewards!
      </div>
    </div>
  );
}