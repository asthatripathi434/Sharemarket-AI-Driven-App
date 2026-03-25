import { useState, useEffect } from "react";
import { fetchVolatilityData } from "../../aiService";
import "./VolatilityGuard.css";

export default function VolatilityGuard() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVolatilityData().then(setData).catch(console.error).finally(() => setLoading(false));
  }, []);

  return (
    <div className="volatility-container">
      <header className="volatility-header">
        <h2>🛡️ Nextgen AI — Volatility Guard</h2>
        <p>AI protection against sudden Indian market swings</p>
      </header>

      {loading ? (
        <p style={{color:"#6366f1",fontStyle:"italic",padding:"20px"}}>🤖 AI analyzing market volatility...</p>
      ) : data ? (
        <>
          <div style={{background:"linear-gradient(135deg,#f0f9ff,#e0f2fe)",border:"1px solid #bae6fd",borderRadius:"12px",padding:"14px 18px",marginBottom:"16px",display:"flex",alignItems:"center",gap:"14px"}}>
            <span style={{fontSize:"32px"}}>🌡️</span>
            <div>
              <p style={{fontWeight:"800",fontSize:"18px",margin:0}}>{data.overallStatus}</p>
              <p style={{color:"#64748b",fontSize:"13px",margin:"2px 0 0"}}>India VIX: <strong>{data.vix}</strong></p>
            </div>
          </div>

          <section className="volatility-meters">
            <div className="meter low">
              <h3>Low Volatility</h3>
              <div className="bar" style={{width:`${data.lowVolatility}%`}}></div>
              <small>{data.lowVolatility}%</small>
            </div>
            <div className="meter medium">
              <h3>Medium Volatility</h3>
              <div className="bar" style={{width:`${data.mediumVolatility}%`}}></div>
              <small>{data.mediumVolatility}%</small>
            </div>
            <div className="meter high">
              <h3>High Volatility</h3>
              <div className="bar" style={{width:`${data.highVolatility}%`}}></div>
              <small>{data.highVolatility}%</small>
            </div>
          </section>

          <section className="volatility-alerts">
            {(data.alerts || []).map((a, i) => (
              <div key={i} className={`alert ${a.level}`}>{a.level === "low" ? "✅" : a.level === "medium" ? "⚠️" : "🚨"} {a.message}</div>
            ))}
          </section>

          {data.protectedStocks && (
            <div style={{marginTop:"16px"}}>
              <h3 style={{fontSize:"14px",fontWeight:"700",marginBottom:"10px"}}>🛡️ AI-Protected Low-Volatility Stocks</h3>
              <div style={{display:"flex",gap:"10px",flexWrap:"wrap"}}>
                {data.protectedStocks.map((s, i) => (
                  <div key={i} style={{background:"#dcfce7",border:"1px solid #86efac",borderRadius:"8px",padding:"8px 14px",fontSize:"13px",fontWeight:"600"}}>
                    {s.name} <span style={{color:"#16a34a"}}>{s.volatility}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"10px",padding:"12px 16px",marginTop:"16px"}}>
            <strong>🤖 AI Recommendation:</strong> {data.recommendation}
          </div>
        </>
      ) : <p>Could not load volatility data.</p>}

      <footer className="volatility-footer">
        <p>✨ Nextgen AI Volatility Guard — your AI shield against market uncertainty.</p>
      </footer>
    </div>
  );
}
