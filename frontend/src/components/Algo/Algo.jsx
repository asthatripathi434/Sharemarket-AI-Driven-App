import { useState } from "react";
import Chatbot from "../Chatbot";
import "./Algo.css";
import AlgoPricing from "./AlgoPricing";
import CustomModels from "./CustomModels";
import MomentumTracker from "./MomentumTracker";
import ValueScreener from "./ValueScreener";
import VolatilityGuard from "./VolatilityGuard";

export default function Algo() {
  const [activeTab, setActiveTab] = useState("AlgoPricing");
  return (
    <div className="algo-container">
      <div className="intro-card">
        <h2 className="heading">🤖 Nextgen AI — Algo Trading Suite</h2>
        <p className="intro-text">
          Access advanced AI algorithmic trading tools including subscription plans, custom AI models,
          momentum tracking, value screening, and volatility guards. Nextgen AI empowers automated,
          data-driven investing for Indian markets.
        </p>
      </div>
      <div className="tabs">
        {["AlgoPricing","CustomModels","MomentumTracker","ValueScreener","VolatilityGuard"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`tab ${activeTab === tab ? "active" : ""}`}>
            {tab === "AlgoPricing" ? "Algo Plans" : tab === "CustomModels" ? "Custom Models" : tab === "MomentumTracker" ? "Momentum" : tab === "ValueScreener" ? "Value Screener" : "Volatility Guard"}
          </button>
        ))}
      </div>
      <div className="banner">⚠️ AI Algo tools are for analysis only. Validate outputs before executing trades in live markets.</div>
      <div className="tab-content">
        {activeTab === "AlgoPricing" && <AlgoPricing />}
        {activeTab === "CustomModels" && <CustomModels />}
        {activeTab === "MomentumTracker" && <MomentumTracker />}
        {activeTab === "ValueScreener" && <ValueScreener />}
        {activeTab === "VolatilityGuard" && <VolatilityGuard />}
      </div>
      <Chatbot section="Algo" />
    </div>
  );
}
