import { useState, useEffect } from "react";
import { fetchDailySnapshot } from "../../aiService";
import "./DailySnapshot.css";

export default function DailySnapshot() {
  const [snap, setSnap] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDailySnapshot().then(setSnap).catch(console.error).finally(() => setLoading(false));
  }, []);

  const refresh = () => { setLoading(true); fetchDailySnapshot().then(setSnap).catch(console.error).finally(() => setLoading(false)); };

  return (
    <div className="snapshot-container">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h2 className="snapshot-heading">📅 Nextgen AI — Daily Snapshot</h2>
        <button onClick={refresh} style={{background:"#1e40af",color:"#fff",border:"none",borderRadius:"8px",padding:"6px 14px",cursor:"pointer",fontSize:"12px"}}>🔄 Refresh AI</button>
      </div>
      <p className="snapshot-text">AI-powered overview of today's market performance and highlights.</p>
      {loading ? (
        <p style={{color:"#6366f1",fontStyle:"italic"}}>🤖 AI generating today's market snapshot...</p>
      ) : snap ? (
        <>
          <div className="snapshot-grid">
            <div className="snapshot-card snapshot-success"><h3>AI Success Rate</h3><p>{snap.successRate}%</p></div>
            <div className="snapshot-card snapshot-failure"><h3>Failure Rate</h3><p>{snap.failureRate}%</p></div>
            <div className="snapshot-card snapshot-returns"><h3>Avg Returns</h3><p>{snap.avgReturns}</p></div>
            <div className="snapshot-card snapshot-risk"><h3>Risk Level</h3><p>{snap.riskLevel}</p></div>
          </div>
          {snap.topGainer && (
            <div className="snapshot-grid" style={{marginTop:"12px"}}>
              <div className="snapshot-card" style={{background:"#dcfce7"}}><h3>🟢 Top Gainer</h3><p>{snap.topGainer.name} <strong>{snap.topGainer.change}</strong></p></div>
              <div className="snapshot-card" style={{background:"#fee2e2"}}><h3>🔴 Top Loser</h3><p>{snap.topLoser.name} <strong>{snap.topLoser.change}</strong></p></div>
              <div className="snapshot-card"><h3>📊 Advance/Decline</h3><p>{snap.advanceDecline}</p></div>
              <div className="snapshot-card"><h3>💹 Volume</h3><p>{snap.volume}</p></div>
            </div>
          )}
          <div className="snapshot-highlight">
            <h3>🤖 Today's AI Highlight</h3>
            <p>{snap.highlight}</p>
          </div>
        </>
      ) : <p>Could not load snapshot.</p>}
    </div>
  );
}
