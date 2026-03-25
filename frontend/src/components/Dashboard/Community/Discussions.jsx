import "./Discussions.css";

export default function Discussion() {
  return (
    <div className="discussion-container">
      <h2 className="discussion-heading">💬 Community Discussions</h2>
      <p className="discussion-text">
        Join threads on trending stocks, strategies, and market insights. Share your thoughts and learn from others.
      </p>

      {/* Discussion threads */}
      <ul className="discussion-list">
        <li className="discussion-item">
          <span className="topic">📈 Is IT sector undervalued?</span>
          <span className="comments">42 replies</span>
        </li>
        <li className="discussion-item">
          <span className="topic">💡 Best SIP strategies for 2026</span>
          <span className="comments">30 replies</span>
        </li>
        <li className="discussion-item">
          <span className="topic">🚀 Upcoming IPOs worth watching</span>
          <span className="comments">18 replies</span>
        </li>
        <li className="discussion-item">
          <span className="topic">🌍 Global recession fears — impact on India?</span>
          <span className="comments">25 replies</span>
        </li>
        <li className="discussion-item">
          <span className="topic">🏦 Banking sector outlook for 2026</span>
          <span className="comments">12 replies</span>
        </li>
      </ul>

      {/* Banner */}
      <div className="discussion-banner">
        🌟 Stay active in discussions — your insights help shape community sentiment!
      </div>
    </div>
  );
}