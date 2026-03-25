import { useState } from "react";
import { buildCustomModel } from "../../aiService";
import "./CustomModels.css";

const models = [
  { id:"Volatility Forecast", label:"Volatility Forecast", desc:"Predict market swings with advanced risk metrics.", class:"volatility" },
  { id:"Value Screener", label:"Value Screener", desc:"Identify undervalued stocks using P/E & C/E ratios.", class:"value" },
  { id:"Momentum Detector", label:"Momentum Detector", desc:"Track bullish & bearish momentum in real time.", class:"momentum" },
  { id:"Custom ML trading model", label:"Custom ML Model", desc:"AI-trained model for your investment style.", class:"custom" },
];

export default function CustomModels() {
  const [filter, setFilter] = useState("All Models");
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState({});
  const [dataset, setDataset] = useState("Indian large-cap equity portfolio, 3-year data");

  const build = (modelId) => {
    setLoading(l => ({...l,[modelId]:true}));
    buildCustomModel(modelId, dataset)
      .then(text => setContent(c => ({...c,[modelId]:text})))
      .catch(console.error)
      .finally(() => setLoading(l => ({...l,[modelId]:false})));
  };

  return (
    <div className="models-container">
      <header className="models-header">
        <h2>⚙️ Nextgen AI — Custom Models</h2>
        <p>Build, understand & deploy AI financial intelligence for Indian markets</p>
      </header>

      <div style={{marginBottom:"14px"}}>
        <label style={{fontSize:"12px",fontWeight:"600",color:"#64748b",display:"block",marginBottom:"6px"}}>Dataset Context</label>
        <input value={dataset} onChange={e=>setDataset(e.target.value)}
          style={{width:"100%",padding:"10px",border:"1.5px solid #c7d2fe",borderRadius:"8px",fontSize:"13px",fontFamily:"Segoe UI,sans-serif"}} />
      </div>

      <section className="models-filters">
        <select value={filter} onChange={e=>setFilter(e.target.value)}>
          <option>All Models</option><option>Financial Models</option><option>Machine Learning Models</option>
        </select>
      </section>

      <section className="models-grid">
        {models.map(m => (
          <div key={m.id} className={`model-card ${m.class}`}>
            <h3>{m.label}</h3>
            <p>{m.desc}</p>
            <button onClick={() => build(m.id)}
              style={{marginTop:"10px",background:"#1e40af",color:"#fff",border:"none",borderRadius:"6px",padding:"7px 14px",fontSize:"12px",cursor:"pointer",fontFamily:"Segoe UI,sans-serif"}}>
              {loading[m.id] ? "🤖 AI Building..." : "🔧 Build with AI"}
            </button>
            {content[m.id] && <p style={{fontSize:"12px",marginTop:"10px",lineHeight:"1.6",background:"rgba(255,255,255,0.7)",borderRadius:"8px",padding:"10px",color:"#1e293b"}}>{content[m.id]}</p>}
          </div>
        ))}
      </section>

      <section className="models-comparison">
        <div className="compare-box">📈 AI Accuracy: 92%+</div>
        <div className="compare-box">⚡ Real-time Speed</div>
        <div className="compare-box">🔒 SEBI Compliant</div>
      </section>

      <footer className="models-footer">
        <p>✨ Nextgen ShareMarket & AI Custom Models — your AI-powered innovation hub for Indian markets.</p>
      </footer>
    </div>
  );
}
