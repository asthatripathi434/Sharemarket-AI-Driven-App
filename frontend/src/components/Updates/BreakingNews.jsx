import { useState, useEffect } from "react";
import { fetchBreakingNews } from "../../aiService";
import "./BreakingNews.css";

export default function BreakingNews() {
  const [news, setNews] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchBreakingNews().then(setNews).catch(console.error).finally(() => setLoading(false));
  }, []);

  const refresh = () => { setLoading(true); fetchBreakingNews().then(setNews).catch(console.error).finally(() => setLoading(false)); };

  return (
    <div className="news-container">
      {loading ? (
        <p style={{color:"#6366f1",fontStyle:"italic",padding:"20px"}}>🤖 AI fetching breaking market news...</p>
      ) : news ? (
        <>
          <div className="news-ticker">
            <p>🔥 Nextgen ShareMarket & AI Live: {news.ticker}</p>
          </div>
          <section className="news-spotlight">
            <div style={{display:"flex",justifyContent:"space-between",alignItems:"center"}}>
              <h2>📢 AI Breaking News</h2>
              <button onClick={refresh} style={{background:"#1e40af",color:"#fff",border:"none",borderRadius:"8px",padding:"6px 14px",cursor:"pointer",fontSize:"12px"}}>🔄 Refresh</button>
            </div>
            <div className="headline-card">
              <h3>{news.headline?.title}</h3>
              <p>{news.headline?.summary}</p>
            </div>
          </section>
          <section className="news-grid">
            {(news.news || []).map((item, i) => (
              <div key={i} className={`news-card ${item.sector?.toLowerCase().replace(" ","")}`}>
                <h3>{item.icon} {item.sector}</h3>
                <p>{item.title}</p>
                <small>{item.summary}</small>
                <span style={{fontSize:"11px",fontWeight:"700",color: item.impact==="Positive"?"#16a34a":item.impact==="Negative"?"#dc2626":"#92400e",marginTop:"6px",display:"block"}}>
                  {item.impact === "Positive" ? "🟢" : item.impact === "Negative" ? "🔴" : "🟡"} {item.impact}
                </span>
              </div>
            ))}
          </section>
          <footer className="news-summary">
            <h3>🤖 Nextgen AI Insight</h3>
            <p>AI-generated news summaries for Indian markets. Stay alert to volatility and opportunities.</p>
          </footer>
        </>
      ) : <p>Could not load news.</p>}
    </div>
  );
}
