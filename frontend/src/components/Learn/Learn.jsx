import { useState } from "react";
import Chatbot from "../Chatbot";
import "./Learn.css";
import Basics from "./Basics";
import Advanced from "./Advanced";
import Explainers from "./Explainers";
import Articles from "./Articles";

export default function Learn() {
  const [activeTab, setActiveTab] = useState("Basics");
  return (
    <div className="learn-container">
      <div className="intro-card">
        <h2 className="heading">📚 Nextgen AI — Learn</h2>
        <p className="intro-text">
          AI-powered educational resources to strengthen your investing knowledge. From DEMAT basics to advanced algo trading,
          detailed AI explainers, and AI-generated articles — Nextgen AI is your complete knowledge hub.
        </p>
      </div>
      <div className="tabs">
        {["Basics","Advanced","Explainers","Articles"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`tab ${activeTab === tab ? "active" : ""}`}>{tab}</button>
        ))}
      </div>
      <div className="banner">⚠️ AI-generated learning resources are for educational purposes only. Not financial advice.</div>
      <div className="tab-content">
        {activeTab === "Basics" && <Basics />}
        {activeTab === "Advanced" && <Advanced />}
        {activeTab === "Explainers" && <Explainers />}
        {activeTab === "Articles" && <Articles />}
      </div>
      <Chatbot section="Learn" />
    </div>
  );
}
