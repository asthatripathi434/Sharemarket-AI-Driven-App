import { useState } from "react";
import { fetchLearnContent } from "../../aiService";
import "./Explainers.css";

const topics = [
  { id:"Market Trends global events stock prices India", label:"Market Trends", class:"explainer-market" },
  { id:"Inflation impact investment returns India purchasing power", label:"Inflation", class:"explainer-inflation" },
  { id:"Diversification investment risk reduction India", label:"Diversification", class:"explainer-diversification" },
  { id:"Liquidity financial assets conversion India", label:"Liquidity", class:"explainer-liquidity" },
  { id:"Volatility stock price fluctuation India VIX", label:"Volatility", class:"explainer-volatility" },
];

export default function Explainers() {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState({});

  const explain = (topic) => {
    if (content[topic]) return;
    setLoading(l => ({...l,[topic]:true}));
    fetchLearnContent(topic).then(text => setContent(c => ({...c,[topic]:text}))).catch(console.error).finally(() => setLoading(l => ({...l,[topic]:false})));
  };

  return (
    <div className="explainers-container">
      <h2 className="explainers-heading">📖 Nextgen AI — Financial Explainers</h2>
      <p className="explainers-text">Click any concept for AI-powered simple explanation with Indian market context.</p>
      <div className="explainers-grid">
        {topics.map(t => (
          <div key={t.id} className={`explainer-card ${t.class}`} onClick={() => explain(t.id)} style={{cursor:"pointer"}}>
            <h3>{t.label}</h3>
            {loading[t.id] && <p style={{fontSize:"12px",color:"#6366f1"}}>🤖 AI explaining...</p>}
            {content[t.id] && <p style={{fontSize:"12px",marginTop:"8px",lineHeight:"1.5"}}>{content[t.id]}</p>}
            {!content[t.id] && !loading[t.id] && <p style={{fontSize:"11px",color:"#94a3b8",marginTop:"4px"}}>Click to explain with AI ↗</p>}
          </div>
        ))}
      </div>
      <div className="explainers-summary"><h3>🤖 Quick Insight</h3><p>Nextgen AI Explainers bridge the gap between technical jargon and practical understanding, empowering smarter investment decisions in Indian markets.</p></div>
    </div>
  );
}
