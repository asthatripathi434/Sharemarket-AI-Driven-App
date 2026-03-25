import { useState, useEffect } from "react";
import { fetchAlerts } from "../../aiService";
import "./Alerts.css";

export default function Alerts() {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchAlerts().then(setAlerts).catch(console.error).finally(() => setLoading(false));
  }, []);

  return (
    <div className="advisory-card alerts">
      <h3>🔔 AI Real-Time Alerts — Nextgen ShareMarket</h3>
      <p>Get AI-powered real-time alerts on portfolio changes and market events.</p>
      {loading ? (
        <p className="ai-loading">🤖 AI is fetching live market alerts...</p>
      ) : alerts.map((alert, i) => (
        <div key={i} className={`alert alert-${alert.type}`}>
          {alert.emoji} {alert.message}
          {alert.badge && <span className={`badge ${alert.severity}`}>{alert.badge}</span>}
          {alert.time && <span className="timestamp">{alert.time}</span>}
        </div>
      ))}
    </div>
  );
}
