import { useState } from "react";
import "./Community.css";

export default function Community() {
  const [activeTab, setActiveTab] = useState("Sentiment");

  return (
    <div className="community-container">
      {/* Intro card */}
      <div className="intro-card">
        <h2 className="heading">📢 Nextgen ShareMarket & AI Community</h2>
        <p className="intro-text">
          Connect with fellow investors, share insights, and track collective market sentiment.
          The Community hub brings together discussions, polls, and leaderboards to keep you engaged.
        </p>
      </div>

      {/* Subtoggles */}
      <div className="tabs">
        {["Sentiment", "Leaderboard", "Discussions", "Polls"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`tab ${activeTab === tab ? "active" : ""}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Banner */}
      <div className="banner">
        ⚠️ Community content is user-generated. Please validate insights before making financial decisions.
      </div>

      {/* Subtoggle Content */}
      <div className="tab-content">
        {activeTab === "Sentiment" && (
          <div>
            <h3 className="tab-heading">📊 Market Sentiment</h3>
            <p className="text-gray-700">
              Live sentiment gauge showing bullish vs bearish community mood.
            </p>

            {/* ✅ Two separate boxes for Bullish & Bearish */}
            <div className="sentiment-grid">
              <div className="sentiment-box bullish">
                <h4>🐂 Bullish</h4>
                <p>65%</p>
              </div>
              <div className="sentiment-box bearish">
                <h4>🐻 Bearish</h4>
                <p>35%</p>
              </div>
            </div>
          </div>
        )}

        {activeTab === "Leaderboard" && (
          <div>
            <h3 className="tab-heading">🏆 Leaderboard</h3>
            <ul className="tab-list">
              <li>1. Astha Tripathi — 1200 pts</li>
              <li>2. Rahul Mehta — 950 pts</li>
              <li>3. Priya Sharma — 870 pts</li>
            </ul>
          </div>
        )}

        {activeTab === "Discussions" && (
          <div>
            <h3 className="tab-heading">💬 Discussions</h3>
            <p className="text-gray-700">Community threads on trending stocks and strategies.</p>
            <ul className="tab-list">
              <li>📈 Is IT sector undervalued?</li>
              <li>💡 Best SIP strategies for 2026</li>
              <li>🚀 Upcoming IPOs worth watching</li>
            </ul>
          </div>
        )}

        {activeTab === "Polls" && (
          <div>
            <h3 className="tab-heading">🗳️ Polls</h3>
            <p className="text-gray-700">Vote on hot topics and see community results.</p>
            <ul className="tab-list">
              <li>Will NIFTY cross 25,000 this quarter?</li>
              <li>Best sector for 2026 growth?</li>
              <li>Preferred investment horizon: Short vs Long term?</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}