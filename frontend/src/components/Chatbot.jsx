import { useState, useRef, useEffect } from "react";
import { chatWithAI } from "../aiService";
import "./Chatbot.css";

export default function Chatbot({ section }) {
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: `👋 Hi! I'm your Nextgen ShareMarket & AI assistant for the ${section} section. How can I help you today? Ask me anything about investments, market trends, or this section's features!`,
    },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const bottomRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  const sendMessage = async () => {
    const text = input.trim();
    if (!text || loading) return;
    const userMsg = { from: "user", text };
    const history = messages.slice(-10);
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setLoading(true);
    try {
      const reply = await chatWithAI(section, text, history);
      setMessages((prev) => [...prev, { from: "bot", text: reply }]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { from: "bot", text: "⚠️ Network error. Please check your connection and try again." },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKey = (e) => {
    if (e.key === "Enter" && !e.shiftKey) { e.preventDefault(); sendMessage(); }
  };

  const quickPrompts = {
    Dashboard: ["📊 Show market overview", "🏆 How do I earn rewards?", "📈 Best sector today?"],
    Advisory: ["💡 Today's best tip?", "🆕 Upcoming IPOs?", "📅 Long-term strategy?"],
    Accuracy: ["✅ What is the success rate?", "📊 Best performing sector?", "📈 Explain avg returns"],
    Forecasts: ["🧮 Calculate returns", "⚖️ What is my risk?", "⏳ Best time horizon?"],
    Learn: ["📘 What is a DEMAT account?", "📈 How does NIFTY work?", "🚀 Explain algo trading"],
    Updates: ["📅 Today snapshot?", "📰 Breaking news?", "🏭 Sector focus today?"],
    Plans: ["💎 Compare plans", "🆓 What is free?", "👑 Elite benefits?"],
    Algo: ["⚡ How does momentum work?", "📊 Screen undervalued stocks", "🛡️ Volatility protection?"],
  };

  const prompts = quickPrompts[section] || quickPrompts.Dashboard;

  return (
    <>
      <button className={`chatbot-fab ${open ? "open" : ""}`} onClick={() => setOpen(!open)}>
        {open ? "✕" : "🤖"}
        {!open && <span className="fab-label">AI Chat</span>}
      </button>

      {open && (
        <div className="chatbot-panel">
          <div className="chatbot-header">
            <div className="chatbot-header-left">
              <div className="chatbot-avatar">🤖</div>
              <div>
                <p className="chatbot-title">Nextgen AI Assistant</p>
                <p className="chatbot-subtitle">{section} • Powered by Claude</p>
              </div>
            </div>
            <button className="chatbot-close" onClick={() => setOpen(false)}>✕</button>
          </div>

          <div className="chatbot-messages">
            {messages.map((msg, i) => (
              <div key={i} className={`chat-bubble ${msg.from === "bot" ? "bot" : "user"}`}>
                {msg.from === "bot" && <span className="bubble-icon">🤖</span>}
                <div className="bubble-text">{msg.text}</div>
              </div>
            ))}
            {loading && (
              <div className="chat-bubble bot">
                <span className="bubble-icon">🤖</span>
                <div className="bubble-text typing">
                  <span></span><span></span><span></span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          <div className="quick-prompts">
            {prompts.map((p, i) => (
              <button key={i} className="quick-btn" onClick={() => setInput(p)}>
                {p}
              </button>
            ))}
          </div>

          <div className="chatbot-input-row">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKey}
              placeholder="Ask anything about the market..."
              className="chatbot-input"
              disabled={loading}
            />
            <button
              onClick={sendMessage}
              className={`chatbot-send ${loading ? "disabled" : ""}`}
              disabled={loading}
            >
              {loading ? "..." : "➤"}
            </button>
          </div>
          <p className="chatbot-disclaimer">⚠️ AI insights only. Not SEBI-registered advice.</p>
        </div>
      )}
    </>
  );
}
