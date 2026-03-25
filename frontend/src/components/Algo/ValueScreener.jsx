import { useState } from "react";
import { fetchValueScreener } from "../../aiService";
import "./ValueScreener.css";

export default function ValueScreener() {
  const [filters, setFilters] = useState({ pe: "25", cap: "Any", div: "Any" });
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const screen = () => {
    setLoading(true);
    fetchValueScreener(filters).then(setResults).catch(console.error).finally(() => setLoading(false));
  };

  const statusColor = s => s === "Undervalued" ? "#16a34a" : s === "Overvalued" ? "#dc2626" : "#d97706";
  const statusBg = s => s === "Undervalued" ? "#dcfce7" : s === "Overvalued" ? "#fee2e2" : "#fef3c7";

  return (
    <div className="screener-container">
      <header className="screener-header">
        <h2>📊 Nextgen AI — Value Screener</h2>
        <p>AI-powered filter to identify undervalued Indian stock opportunities</p>
      </header>

      <section className="screener-filters">
        <div className="filter">
          <label>P/E Ratio</label>
          <select value={filters.pe} onChange={e=>setFilters({...filters,pe:e.target.value})}>
            <option value="99">Any</option><option value="15">&lt; 15</option><option value="25">15 - 25</option><option value="9999">&gt; 25</option>
          </select>
        </div>
        <div className="filter">
          <label>Market Cap</label>
          <select value={filters.cap} onChange={e=>setFilters({...filters,cap:e.target.value})}>
            <option>Any</option><option>Small</option><option>Mid</option><option>Large</option>
          </select>
        </div>
        <div className="filter">
          <label>Dividend Yield</label>
          <select value={filters.div} onChange={e=>setFilters({...filters,div:e.target.value})}>
            <option>Any</option><option>&gt; 2%</option><option>&gt; 5%</option>
          </select>
        </div>
        <button className="apply-btn" onClick={screen} disabled={loading}>
          {loading ? "🤖 AI Screening..." : "🔍 Screen with AI"}
        </button>
      </section>

      {results.length > 0 && (
        <section className="screener-results">
          <table>
            <thead><tr><th>Company</th><th>P/E</th><th>P/B</th><th>Market Cap</th><th>Div Yield</th><th>AI Score</th><th>Status</th></tr></thead>
            <tbody>
              {results.map((s, i) => (
                <tr key={i} className={s.status?.toLowerCase().replace(" ","")}>
                  <td><strong>{s.company}</strong></td>
                  <td>{s.pe}</td>
                  <td>{s.pb}</td>
                  <td>{s.marketCap}</td>
                  <td>{s.dividendYield}</td>
                  <td><strong>{s.aiScore}/100</strong></td>
                  <td><span style={{padding:"3px 10px",borderRadius:"12px",fontSize:"11px",fontWeight:"700",background:statusBg(s.status),color:statusColor(s.status)}}>{s.status}</span></td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>
      )}

      <footer className="screener-footer">
        <p>✨ Nextgen AI Value Screener — smarter filters, sharper decisions for Indian markets.</p>
      </footer>
    </div>
  );
}
