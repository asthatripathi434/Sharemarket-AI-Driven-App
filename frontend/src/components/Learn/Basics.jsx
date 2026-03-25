import { useState } from "react";
import { fetchLearnContent } from "../../aiService";
import "./Basics.css";

const topics = [
  { id:"DEMAT Account", label:"DEMAT Account", class:"basics-demat" },
  { id:"Stocks NSE BSE", label:"Stocks", class:"basics-stocks" },
  { id:"Mutual Funds India", label:"Mutual Funds", class:"basics-mutual" },
  { id:"Investment Risk management", label:"Risk", class:"basics-risk" },
  { id:"Investment Returns CAGR", label:"Returns", class:"basics-returns" },
];

export default function Basics() {
  const [content, setContent] = useState({});
  const [loading, setLoading] = useState({});

  const learn = (topic) => {
    if (content[topic]) return;
    setLoading(l => ({...l,[topic]:true}));
    fetchLearnContent(topic)
      .then(text => setContent(c => ({...c,[topic]:text})))
      .catch(console.error)
      .finally(() => setLoading(l => ({...l,[topic]:false})));
  };

  return (
    <div className="basics-container">
      <h2 className="basics-heading">📘 Nextgen AI — Basics of Investing</h2>
      <p className="basics-text">Click any concept for AI-powered explanation tailored to Indian markets.</p>
      <div className="basics-grid">
        {topics.map(t => (
          <div key={t.id} className={`basics-card ${t.class}`} onClick={() => learn(t.id)} style={{cursor:"pointer"}}>
            <h3>{t.label}</h3>
            {loading[t.id] && <p style={{fontSize:"12px",color:"#6366f1"}}>🤖 AI explaining...</p>}
            {content[t.id] && <p style={{fontSize:"12px",marginTop:"8px",lineHeight:"1.5",color:"#1e293b"}}>{content[t.id]}</p>}
            {!content[t.id] && !loading[t.id] && <p style={{fontSize:"11px",color:"#94a3b8",marginTop:"4px"}}>Click to learn with AI ↗</p>}
          </div>
        ))}
      </div>
      <div className="basics-summary"><h3>🤖 Nextgen AI Quick Tip</h3><p>Start with small investments, diversify across sectors, and focus on long-term growth. Use Nextgen AI signals to guide entry and exit points.</p></div>
    </div>
  );
}
