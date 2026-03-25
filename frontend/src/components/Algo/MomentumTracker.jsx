import { useState, useEffect } from "react";
import { fetchMomentumData } from "../../aiService";
import "./MomentumTracker.css";

export default function MomentumTracker() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchMomentumData().then(setData).catch(console.error).finally(() => setLoading(false));
  }, []);

  const refresh = () => { setLoading(true); fetchMomentumData().then(setData).catch(console.error).finally(() => setLoading(false)); };

  return (
    <div className="momentum-container">
      <header className="momentum-header">
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"flex-start"}}>
          <div>
            <h2>⚡ Nextgen AI — Momentum Tracker</h2>
            <p>Live AI market momentum and trend strength analysis</p>
          </div>
          <button onClick={refresh} style={{background:"#1e40af",color:"#fff",border:"none",borderRadius:"8px",padding:"6px 14px",cursor:"pointer",fontSize:"12px"}}>🔄 Refresh AI</button>
        </div>
      </header>

      {loading ? (
        <p style={{color:"#6366f1",fontStyle:"italic",padding:"20px"}}>🤖 AI analyzing momentum signals...</p>
      ) : data ? (
        <>
          <div className="momentum-dashboard">
            <div className="momentum-stats">
              <div className="stat-box bullish">
                <h3>📈 Bullish Momentum</h3>
                <p>{data.bullishStrength}</p>
                <div style={{background:"rgba(0,0,0,0.1)",borderRadius:"6px",height:"8px",marginTop:"8px"}}>
                  <div style={{background:"#22c55e",height:"8px",borderRadius:"6px",width:`${data.bullishScore}%`,transition:"width 0.8s ease"}}></div>
                </div>
                <small style={{fontSize:"11px",marginTop:"4px",display:"block"}}>{data.bullishScore}/100</small>
              </div>
              <div className="stat-box bearish">
                <h3>📉 Bearish Momentum</h3>
                <p>{data.bearishStrength}</p>
                <div style={{background:"rgba(0,0,0,0.1)",borderRadius:"6px",height:"8px",marginTop:"8px"}}>
                  <div style={{background:"#ef4444",height:"8px",borderRadius:"6px",width:`${data.bearishScore}%`,transition:"width 0.8s ease"}}></div>
                </div>
                <small style={{fontSize:"11px",marginTop:"4px",display:"block"}}>{data.bearishScore}/100</small>
              </div>
              <div className="stat-box neutral">
                <h3>⚖️ Overall Signal</h3>
                <p>{data.overallMomentum}</p>
              </div>
            </div>
            <div className="momentum-chart">
              {data.topMomentumStocks && (
                <div style={{padding:"16px"}}>
                  <h3 style={{marginBottom:"12px",fontSize:"14px",fontWeight:"700"}}>🔥 Top Momentum Stocks</h3>
                  {data.topMomentumStocks.map((s, i) => (
                    <div key={i} style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"8px 0",borderBottom:"1px solid #e2e8f0"}}>
                      <span style={{fontWeight:"600",fontSize:"13px"}}>{s.name}</span>
                      <span style={{fontSize:"12px",color:"#64748b"}}>{s.momentum}</span>
                      <span style={{fontWeight:"700",fontSize:"13px",color:s.change?.startsWith("+")?"#16a34a":"#dc2626"}}>{s.change}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          <div style={{background:"#f0fdf4",border:"1px solid #bbf7d0",borderRadius:"10px",padding:"12px 16px",marginTop:"16px"}}>
            <strong>🤖 AI Recommendation:</strong> {data.recommendation}
          </div>
        </>
      ) : <p>Could not load momentum data.</p>}

      <footer className="momentum-footer">
        <p>✨ Powered by Nextgen ShareMarket & AI Momentum Engine — tracking trends in real time.</p>
      </footer>
    </div>
  );
}
