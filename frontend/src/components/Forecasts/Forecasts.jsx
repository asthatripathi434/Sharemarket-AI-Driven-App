import { useState } from "react";
import Chatbot from "../Chatbot";
import "./Forecasts.css";
import Calculator from "./Calculator";
import RiskSimulation from "./RiskSimulation";
import TimeHorizon from "./TimeHorizon";
import Comparison from "./Comparison";

export default function Forecasts() {
  const [activeTab, setActiveTab] = useState("Calculator");
  return (
    <div className="forecasts-container">
      <div className="intro-card">
        <h2 className="heading">🔮 Nextgen AI — Forecasts</h2>
        <p className="intro-text">
          Use AI-powered forecasting tools to simulate risks, calculate returns, plan time horizons,
          and compare strategies. Nextgen AI helps you prepare for multiple market scenarios.
        </p>
      </div>
      <div className="tabs">
        {["Calculator","RiskSimulation","TimeHorizon","Comparison"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`tab ${activeTab === tab ? "active" : ""}`}>
            {tab === "RiskSimulation" ? "Risk Simulation" : tab === "TimeHorizon" ? "Time Horizon" : tab}
          </button>
        ))}
      </div>
      <div className="banner">⚠️ AI Forecasts are simulations based on historical data. They are not financial guarantees.</div>
      <div className="tab-content">
        {activeTab === "Calculator" && <Calculator />}
        {activeTab === "RiskSimulation" && <RiskSimulation />}
        {activeTab === "TimeHorizon" && <TimeHorizon />}
        {activeTab === "Comparison" && <Comparison />}
      </div>
      <Chatbot section="Forecasts" />
    </div>
  );
}
