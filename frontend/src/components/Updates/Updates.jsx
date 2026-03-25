import { useState } from "react";
import Chatbot from "../Chatbot";
import "./Updates.css";
import DailySnapshot from "./DailySnapshot";
import WeeklyOutlook from "./WeeklyOutlook";
import BreakingNews from "./BreakingNews";
import SectorFocus from "./SectorFocus";

export default function Updates() {
  const [activeTab, setActiveTab] = useState("DailySnapshot");
  return (
    <div className="updates-container">
      <div className="intro-card">
        <h2 className="heading">📰 Nextgen AI — Market Updates</h2>
        <p className="intro-text">
          Stay informed with AI-powered real-time updates, daily snapshots, weekly outlooks, breaking news,
          and sector-specific insights. Nextgen AI keeps you aligned with the latest market trends.
        </p>
      </div>
      <div className="tabs">
        {["DailySnapshot","WeeklyOutlook","BreakingNews","SectorFocus"].map(tab => (
          <button key={tab} onClick={() => setActiveTab(tab)} className={`tab ${activeTab === tab ? "active" : ""}`}>
            {tab === "DailySnapshot" ? "Daily Snapshot" : tab === "WeeklyOutlook" ? "Weekly Outlook" : tab === "BreakingNews" ? "Breaking News" : "Sector Focus"}
          </button>
        ))}
      </div>
      <div className="banner">⚠️ AI-generated updates. Validate before making investment decisions.</div>
      <div className="tab-content">
        {activeTab === "DailySnapshot" && <DailySnapshot />}
        {activeTab === "WeeklyOutlook" && <WeeklyOutlook />}
        {activeTab === "BreakingNews" && <BreakingNews />}
        {activeTab === "SectorFocus" && <SectorFocus />}
      </div>
      <Chatbot section="Updates" />
    </div>
  );
}
