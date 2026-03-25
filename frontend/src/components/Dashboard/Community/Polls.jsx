import "./Polls.css";

export default function Polls() {
  return (
    <div className="polls-container">
      <h2 className="polls-heading">🗳️ Community Polls</h2>
      <p className="polls-text">
        Vote on hot topics and see how the community feels about the market.
      </p>

      {/* Poll list */}
      <ul className="polls-list">
        <li className="poll-item">
          <span className="question">Will NIFTY cross 25,000 this quarter?</span>
          <span className="votes">120 votes</span>
        </li>
        <li className="poll-item">
          <span className="question">Best sector for 2026 growth?</span>
          <span className="votes">95 votes</span>
        </li>
        <li className="poll-item">
          <span className="question">Preferred investment horizon: Short vs Long term?</span>
          <span className="votes">80 votes</span>
        </li>
        <li className="poll-item">
          <span className="question">Is AI the biggest disruptor in finance?</span>
          <span className="votes">60 votes</span>
        </li>
      </ul>

      {/* Banner */}
      <div className="polls-banner">
        🌟 Cast your vote and influence community sentiment!
      </div>
    </div>
  );
}