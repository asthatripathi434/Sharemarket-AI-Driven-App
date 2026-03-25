import { useState, useEffect } from "react";
import { fetchIPOAnalysis } from "../../aiService";
import Chatbot from "../Chatbot";
import "./Advisory.css";

export default function Advisory() {
  const [ipoAnalysis, setIpoAnalysis] = useState("");
  const [loadingIPO, setLoadingIPO] = useState(false);

  const analyzeIPO = (name) => {
    setLoadingIPO(true);
    fetchIPOAnalysis(name)
      .then(setIpoAnalysis)
      .catch(() => setIpoAnalysis("Could not fetch AI analysis."))
      .finally(() => setLoadingIPO(false));
  };

  return (
    <div className="advisory-container">
      <h1 className="advisory-heading">📑 Nextgen ShareMarket & AI — Advisory Hub</h1>
      <p className="advisory-text">
        Your one-stop destination for personalized AI-driven financial guidance, curated strategies, compliance updates, and expert insights.
      </p>

      <div className="advisory-grid">
        <div className="advisory-card strategy">
          <h3>📈 AI Investment Strategies</h3>
          <p>Explore AI-curated strategies tailored to your risk profile and goals.</p>
          <ul>
            <li>Short-term trading ideas</li>
            <li>Balanced portfolio plans</li>
            <li>Sector-specific strategies</li>
          </ul>
        </div>
        <div className="advisory-card compliance">
          <h3>⚖️ Compliance Updates</h3>
          <p>Stay informed with the latest SEBI and global regulatory guidelines.</p>
          <ul>
            <li>Tax-saving schemes</li>
            <li>Regulatory changes</li>
            <li>Investor protection rules</li>
          </ul>
        </div>
        <div className="advisory-card insights">
          <h3>💡 AI Expert Insights</h3>
          <p>Read AI-generated market analysis and expert opinions to guide your decisions.</p>
          <ul>
            <li>Weekly market outlook</li>
            <li>Top analyst picks</li>
            <li>Global macro trends</li>
          </ul>
        </div>
        <div className="advisory-card alerts">
          <h3>🔔 Alerts & Notifications</h3>
          <p>Get AI real-time alerts on portfolio changes and market events.</p>
          <ul>
            <li>Price movement alerts</li>
            <li>IPO subscription updates</li>
            <li>Dividend announcements</li>
          </ul>
        </div>
      </div>

      {/* AI IPO Quick Analyzer */}
      <div className="advisory-feature">
        <h2>🤖 AI IPO Quick Analysis</h2>
        <p>Click any IPO for instant AI analysis:</p>
        <div style={{display:"flex",gap:"10px",flexWrap:"wrap",marginTop:"10px"}}>
          {["TechNova Ltd","GreenEnergy Corp","FinTrust Bank","MediCare Plus","AgriGrow Ltd"].map(name => (
            <button key={name} onClick={() => analyzeIPO(name)}
              style={{background:"#1e40af",color:"#fff",border:"none",borderRadius:"8px",padding:"8px 14px",cursor:"pointer",fontSize:"12px",fontFamily:"Segoe UI,sans-serif"}}>
              {name}
            </button>
          ))}
        </div>
        {loadingIPO && <p className="ai-loading" style={{marginTop:"12px"}}>🤖 AI analyzing IPO...</p>}
        {ipoAnalysis && !loadingIPO && (
          <div style={{marginTop:"12px",background:"#f0f9ff",border:"1px solid #bae6fd",borderRadius:"10px",padding:"14px",fontSize:"14px",lineHeight:"1.6"}}>
            {ipoAnalysis}
          </div>
        )}
      </div>

      <div className="advisory-quicklinks">
        <h2>🔗 Quick Links</h2>
        <ul>
          <li>📊 Portfolio Health Check</li>
          <li>📅 Long-Term Wealth Plans</li>
          <li>📈 IPO Tracker</li>
          <li>💡 Daily AI Tips</li>
        </ul>
      </div>

      <div className="advisory-banner">
        ⚠️ Advisory content is AI-generated and informational only. Nextgen ShareMarket & AI is not SEBI-registered. Please consult a certified financial advisor before making investment decisions.
      </div>

      <Chatbot section="Advisory" />
    </div>
  );
}
