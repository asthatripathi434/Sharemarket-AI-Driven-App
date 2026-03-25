import { useState } from "react";
import { fetchForecastCalculation } from "../../aiService";

export default function Calculator() {
  const [amount, setAmount] = useState("100000");
  const [years, setYears] = useState("5");
  const [risk, setRisk] = useState("Moderate");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const calculate = async () => {
    setLoading(true);
    try {
      const res = await fetchForecastCalculation(amount, years, risk);
      setResult(res);
    } catch { setResult(null); }
    finally { setLoading(false); }
  };

  return (
    <div className="subtoggle-container">
      <h2 className="subtoggle-heading">🧮 Nextgen AI — Forecast Calculator</h2>
      <p className="subtoggle-text">AI-powered investment return estimator for Indian markets.</p>

      <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(160px,1fr))",gap:"14px",marginTop:"16px",marginBottom:"16px"}}>
        <div>
          <label style={{fontSize:"12px",fontWeight:"600",color:"#64748b",display:"block",marginBottom:"6px"}}>Investment Amount (₹)</label>
          <input type="number" value={amount} onChange={e=>setAmount(e.target.value)}
            style={{width:"100%",padding:"10px",border:"1.5px solid #c7d2fe",borderRadius:"8px",fontSize:"14px",fontFamily:"Segoe UI,sans-serif"}} />
        </div>
        <div>
          <label style={{fontSize:"12px",fontWeight:"600",color:"#64748b",display:"block",marginBottom:"6px"}}>Years</label>
          <input type="number" value={years} onChange={e=>setYears(e.target.value)} min="1" max="30"
            style={{width:"100%",padding:"10px",border:"1.5px solid #c7d2fe",borderRadius:"8px",fontSize:"14px",fontFamily:"Segoe UI,sans-serif"}} />
        </div>
        <div>
          <label style={{fontSize:"12px",fontWeight:"600",color:"#64748b",display:"block",marginBottom:"6px"}}>Risk Level</label>
          <select value={risk} onChange={e=>setRisk(e.target.value)}
            style={{width:"100%",padding:"10px",border:"1.5px solid #c7d2fe",borderRadius:"8px",fontSize:"14px",fontFamily:"Segoe UI,sans-serif"}}>
            <option>Conservative</option><option>Moderate</option><option>Aggressive</option>
          </select>
        </div>
      </div>

      <button onClick={calculate} disabled={loading}
        style={{background:"linear-gradient(135deg,#1e40af,#7c3aed)",color:"#fff",border:"none",borderRadius:"10px",padding:"12px 28px",fontSize:"14px",fontWeight:"700",cursor:"pointer",fontFamily:"Segoe UI,sans-serif",opacity:loading?0.7:1}}>
        {loading ? "🤖 AI Calculating..." : "🚀 Calculate with AI"}
      </button>

      {result && (
        <div style={{marginTop:"20px",background:"linear-gradient(135deg,#f0f9ff,#e0f2fe)",border:"1px solid #bae6fd",borderRadius:"14px",padding:"20px"}}>
          <h3 style={{margin:"0 0 14px",color:"#0369a1",fontSize:"16px"}}>🤖 AI Forecast Results</h3>
          <div style={{display:"grid",gridTemplateColumns:"repeat(auto-fit,minmax(140px,1fr))",gap:"12px"}}>
            <div style={{background:"#fff",borderRadius:"10px",padding:"14px",textAlign:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
              <p style={{fontSize:"11px",color:"#64748b",margin:"0 0 6px"}}>CAGR</p>
              <p style={{fontSize:"22px",fontWeight:"800",color:"#16a34a",margin:0}}>{result.cagr}%</p>
            </div>
            <div style={{background:"#fff",borderRadius:"10px",padding:"14px",textAlign:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
              <p style={{fontSize:"11px",color:"#64748b",margin:"0 0 6px"}}>Final Value</p>
              <p style={{fontSize:"18px",fontWeight:"800",color:"#1e40af",margin:0}}>{result.finalValue}</p>
            </div>
            <div style={{background:"#fff",borderRadius:"10px",padding:"14px",textAlign:"center",boxShadow:"0 2px 8px rgba(0,0,0,0.06)"}}>
              <p style={{fontSize:"11px",color:"#64748b",margin:"0 0 6px"}}>Total Returns</p>
              <p style={{fontSize:"18px",fontWeight:"800",color:"#7c3aed",margin:0}}>{result.totalReturns}</p>
            </div>
          </div>
          <div style={{marginTop:"14px",display:"grid",gridTemplateColumns:"1fr 1fr",gap:"10px"}}>
            <div style={{background:"#dcfce7",borderRadius:"8px",padding:"10px"}}><strong>Best Case:</strong> {result.bestCase}</div>
            <div style={{background:"#fee2e2",borderRadius:"8px",padding:"10px"}}><strong>Worst Case:</strong> {result.worstCase}</div>
          </div>
          <p style={{marginTop:"12px",fontSize:"13px",color:"#475569",background:"#fff",borderRadius:"8px",padding:"10px"}}>{result.recommendation}</p>
        </div>
      )}
    </div>
  );
}
