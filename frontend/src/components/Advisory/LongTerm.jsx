import { useState } from "react";
import { fetchLongTermStrategy } from "../../aiService";
import "./LongTerm.css";

const strategies = [
  { id:"SIP Systematic Investment Plan India", label:"SIPs for steady growth", class:"sip" },
  { id:"Blue chip stocks India NSE BSE", label:"Blue-chip stock allocation", class:"bluechip" },
  { id:"Sector diversification India portfolio", label:"Sector diversification", class:"diversify" },
  { id:"Retirement planning India NPS mutual funds", label:"Retirement planning", class:"retirement" },
  { id:"Global ETF international diversification India investor", label:"Global exposure", class:"global" },
];

export default function LongTerm() {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState({});

  const learn = (s) => {
    if (content[s.id]) return;
    setLoading(l => ({...l,[s.id]:true}));
    fetchLongTermStrategy(s.label).then(text => setContent(c => ({...c,[s.id]:text}))).catch(console.error).finally(() => setLoading(l => ({...l,[s.id]:false})));
  };

  return (
    <div className="longterm-container">
      <h2 className="longterm-heading">🌱 Nextgen AI — Long-Term Strategies</h2>
      <p className="longterm-text">Click any strategy for AI-powered analysis for Indian investors. Each strategy evolves with market conditions.</p>
      <div className="strategy-grid">
        {strategies.map(s => (
          <div key={s.id} className={`strategy-card ${s.class}`} onClick={() => learn(s)} style={{cursor:"pointer"}}>
            <div className="progress-ring"></div>
            <h3>{s.label}</h3>
            {loading[s.id] && <p style={{fontSize:"12px",color:"#6366f1"}}>🤖 AI analyzing strategy...</p>}
            {content[s.id] && <p style={{fontSize:"12px",marginTop:"8px",lineHeight:"1.5"}}>{content[s.id]}</p>}
            {!content[s.id] && !loading[s.id] && <p style={{fontSize:"11px",color:"#94a3b8",marginTop:"4px"}}>Click for AI analysis ↗</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
