import { useState } from "react";
import "./Sentiment.css";  

export default function Sentiment() {
  return (
    <div className="sentiment-container">
      {/* Heading */}
      <h2 className="sentiment-heading">📊 Market Sentiment</h2>
      <p className="sentiment-text">
        Live sentiment gauge showing bullish vs bearish community mood.
      </p>

      {/* Two separate boxes */}
      <div className="sentiment-grid">
        <div className="sentiment-box bullish">
          <h3>🐂 Bullish</h3>
          <p>65%</p>
        </div>
        <div className="sentiment-box bearish">
          <h3>🐻 Bearish</h3>
          <p>35%</p>
        </div>
      </div>

      {/* Gauge bar */}
      <div className="sentiment-gauge">
        <div className="gauge-fill bullish" style={{ width: "65%" }}>
          65% Bullish
        </div>
        <div className="gauge-fill bearish" style={{ width: "35%" }}>
          35% Bearish
        </div>
      </div>

      {/* Banner */}
      <div className="sentiment-banner">
        🌟 Community sentiment updates live — stay tuned to market mood swings!
      </div>
    </div>
  );
}