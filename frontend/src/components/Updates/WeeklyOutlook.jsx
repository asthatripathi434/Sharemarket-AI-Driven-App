import { useState, useEffect } from "react";
import { fetchWeeklyOutlook } from "../../aiService";
import "./WeeklyOutlook.css";

export default function WeeklyOutlook() {
  const [outlook, setOutlook] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeeklyOutlook().then(setOutlook).catch(console.error).finally(() => setLoading(false));
  }, []);

  return (
    <div className="weekly-container">
      {loading ? (
        <p style={{color:"#6366f1",fontStyle:"italic",padding:"20px"}}>🤖 AI generating weekly market outlook...</p>
      ) : outlook ? (
        <>
          <div className="weekly-hero">
            <h2>📆 Nextgen AI — Weekly Outlook</h2>
            <p className="hero-highlight">{outlook.headline}</p>
          </div>
          <div className="metrics-banner">
            <div className="metric-badge">✅ Success: {outlook.successRate}%</div>
            <div className="metric-badge">❌ Failure: {outlook.failureRate}%</div>
            <div className="metric-badge">📈 Returns: {outlook.returns}</div>
            <div className="metric-badge">⚠️ Risk: {outlook.risk}</div>
          </div>
          <div className="weekly-split">
            <div className="sectors">
              <h3>Sector Highlights</h3>
              <ul>
                {(outlook.sectors || []).map((s, i) => (
                  <li key={i}>{s.icon} {s.name} – {s.trend}</li>
                ))}
              </ul>
              {outlook.keyEvents && (
                <>
                  <h3 style={{marginTop:"14px"}}>📅 Key Events</h3>
                  <ul>{outlook.keyEvents.map((e, i) => <li key={i}>• {e}</li>)}</ul>
                </>
              )}
            </div>
            <div className="summary">
              <h3>AI Outlook Summary</h3>
              <p>{outlook.summary}</p>
            </div>
          </div>
        </>
      ) : <p>Could not load outlook.</p>}
    </div>
  );
}
