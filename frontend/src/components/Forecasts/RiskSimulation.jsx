import { useState } from "react";
import { fetchRiskSimulation } from "../../aiService";
import "./RiskSimulation.css";

export default function RiskSimulation() {
  const [portfolio, setPortfolio] = useState("Balanced");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const simulate = async () => {
    setLoading(true);
    try { const res = await fetchRiskSimulation(portfolio); setResult(res); }
    catch { setResult(null); } finally { setLoading(false); }
  };

  const riskColor = (level) => ({Low:"#16a34a",Moderate:"#d97706",High:"#dc2626",Critical:"#7f1d1d"}[level] || "#64748b");

  return (
    <div className="risk-container">
      <h2 className="risk-heading">⚠️ Nextgen AI — Risk Simulation</h2>
      <p className="risk-text">AI-powered potential outcomes and risk level simulation.</p>

      <div style={{display:"flex",gap:"12px",alignItems:"flex-end",marginBottom:"16px",flexWrap:"wrap"}}>
        <div>
          <label style={{fontSize:"12px",fontWeight:"600",color:"#64748b",display:"block",marginBottom:"6px"}}>Portfolio Type</label>
          <select value={portfolio} onChange={e=>setPortfolio(e.target.value)}
            style={{padding:"10px",border:"1.5px solid #c7d2fe",borderRadius:"8px",fontSize:"14px",fontFamily:"Segoe UI,sans-serif"}}>
            <option>Conservative</option><option>Balanced</option><option>Growth</option><option>Aggressive</option>
          </select>
        </div>
        <button onClick={simulate} disabled={loading}
          style={{background:"linear-gradient(135deg,#1e40af,#7c3aed)",color:"#fff",border:"none",borderRadius:"10px",padding:"10px 22px",fontSize:"14px",fontWeight:"700",cursor:"pointer",fontFamily:"Segoe UI,sans-serif",opacity:loading?0.7:1}}>
          {loading ? "🤖 AI Simulating..." : "⚡ Run Simulation"}
        </button>
      </div>

      {!result && !loading && (
        <div className="risk-ring"><span>Select portfolio & run simulation</span></div>
      )}

      {result && (
        <>
          <div className="risk-ring" style={{borderColor:riskColor(result.overallRisk),color:riskColor(result.overallRisk)}}>
            <span>{result.overallRisk} Risk</span>
            <small style={{fontSize:"13px",display:"block"}}>Score: {result.riskScore}/100</small>
          </div>
          <div className="scenario-grid">
            {(result.scenarios || []).map((s, i) => (
              <div key={i} className={`scenario-card scenario-${s.label?.toLowerCase().split(" ")[0]}`}>
                {s.label} – {s.probability}%
                <small style={{display:"block",fontSize:"11px",marginTop:"4px"}}>{s.impact}</small>
              </div>
            ))}
          </div>
          <div style={{display:"flex",gap:"12px",marginTop:"12px",flexWrap:"wrap"}}>
            <div style={{background:"#fee2e2",borderRadius:"8px",padding:"10px",flex:1}}><strong>Max Drawdown:</strong> {result.maxDrawdown}</div>
            <div style={{background:"#dbeafe",borderRadius:"8px",padding:"10px",flex:1}}><strong>Sharpe Ratio:</strong> {result.sharpeRatio}</div>
          </div>
          <div className="summary-box"><h3>🤖 AI Recommendation</h3><p>{result.recommendation}</p></div>
        </>
      )}
    </div>
  );
}
