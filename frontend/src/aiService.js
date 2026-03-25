// ─── Nextgen ShareMarket & AI — AI Service ───────────────────────────────────
// All API calls go to the FastAPI backend (localhost:8000)
// The backend handles Anthropic Claude calls server-side

const BASE = "http://localhost:8000";

async function get(path) {
  const res = await fetch(`${BASE}${path}`);
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

async function post(path, body) {
  const res = await fetch(`${BASE}${path}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
  if (!res.ok) throw new Error(`API error ${res.status}`);
  return res.json();
}

// Dashboard
export async function fetchDashboardStats() { return get("/stats"); }
export async function fetchFeaturedTip() { return get("/featured-tip"); }
export async function fetchTrialAdvisory() { return get("/trial"); }

// Advisory
export async function fetchDailyTips() { return get("/daily-tips"); }
export async function fetchIPOAnalysis(ipoName) {
  const data = await post("/ipo-analysis", { ipo_name: ipoName });
  return data.analysis;
}
export async function fetchLongTermStrategy(strategy) {
  const data = await post("/long-term-strategy", { strategy });
  return data.analysis;
}
export async function fetchAlerts() { return get("/alerts"); }

// Accuracy
export async function fetchAccuracyStats() { return get("/accuracy-stats"); }

// Forecasts
export async function fetchForecastCalculation(amount, years, riskLevel) {
  return post("/forecast-calculate", {
    amount: parseFloat(amount),
    years: parseInt(years),
    risk_level: riskLevel,
  });
}
export async function fetchRiskSimulation(portfolio) {
  return post("/risk-simulation", { portfolio_type: portfolio });
}

// Learn
export async function fetchLearnContent(topic) {
  const data = await post("/learn-content", { topic });
  return data.content;
}
export async function generateArticle(topic) {
  const data = await post("/generate-article", { topic });
  return data.article;
}

// Updates
export async function fetchDailySnapshot() { return get("/daily-snapshot"); }
export async function fetchWeeklyOutlook() { return get("/weekly-outlook"); }
export async function fetchBreakingNews() { return get("/breaking-news"); }
export async function fetchSectorFocus() { return get("/sector-focus"); }

// Algo
export async function fetchMomentumData() { return get("/momentum"); }
export async function fetchValueScreener(filters) {
  return post("/value-screener", { pe: filters.pe, market_cap: filters.cap, dividend: filters.div });
}
export async function fetchVolatilityData() { return get("/volatility"); }
export async function buildCustomModel(modelType, dataset) {
  const data = await post("/custom-model", { model_type: modelType, dataset });
  return data.description;
}

// Community
export async function fetchSentimentData() { return get("/sentiment"); }

// Chatbot
export async function chatWithAI(section, userMessage, history = []) {
  const data = await post("/chat", { section, message: userMessage, history });
  return data.reply;
}
