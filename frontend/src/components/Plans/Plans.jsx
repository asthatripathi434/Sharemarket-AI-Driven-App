import { useState } from "react";
import Chatbot from "../Chatbot";
import "./Plans.css";
import Elite from "./ElitePlan";
import Free from "./FreePlan";
import Pro from "./ProPlan";
import Premium from "./PremiumPlan";

export default function Plans() {
  const [activeTab, setActiveTab] = useState("ElitePlan");
  return (
    <div className="plans-container">
      <div className="intro-card">
        <h2 className="heading">📝 Nextgen ShareMarket & AI — Subscription Plans</h2>
        <p className="intro-text">
          Choose from different AI-powered subscription tiers — Free, Pro, Premium, or Elite — each offering
          unique features and benefits tailored to your Indian market investing journey.
        </p>
      </div>
      <div className="tabs">
        {["ElitePlan","FreePlan","ProPlan","PremiumPlan"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`tab ${activeTab === tab ? "active" : ""}`}>
            {tab === "ElitePlan" ? "Elite" : tab === "FreePlan" ? "Free" : tab === "ProPlan" ? "Pro" : "Premium"}
          </button>
        ))}
      </div>
      <div className="banner">⚠️ Plan features vary by tier. Review carefully before subscribing to Nextgen AI.</div>
      <div className="tab-content">
        {activeTab === "ElitePlan" && <Elite />}
        {activeTab === "FreePlan" && <Free />}
        {activeTab === "ProPlan" && <Pro />}
        {activeTab === "PremiumPlan" && <Premium />}
      </div>
      <Chatbot section="Plans" />
    </div>
  );
}
