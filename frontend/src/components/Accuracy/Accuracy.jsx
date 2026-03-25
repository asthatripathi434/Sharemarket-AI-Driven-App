import { useState, useEffect } from "react";
import { fetchAccuracyStats } from "../../aiService";
import Chatbot from "../Chatbot";
import "./Accuracy.css";
import SuccessRate from "./SuccessRate";
import FailureRate from "./FailureRate";
import AvgReturns from "./AvgReturns";
import MonthlyChart from "./MonthlyChart";

export default function Accuracy() {
  const [activeTab, setActiveTab] = useState("SuccessRate");
  const [stats, setStats] = useState(null);

  useEffect(() => {
    fetchAccuracyStats().then(setStats).catch(console.error);
  }, []);

  return (
    <div className="accuracy-container">
      <div className="intro-card">
        <h2 className="heading">📈 Nextgen AI — Accuracy Analytics</h2>
        <p className="intro-text">
          Track the performance of AI-generated insights with success rates, failure rates,
          average returns, and monthly charts. Accuracy helps you validate reliability.
        </p>
        {stats && (
          <div style={{display:"flex",gap:"12px",flexWrap:"wrap",marginTop:"12px"}}>
            <span style={{background:"#dcfce7",color:"#166534",padding:"6px 14px",borderRadius:"20px",fontSize:"13px",fontWeight:"700"}}>✅ AI Success: {stats.overallSuccess}%</span>
            <span style={{background:"#fee2e2",color:"#991b1b",padding:"6px 14px",borderRadius:"20px",fontSize:"13px",fontWeight:"700"}}>❌ Failure: {stats.overallFailure}%</span>
            <span style={{background:"#dbeafe",color:"#1e40af",padding:"6px 14px",borderRadius:"20px",fontSize:"13px",fontWeight:"700"}}>📈 Avg Returns: +{stats.avgReturns}%</span>
            <span style={{background:"#fef3c7",color:"#92400e",padding:"6px 14px",borderRadius:"20px",fontSize:"13px",fontWeight:"700"}}>🏆 Best: {stats.bestSector}</span>
          </div>
        )}
      </div>

      <div className="tabs">
        {["SuccessRate","FailureRate","AvgReturns","MonthlyChart"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`tab ${activeTab === tab ? "active" : ""}`}>
            {tab === "SuccessRate" ? "Success Rate" : tab === "FailureRate" ? "Failure Rate" : tab === "AvgReturns" ? "Avg Returns" : "Monthly Chart"}
          </button>
        ))}
      </div>

      <div className="banner">
        ⚠️ Accuracy metrics are based on AI predictions using historical data. Past performance does not guarantee future results.
      </div>

      <div className="tab-content">
        {activeTab === "SuccessRate" && <SuccessRate stats={stats} />}
        {activeTab === "FailureRate" && <FailureRate stats={stats} />}
        {activeTab === "AvgReturns" && <AvgReturns stats={stats} />}
        {activeTab === "MonthlyChart" && <MonthlyChart stats={stats} />}
      </div>

      <Chatbot section="Accuracy" />
    </div>
  );
}
