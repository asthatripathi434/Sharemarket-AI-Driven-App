import { useEffect, useState } from "react";
import { fetchTrialAdvisory } from "../../aiService";
import "./Trial.css";

export default function Trial() {
  const [trial, setTrial] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTrialAdvisory().then(setTrial).catch(console.error).finally(() => setLoading(false));
  }, []);

  return (
    <div className="trial-container">
      <h2 className="trial-heading">🔑 Trial Advisory — Nextgen ShareMarket & AI</h2>
      {loading ? (
        <p className="loading-text">🤖 AI generating your trial advisory...</p>
      ) : trial ? (
        <>
          <div className="trial-grid">
            <div className="trial-card hoverable">
              <h3>🤖 AI Trial Tip</h3>
              <p>{trial.tip}</p>
              <p>Confidence: <strong>{trial.confidence}%</strong></p>
              <p>Risk: <strong>{trial.risk}</strong></p>
            </div>
            <div className="trial-card hoverable">
              <h3>📊 Rationale</h3>
              <p>{trial.rationale}</p>
            </div>
            <div className="trial-card locked"><div className="lock-icon">🔒</div><p>Long-term Advisory</p></div>
            <div className="trial-card locked"><div className="lock-icon">🔒</div><p>Multi-sector Strategy</p></div>
          </div>
          <div className="trial-banner">
            Trial Advisory: <strong>{trial.days_left} days remaining</strong> — Upgrade to unlock full AI coverage.
            <button className="upgrade-btn">Unlock Full AI Advisory Access</button>
          </div>
        </>
      ) : <p>Could not load. Please try again.</p>}
    </div>
  );
}
