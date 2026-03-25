import { useState, useEffect } from "react";
import { fetchSectorFocus } from "../../aiService";
import "./SectorFocus.css";

export default function SectorFocus() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchSectorFocus().then(setData).catch(console.error).finally(() => setLoading(false));
  }, []);

  return (
    <div className="sector-container">
      <header className="sector-header">
        <h2>📊 Nextgen AI — Sector Focus</h2>
        <p>AI-driven sector-wise performance and volatility trends.</p>
      </header>
      {loading ? (
        <p style={{color:"#6366f1",fontStyle:"italic",padding:"20px"}}>🤖 AI analyzing sector performance...</p>
      ) : data ? (
        <>
          {data.hotSector && (
            <div style={{background:"linear-gradient(135deg,#fef3c7,#fde68a)",border:"1px solid #f59e0b",borderRadius:"10px",padding:"12px 16px",marginBottom:"16px",fontSize:"14px",fontWeight:"600",color:"#92400e"}}>
              🔥 Hot Sector Today: <strong>{data.hotSector}</strong>
            </div>
          )}
          <section className="sector-grid">
            {(data.sectors || []).map((s, i) => (
              <div key={i} className={`sector-card ${s.name?.toLowerCase().replace(" ","")}`}>
                <h3>{s.icon} {s.name}</h3>
                <p style={{fontWeight:"700",fontSize:"16px"}}>{s.change}</p>
                <p style={{fontSize:"12px",color:"#64748b"}}>{s.trend}</p>
                {s.topStock && <p style={{fontSize:"11px",marginTop:"6px"}}>Top: <strong>{s.topStock}</strong></p>}
                {s.outlook && <p style={{fontSize:"11px",color:"#475569"}}>{s.outlook}</p>}
              </div>
            ))}
          </section>
          <footer className="sector-summary">
            <h3>🤖 AI Sector Insights</h3>
            <p>{data.summary}</p>
          </footer>
        </>
      ) : <p>Could not load sector data.</p>}
    </div>
  );
}
