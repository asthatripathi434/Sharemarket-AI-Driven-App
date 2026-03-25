import { useState } from "react";

export default function Sidebar({ setActiveSection }) {
  const [openSection, setOpenSection] = useState(null);
  const [openDashboardSub, setOpenDashboardSub] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
    setOpenDashboardSub(null);
  };
  const toggleDashboardSub = (sub) => {
    setOpenDashboardSub(openDashboardSub === sub ? null : sub);
  };

  return (
    <aside className="sidebar fixed top-0 left-0 h-screen shadow-lg transition-[width] duration-300 ease-in-out w-20 hover:w-64">
      {/* Logo */}
      <span className="logo-gradient">Nextgen ShareMarket &amp; AI</span>
      <span className="logo-tagline">🤖 AI-Powered Trading</span>

      {/* DEMAT box */}
      <div className="demat-box mb-6 px-4 py-2 transform transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-xl">
        <h4>OPEN FREE DEMAT</h4>
        <input type="tel" placeholder="Enter Mobile Number" className="input border rounded px-2 py-1 w-full mb-2" />
        <button onClick={() => alert("OTP sent! Complete KYC to open your free Demat account.")}>Send OTP</button>
      </div>

      <nav className="px-4">
        {/* Dashboard */}
        <p className="menu-title cursor-pointer flex justify-between items-center font-semibold transform transition-transform duration-300 ease-in-out hover:translate-x-2 hover:text-blue-600"
          onClick={() => toggleSection("dashboard")}>
          📊 Dashboard <span>{openSection === "dashboard" ? "▾" : "▸"}</span>
        </p>
        {openSection === "dashboard" && (
          <ul className="ml-4 mt-2 space-y-1">
            <li onClick={() => setActiveSection("Welcome")}>🌟 Welcome</li>
            <li onClick={() => setActiveSection("Stats")}>📊 Stats</li>
            <li onClick={() => setActiveSection("Trial")}>🧪 Trial</li>
            <li onClick={() => setActiveSection("FeaturedTip")}>💡 Featured Tip</li>
            <li className="submenu-title font-bold text-purple-700 cursor-pointer flex justify-between items-center transform transition-transform duration-300 ease-in-out hover:translate-x-2 hover:text-purple-900"
              onClick={() => { setActiveSection("Rewards"); toggleDashboardSub("rewards"); }}>
              🏆 Rewards <span>{openDashboardSub === "rewards" ? "▾" : "▸"}</span>
            </li>
            {openDashboardSub === "rewards" && (
              <ul className="submenu ml-6 mt-1 space-y-1">
                <li onClick={() => setActiveSection("Badges")}>🏆 Badges</li>
                <li onClick={() => setActiveSection("Progress")}>📊 Progress</li>
                <li onClick={() => setActiveSection("Challenges")}>🎯 Challenges</li>
                <li onClick={() => setActiveSection("Growth")}>📈 Growth</li>
              </ul>
            )}
            <li className="submenu-title font-bold text-red-700 cursor-pointer flex justify-between items-center transform transition-transform duration-300 ease-in-out hover:translate-x-2 hover:text-red-900"
              onClick={() => { setActiveSection("Community"); toggleDashboardSub("community"); }}>
              👥 Community <span>{openDashboardSub === "community" ? "▾" : "▸"}</span>
            </li>
            {openDashboardSub === "community" && (
              <ul className="submenu ml-6 mt-1 space-y-1">
                <li onClick={() => setActiveSection("Sentiment")}>💬 Sentiment</li>
                <li onClick={() => setActiveSection("Leaderboard")}>🏆 Leaderboard</li>
                <li onClick={() => setActiveSection("Discussions")}>💬 Discussions</li>
                <li onClick={() => setActiveSection("Polls")}>📊 Polls</li>
              </ul>
            )}
          </ul>
        )}

        {/* Advisory */}
        <p className="menu-title cursor-pointer flex justify-between items-center font-semibold mt-4 transform transition-transform duration-300 ease-in-out hover:translate-x-2 hover:text-blue-600"
          onClick={() => { toggleSection("advisory"); setActiveSection("Advisory"); }}>
          💡 Advisory <span>{openSection === "advisory" ? "▾" : "▸"}</span>
        </p>
        {openSection === "advisory" && (
          <ul className="ml-4 mt-2 space-y-1">
            <li onClick={() => setActiveSection("DailyTips")}>💡 Daily Tips</li>
            <li onClick={() => setActiveSection("LongTerm")}>📅 Long-Term</li>
            <li onClick={() => setActiveSection("IPO")}>📈 IPO</li>
            <li onClick={() => setActiveSection("Alerts")}>🔔 Alerts</li>
          </ul>
        )}

        {/* Accuracy */}
        <p className="menu-title cursor-pointer flex justify-between items-center font-semibold mt-4 transform transition-transform duration-300 ease-in-out hover:translate-x-2 hover:text-blue-600"
          onClick={() => { toggleSection("accuracy"); setActiveSection("Accuracy"); }}>
          🎯 Accuracy <span>{openSection === "accuracy" ? "▾" : "▸"}</span>
        </p>
        {openSection === "accuracy" && (
          <ul className="ml-4 mt-2 space-y-1">
            <li onClick={() => setActiveSection("SuccessRate")}>✅ Success Rate</li>
            <li onClick={() => setActiveSection("FailureRate")}>❌ Failure Rate</li>
            <li onClick={() => setActiveSection("AvgReturns")}>📈 Avg Returns</li>
            <li onClick={() => setActiveSection("MonthlyChart")}>📊 Monthly Chart</li>
          </ul>
        )}

        {/* Forecasts */}
        <p className="menu-title cursor-pointer flex justify-between items-center font-semibold mt-4 transform transition-transform duration-300 ease-in-out hover:translate-x-2 hover:text-blue-600"
          onClick={() => { toggleSection("forecasts"); setActiveSection("Forecasts"); }}>
          📅 Forecasts <span>{openSection === "forecasts" ? "▾" : "▸"}</span>
        </p>
        {openSection === "forecasts" && (
          <ul className="ml-4 mt-2 space-y-1">
            <li onClick={() => setActiveSection("Calculator")}>🧮 Calculator</li>
            <li onClick={() => setActiveSection("RiskSimulation")}>⚖️ Risk Simulation</li>
            <li onClick={() => setActiveSection("TimeHorizon")}>⏳ Time Horizon</li>
            <li onClick={() => setActiveSection("Comparison")}>📊 Comparison</li>
          </ul>
        )}

        {/* Learn */}
        <p className="menu-title cursor-pointer flex justify-between items-center font-semibold mt-4 transform transition-transform duration-300 ease-in-out hover:translate-x-2 hover:text-blue-600"
          onClick={() => { toggleSection("learn"); setActiveSection("Learn"); }}>
          📘 Learn <span>{openSection === "learn" ? "▾" : "▸"}</span>
        </p>
        {openSection === "learn" && (
          <ul className="ml-4 mt-2 space-y-1">
            <li onClick={() => setActiveSection("Basics")}>🔤 Basics</li>
            <li onClick={() => setActiveSection("Advanced")}>🚀 Advanced</li>
            <li onClick={() => setActiveSection("Explainers")}>📝 Explainers</li>
            <li onClick={() => setActiveSection("Articles")}>📄 Articles</li>
          </ul>
        )}

        {/* Updates */}
        <p className="menu-title cursor-pointer flex justify-between items-center font-semibold mt-4 transform transition-transform duration-300 ease-in-out hover:translate-x-2 hover:text-blue-600"
          onClick={() => { toggleSection("updates"); setActiveSection("Updates"); }}>
          🔔 Updates <span>{openSection === "updates" ? "▾" : "▸"}</span>
        </p>
        {openSection === "updates" && (
          <ul className="ml-4 mt-2 space-y-1">
            <li onClick={() => setActiveSection("DailySnapshot")}>📅 Daily Snapshot</li>
            <li onClick={() => setActiveSection("WeeklyOutlook")}>📆 Weekly Outlook</li>
            <li onClick={() => setActiveSection("BreakingNews")}>📰 Breaking News</li>
            <li onClick={() => setActiveSection("SectorFocus")}>🏭 Sector Focus</li>
          </ul>
        )}

        {/* Plans */}
        <p className="menu-title cursor-pointer flex justify-between items-center font-semibold mt-4 transform transition-transform duration-300 ease-in-out hover:translate-x-2 hover:text-blue-600"
          onClick={() => { toggleSection("plans"); setActiveSection("Plans"); }}>
          💰 Plans <span>{openSection === "plans" ? "▾" : "▸"}</span>
        </p>
        {openSection === "plans" && (
          <ul className="ml-4 mt-2 space-y-1">
            <li onClick={() => setActiveSection("FreePlan")}>🆓 Free</li>
            <li onClick={() => setActiveSection("PremiumPlan")}>💎 Premium</li>
            <li onClick={() => setActiveSection("ProPlan")}>⚡ Pro</li>
            <li onClick={() => setActiveSection("ElitePlan")}>👑 Elite</li>
          </ul>
        )}

        {/* Algo */}
        <p className="menu-title cursor-pointer flex justify-between items-center font-semibold mt-4 transform transition-transform duration-300 ease-in-out hover:translate-x-2 hover:text-green-600"
          onClick={() => { toggleSection("algo"); setActiveSection("Algo"); }}>
          🤖 Algo <span>{openSection === "algo" ? "▾" : "▸"}</span>
        </p>
        {openSection === "algo" && (
          <ul className="ml-4 mt-2 space-y-1">
            <li onClick={() => setActiveSection("AlgoPricing")}>💰 Algo Plans</li>
            <li onClick={() => setActiveSection("MomentumTracker")}>📈 Momentum Tracker</li>
            <li onClick={() => setActiveSection("ValueScreener")}>💹 Value Screener</li>
            <li onClick={() => setActiveSection("VolatilityGuard")}>🛡️ Volatility Guard</li>
            <li onClick={() => setActiveSection("CustomModels")}>⚙️ Custom Models</li>
          </ul>
        )}
      </nav>
    </aside>
  );
}
