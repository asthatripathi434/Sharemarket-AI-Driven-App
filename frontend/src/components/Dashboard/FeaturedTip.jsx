import { useState, useEffect } from "react";
import { fetchFeaturedTip } from "../../aiService";
import "./FeaturedTip.css";

export default function FeaturedTip() {
  const [tip, setTip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFeaturedTip().then(setTip).catch(console.error).finally(() => setLoading(false));
  }, []);

  const refresh = () => { setLoading(true); fetchFeaturedTip().then(setTip).catch(console.error).finally(() => setLoading(false)); };

  return (
    <div className="featured-container">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h2 className="featured-heading">🌟 AI Featured Tip — Nextgen ShareMarket</h2>
        <button onClick={refresh} style={{background:"#1e40af",color:"#fff",border:"none",borderRadius:"8px",padding:"6px 14px",cursor:"pointer",fontSize:"12px"}}>🔄 Refresh AI</button>
      </div>
      {loading ? (
        <p className="ai-loading">🤖 AI is analyzing market conditions to generate today's best tip...</p>
      ) : tip ? (
        <>
          <div className="featured-grid">
            <div className="featured-card">
              <h3>Today's AI Tip</h3>
              <p><strong>{tip.stock}</strong></p>
              <p>Sector: {tip.sector}</p>
              <p>Confidence: <strong>{tip.confidence}%</strong></p>
              <p>Risk: <strong>{tip.risk}</strong></p>
              <p>Timeframe: {tip.timeframe}</p>
            </div>
            <div className="featured-card">
              <h3>AI Rationale</h3>
              <p>{tip.rationale}</p>
            </div>
            <div className="featured-card">
              <h3>Trade Setup</h3>
              <p>Entry: {tip.entryRange}</p>
              <p>Target: <strong style={{color:"#16a34a"}}>{tip.target}</strong></p>
              <p>Stop-loss: <strong style={{color:"#dc2626"}}>{tip.stoploss}</strong></p>
            </div>
          </div>
          <button className="watchlist-btn">Add to Watchlist</button>
          <div className="featured-banner">
            AI Featured Tip — <strong>Upgrade to Elite</strong> for daily premium insights from Nextgen ShareMarket & AI.
          </div>
        </>
      ) : <p>Could not load tip. Please try again.</p>}
    </div>
  );
}
