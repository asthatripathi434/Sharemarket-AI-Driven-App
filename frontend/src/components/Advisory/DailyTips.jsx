import { useState, useEffect } from "react";
import { fetchDailyTips } from "../../aiService";
import "./DailyTips.css";

export default function DailyTips() {
  const [tips, setTips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [expanded, setExpanded] = useState(null);

  useEffect(() => {
    fetchDailyTips().then(setTips).catch(console.error).finally(() => setLoading(false));
  }, []);

  const refresh = () => { setLoading(true); fetchDailyTips().then(setTips).catch(console.error).finally(() => setLoading(false)); };

  return (
    <div className="daily-container">
      <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
        <h2 className="daily-heading">💡 AI Daily Tips — Nextgen ShareMarket</h2>
        <button onClick={refresh} style={{background:"#1e40af",color:"#fff",border:"none",borderRadius:"8px",padding:"6px 14px",cursor:"pointer",fontSize:"12px"}}>🔄 Refresh AI</button>
      </div>
      <p className="daily-text">Smart AI insights to guide your trading decisions every day.</p>

      {loading ? (
        <p className="ai-loading">🤖 AI is generating today's market tips...</p>
      ) : tips.map((tip, i) => (
        <div key={i} className={`tip tip-${tip.type}`}>
          <span className="tip-text">{tip.emoji} <strong>[{tip.category}]</strong> {tip.tip}</span>
          <button className="tip-button" onClick={() => setExpanded(expanded === i ? null : i)}>
            {expanded === i ? "Close" : "View"}
          </button>
          {expanded === i && (
            <div style={{marginTop:"8px",padding:"10px",background:"rgba(255,255,255,0.7)",borderRadius:"8px",fontSize:"13px",color:"#1e293b"}}>
              💬 <em>Nextgen AI Insight: {tip.tip} — Consider this while planning your trades for today.</em>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
