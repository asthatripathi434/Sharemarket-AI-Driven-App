import { useState } from "react";
import { fetchLearnContent } from "../../aiService";
import "./Advance.css";

const topics = [
  { id:"Algorithmic Trading India AI ML", label:"Algorithmic Trading", class:"advance-algo" },
  { id:"Derivatives Options Futures India", label:"Derivatives", class:"advance-derivatives" },
  { id:"Portfolio Optimization Modern Portfolio Theory", label:"Portfolio Optimization", class:"advance-portfolio" },
  { id:"Monte Carlo Simulation stock market", label:"Monte Carlo Simulation", class:"advance-simulation" },
  { id:"Value at Risk VaR Indian stocks", label:"Value at Risk (VaR)", class:"advance-risk" },
];

export default function Advance() {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState({});

  const learn = (topic) => {
    if (content[topic]) return;
    setLoading(l => ({...l,[topic]:true}));
    fetchLearnContent(topic).then(text => setContent(c => ({...c,[topic]:text}))).catch(console.error).finally(() => setLoading(l => ({...l,[topic]:false})));
  };

  return (
    <div className="advance-container">
      <h2 className="advance-heading">🚀 Nextgen AI — Advanced Strategies</h2>
      <p className="advance-text">Click any topic for AI-powered deep dive into advanced concepts.</p>
      <div className="advance-grid">
        {topics.map(t => (
          <div key={t.id} className={`advance-card ${t.class}`} onClick={() => learn(t.id)} style={{cursor:"pointer"}}>
            <h3>{t.label}</h3>
            {loading[t.id] && <p style={{fontSize:"12px",color:"#6366f1"}}>🤖 AI explaining...</p>}
            {content[t.id] && <p style={{fontSize:"12px",marginTop:"8px",lineHeight:"1.5"}}>{content[t.id]}</p>}
            {!content[t.id] && !loading[t.id] && <p style={{fontSize:"11px",color:"#94a3b8",marginTop:"4px"}}>Click to learn with AI ↗</p>}
          </div>
        ))}
      </div>
      <div className="advance-summary"><h3>🤖 Expert Insight</h3><p>Advanced strategies help refine decision-making in Indian markets. Use Nextgen AI simulations and optimization tools to maximize long-term success.</p></div>
    </div>
  );
}
