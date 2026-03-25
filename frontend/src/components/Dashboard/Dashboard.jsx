import { useState, useEffect } from "react";
import { fetchDashboardStats } from "../../aiService";
import Chatbot from "../Chatbot";
import "./Dashboard.css";

export default function Dashboard({ setActiveSection }) {
  const [stats, setStats] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardStats()
      .then(setStats)
      .catch(() => setStats(null))
      .finally(() => setLoading(false));
  }, []);

  return (
    <main className="main">
      {/* Header */}
      <div className="dashboard-header">
        <h1 className="page-title font-extrabold advisory-gradient">
          📊 Nextgen ShareMarket &amp; AI — Dashboard
        </h1>
        <div className="header-actions">
          <div className="auth-buttons">
            <button className="auth-button login-button">Login</button>
            <button className="auth-button signup-button">Signup</button>
          </div>
        </div>
      </div>

      {/* ══ TWO OPEN DEMAT ACCOUNT BOXES ══ */}
      <div className="demat-hero-section">
        {/* Box 1: Quick Open Demat */}
        <div className="demat-hero-card demat-primary">
          <div className="demat-hero-badge">🏆 #1 Trusted Platform</div>
          <h2 className="demat-hero-title">Open FREE Demat Account</h2>
          <p className="demat-hero-sub">Start investing in minutes with zero brokerage on equity delivery</p>
          <div className="demat-features">
            <span>✅ Zero AMC for 1st year</span>
            <span>✅ Instant KYC</span>
            <span>✅ NSE + BSE Access</span>
          </div>
          <div className="demat-form">
            <input type="tel" placeholder="📱 Enter Mobile Number" className="demat-input" />
            <button className="demat-otp-btn" onClick={() => alert("OTP sent! Complete KYC to open your Demat account.")}>
              Get OTP & Start →
            </button>
          </div>
          <p className="demat-note">Join 2 Lakh+ investors already on Nextgen AI</p>
        </div>

        {/* Box 2: AI-Guided Demat */}
        <div className="demat-hero-card demat-secondary">
          <div className="demat-hero-badge demat-badge-gold">🤖 AI-Guided Onboarding</div>
          <h2 className="demat-hero-title">Get AI-Powered Advisory</h2>
          <p className="demat-hero-sub">Our AI analyzes your risk profile and suggests the perfect investment plan</p>
          <div className="demat-features">
            <span>🎯 Personalized Strategy</span>
            <span>📊 Real-time Signals</span>
            <span>🛡️ Risk Protection</span>
          </div>
          <div className="demat-form">
            <select className="demat-input">
              <option>Select Risk Profile</option>
              <option>Conservative</option>
              <option>Moderate</option>
              <option>Aggressive</option>
            </select>
            <button
              className="demat-otp-btn demat-ai-btn"
              onClick={() => setActiveSection && setActiveSection("Advisory")}
            >
              Get AI Advisory →
            </button>
          </div>
          <p className="demat-note">AI-powered. SEBI guidelines followed.</p>
        </div>
      </div>

      {/* Live Market Ticker */}
      {stats && (
        <div className="market-ticker">
          <span className="ticker-label">🔴 LIVE</span>
          <span className={stats.niftyChange >= 0 ? "ticker-up" : "ticker-down"}>
            NIFTY 50: {stats.nifty50?.toLocaleString("en-IN")} ({stats.niftyChange >= 0 ? "+" : ""}{stats.niftyChange}%)
          </span>
          <span className="ticker-sep">|</span>
          <span className={stats.sensexChange >= 0 ? "ticker-up" : "ticker-down"}>
            SENSEX: {stats.sensex?.toLocaleString("en-IN")} ({stats.sensexChange >= 0 ? "+" : ""}{stats.sensexChange}%)
          </span>
          <span className="ticker-sep">|</span>
          <span>🌡️ Market Mood: <strong>{stats.marketMood}</strong></span>
        </div>
      )}

      {/* Main Cards */}
      <div className="cards">
        <div className="left-column">
          <div className="card card-float suggested-card">
            <h3 className="font-bold mb-3">🤖 AI Suggested Strategy</h3>
            {loading ? (
              <p className="ai-loading">⏳ AI is analyzing market conditions...</p>
            ) : stats ? (
              <>
                <p>✅ Market Mood: <strong>{stats.marketMood}</strong></p>
                <p>✅ Top Gainer: <strong>{stats.topGainer}</strong></p>
                <p>✅ AI Success Rate: <strong>{stats.successRate}%</strong></p>
                <p>📊 Avg Returns: <strong>+{stats.avgReturns}%</strong></p>
              </>
            ) : (
              <>
                <p>✅ Reduce mid-cap exposure</p>
                <p>✅ Hold quality large-caps</p>
              </>
            )}
          </div>
          <div className="card card-float precaution-card">
            <h3 className="font-bold mb-2">⚠️ Precaution</h3>
            <p>Nextgen ShareMarket &amp; AI provides AI-based insights only.</p>
            <p>We do not ask for brokerage account details.</p>
            <p>This is not legal advice — consult SEBI-registered advisors and use a DEMAT account.</p>
          </div>
        </div>

        <div className="card card-float risk-card-wide">
          <h3 className="font-bold mb-3">🤖 Risk-Aware Advisory AI</h3>
          <p>✓ Conservative, capital-protection focused</p>
          <p>✓ Identifies downside risk &amp; long-term safety</p>
          {loading ? (
            <p className="ai-loading">⏳ Generating AI market analysis...</p>
          ) : stats ? (
            <>
              <p className="mt-2">{stats.todayHighlight}</p>
              <div className="ai-stats-row">
                <span className="ai-stat-pill green">📈 {stats.avgReturns}% Avg Returns</span>
                <span className="ai-stat-pill blue">🎯 {stats.successRate}% Success</span>
                <span className="ai-stat-pill orange">⚡ VIX: {stats.volatilityIndex}</span>
              </div>
            </>
          ) : (
            <p>Based on current market data, potential high risks identified in mid-cap stocks. Holding on to quality large-cap stocks is advised.</p>
          )}
          <small>⚠️ AI-generated probability-based insight — Not SEBI-registered advice</small>
        </div>
      </div>

      <Chatbot section="Dashboard" />
    </main>
  );
}
