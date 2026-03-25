import os
import json
import re
from fastapi import FastAPI, HTTPException, Request
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse, StreamingResponse
from pydantic import BaseModel
from typing import Optional, List
from groq import Groq  # Groq client

# ── App Setup ────────────────────────────────────────────────────────────────
app = FastAPI(
    title="Nextgen ShareMarket & AI — Backend API",
    description="AI-powered stock market advisory and analytics for Indian markets",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://localhost:3000", "*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# ── Groq Client ──────────────────────────────────────────────────────────────
# Set GROQ_API_KEY in your environment or .env file
client = Groq(api_key=os.environ.get("GROQ_API_KEY", ""))

MODEL = "llama3-70b-8192"  # Example Groq-supported model

# ── Helper ───────────────────────────────────────────────────────────────────
def ask_groq(system: str, prompt: str, max_tokens: int = 1000) -> str:
    """Call Groq and return the text response."""
    response = client.chat.completions.create(
        model=MODEL,
        messages=[
            {"role": "system", "content": system},
            {"role": "user", "content": prompt}
        ],
        max_tokens=max_tokens,
    )
    return response.choices[0].message.content


def ask_groq_json(system: str, prompt: str, max_tokens: int = 1000) -> dict | list:
    """Call Groq expecting JSON. Strips markdown fences before parsing."""
    raw = ask_groq(system, prompt, max_tokens)

    # Strip ```json ... ``` fences if present
    clean = re.sub(r"```(?:json)?\s*", "", raw).strip().rstrip("```").strip()

    try:
        return json.loads(clean)
    except json.JSONDecodeError as e:
        raise ValueError(f"Groq response was not valid JSON: {e}\nRaw output: {raw}")


# ══════════════════════════════════════════════════════════════════════════════
# REQUEST / RESPONSE MODELS
# ══════════════════════════════════════════════════════════════════════════════
class ChatMessage(BaseModel):
    section: str
    message: str
    history: Optional[List[dict]] = []

class ForecastRequest(BaseModel):
    amount: float
    years: int
    risk_level: str  # Conservative | Moderate | Aggressive

class RiskRequest(BaseModel):
    portfolio_type: str  # Conservative | Balanced | Growth | Aggressive

class ScreenerRequest(BaseModel):
    pe: Optional[str] = "Any"
    market_cap: Optional[str] = "Any"
    dividend: Optional[str] = "Any"

class CustomModelRequest(BaseModel):
    model_type: str
    dataset: str

class IPORequest(BaseModel):
    ipo_name: str

class LongTermRequest(BaseModel):
    strategy: str

class ArticleRequest(BaseModel):
    topic: str

class LearnRequest(BaseModel):
    topic: str


# ══════════════════════════════════════════════════════════════════════════════
# ROOT
# ══════════════════════════════════════════════════════════════════════════════
@app.get("/")
def root():
    return {
        "app": "Nextgen ShareMarket & AI — Backend",
        "status": "running",
        "version": "1.0.0",
        "endpoints": [
            "/stats", "/featured-tip", "/trial",
            "/daily-tips", "/ipo-analysis", "/long-term-strategy", "/alerts",
            "/accuracy-stats",
            "/forecast-calculate", "/risk-simulation",
            "/daily-snapshot", "/weekly-outlook", "/breaking-news", "/sector-focus",
            "/momentum", "/value-screener", "/volatility", "/custom-model",
            "/sentiment",
            "/learn-content", "/generate-article",
            "/chat"
        ]
    }


# ══════════════════════════════════════════════════════════════════════════════
# DASHBOARD
# ══════════════════════════════════════════════════════════════════════════════
@app.get("/stats")
def get_stats():
    """AI-generated live Indian market dashboard stats."""
    raw = ask_groq_json(
        "You are a senior Indian stock market analyst at Nextgen ShareMarket & AI. Respond ONLY with valid JSON, no extra text.",
        """Generate realistic Indian stock market dashboard stats for today. Return JSON:
        {
          "nifty50": number,
          "niftyChange": number,
          "sensex": number,
          "sensexChange": number,
          "totalInvested": "string like ₹2,50,000",
          "currentValue": "string like ₹2,87,500",
          "gainLoss": "string like +15%",
          "successRate": number,
          "failureRate": number,
          "avgReturns": number,
          "topGainer": "CompanyName (+X%)",
          "topLoser": "CompanyName (-X%)",
          "volatilityIndex": number,
          "marketMood": "Bullish or Bearish or Neutral",
          "todayHighlight": "one sentence about today market",
          "portfolio_trend": [{"date":"Jan","value":100}, ...for 12 months],
          "sector_returns": [{"sector":"IT","returns":12}, ...for 6 sectors],
          "asset_allocation": [{"name":"Equity","value":60},{"name":"Debt","value":25},{"name":"Cash","value":15}]
        }""",
        1200
    )
    try:
        data = json.loads(raw)  # Parse string into dict
        return data
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Invalid JSON from AI: {e}")


@app.get("/featured-tip")
def get_featured_tip():
    """AI-generated featured stock tip for today."""
    data = ask_groq_json(
        "You are a SEBI-aligned AI advisory engine for Nextgen ShareMarket & AI. Respond ONLY with JSON.",
        """Give today's featured stock tip for Indian markets. Return JSON:
        {
          "stock": "Buy CompanyName (TICKER)",
          "sector": "Sector name",
          "confidence": 85,
          "risk": "Low",
          "timeframe": "Short Term (2-3 weeks)",
          "rationale": "2-sentence explanation",
          "target": "+12% in 3 weeks",
          "stoploss": "Exit below ₹X",
          "entryRange": "₹X - ₹Y"
        }"""
    )
    return data


@app.get("/trial")
def get_trial():
    """AI-generated trial advisory."""
    data = ask_groq_json(
        "You are an AI advisor at Nextgen ShareMarket & AI. Respond ONLY with JSON.",
        """Generate a trial advisory tip for an Indian investor. Return JSON:
        {
          "tip": "Buy/Sell/Hold CompanyName — reason",
          "confidence": 78,
          "risk": "Moderate",
          "rationale": "2-sentence rationale",
          "days_left": 5
        }"""
    )
    return data


# ══════════════════════════════════════════════════════════════════════════════
# ADVISORY
# ══════════════════════════════════════════════════════════════════════════════
@app.get("/daily-tips")
def get_daily_tips():
    """AI-generated 8 daily market tips."""
    data = ask_groq_json(
        "You are a senior market analyst at Nextgen ShareMarket & AI. Respond ONLY with JSON.",
        """Generate 8 daily market tips for Indian investors today. Return JSON array:
        [
          {
            "emoji": "📊",
            "category": "Market Trend",
            "tip": "tip text here",
            "type": "trend"
          }
        ]
        Types must be one of: trend, risk, diversify, global, psychology, sector, earnings, commodity, motivation""",
        900
    )
    return data


@app.post("/ipo-analysis")
def get_ipo_analysis(req: IPORequest):
    """AI analysis for a specific IPO."""
    text = ask_groq(
        "You are an IPO expert at Nextgen ShareMarket & AI.",
        f"""Provide a concise AI analysis for the upcoming IPO: {req.ipo_name}.
        Cover: subscription likelihood, GMP estimate, grey market outlook, risk factors,
        and recommendation (Apply/Avoid/Neutral). Keep it under 150 words.""",
        400
    )
    return {"ipo": req.ipo_name, "analysis": text}


@app.post("/long-term-strategy")
def get_long_term_strategy(req: LongTermRequest):
    """AI analysis for a long-term investment strategy."""
    text = ask_groq(
        "You are a long-term wealth advisor at Nextgen ShareMarket & AI.",
        f"""Explain the "{req.strategy}" long-term investment strategy for Indian investors in 2026.
        Include current market context, recommended allocation %, top 3 stock/fund picks,
        and expected CAGR. Keep it under 150 words.""",
        400
    )
    return {"strategy": req.strategy, "analysis": text}


@app.get("/alerts")
def get_alerts():
    """AI-generated real-time market alerts."""
    data = ask_groq_json(
        "You are a real-time market alert system for Nextgen ShareMarket & AI. Respond ONLY with JSON.",
        """Generate 8 real-time market alerts for Indian investors. Return JSON array:
        [
          {
            "type": "stock",
            "emoji": "🚨",
            "message": "alert message",
            "badge": "Urgent",
            "time": "10:15 AM",
            "severity": "urgent"
          }
        ]
        Types: stock, fund, compliance, portfolio, volatility, dividend, ipo, currency, global
        Severity: urgent, info, upcoming, global""",
        900
    )
    return data


# ══════════════════════════════════════════════════════════════════════════════
# ACCURACY
# ══════════════════════════════════════════════════════════════════════════════
@app.get("/accuracy-stats")
def get_accuracy_stats():
    """AI-generated accuracy performance metrics."""
    data = ask_groq_json(
        "You are a performance analytics system for Nextgen ShareMarket & AI. Respond ONLY with JSON.",
        """Generate AI prediction accuracy metrics for Indian stock market recommendations. Return JSON:
        {
          "overallSuccess": 82,
          "overallFailure": 18,
          "avgReturns": 12.5,
          "bestSector": "Banking",
          "worstSector": "FMCG",
          "sectorStats": [
            {"sector":"IT","success":84,"failure":16},
            {"sector":"Pharma","success":78,"failure":22},
            {"sector":"FMCG","success":72,"failure":28},
            {"sector":"Banking","success":88,"failure":12},
            {"sector":"Energy","success":80,"failure":20}
          ],
          "monthlyData": [
            {"month":"Jan","success":82,"failure":18,"returns":12.5},
            ...for all 12 months
          ],
          "sectorReturns": {"IT":15,"Pharma":10,"FMCG":8,"Banking":13,"Energy":11,"Healthcare":9}
        }""",
        1000
    )
    return data


# ══════════════════════════════════════════════════════════════════════════════
# FORECASTS
# ══════════════════════════════════════════════════════════════════════════════
@app.post("/forecast-calculate")
def forecast_calculate(req: ForecastRequest):
    """AI-powered investment forecast calculation."""
    data = ask_groq_json(
        "You are a financial forecast calculator at Nextgen ShareMarket & AI. Respond ONLY with JSON.",
        f"""Calculate investment forecast: ₹{req.amount:,.0f} invested for {req.years} years at {req.risk_level} risk.
        Return JSON:
        {{
          "cagr": number,
          "finalValue": "₹X,XX,XXX",
          "totalReturns": "+X%",
          "yearlyBreakdown": [{{"year":1,"value":110000}}, ...],
          "recommendation": "one paragraph advice",
          "bestCase": "₹X with X% CAGR",
          "worstCase": "₹X with X% CAGR"
        }}""",
        700
    )
    return data


@app.post("/risk-simulation")
def risk_simulation(req: RiskRequest):
    """AI-powered risk simulation for portfolio type."""
    data = ask_groq_json(
        "You are a risk simulation engine at Nextgen ShareMarket & AI. Respond ONLY with JSON.",
        f"""Simulate risk scenarios for portfolio type: {req.portfolio_type}.
        Return JSON:
        {{
          "overallRisk": "Moderate",
          "riskScore": 45,
          "scenarios": [
            {{"label":"Low Risk","probability":30,"impact":"Minor fluctuation","color":"green"}},
            {{"label":"Medium Risk","probability":45,"impact":"Moderate drawdown","color":"orange"}},
            {{"label":"High Risk","probability":20,"impact":"Significant loss possible","color":"red"}},
            {{"label":"Critical Risk","probability":5,"impact":"Portfolio at risk","color":"darkred"}}
          ],
          "recommendation": "paragraph advice",
          "maxDrawdown": "-15%",
          "sharpeRatio": 1.4
        }}""",
        700
    )
    return data


# ══════════════════════════════════════════════════════════════════════════════
# UPDATES
# ══════════════════════════════════════════════════════════════════════════════
@app.get("/daily-snapshot")
def get_daily_snapshot():
    """AI-generated daily market snapshot."""
    data = ask_groq_json(
        "You are a daily market snapshot generator for Nextgen ShareMarket & AI. Respond ONLY with JSON.",
        """Generate today's Indian stock market snapshot. Return JSON:
        {
          "successRate": 84,
          "failureRate": 16,
          "avgReturns": "+11.8%",
          "riskLevel": "Moderate",
          "niftyMood": "Bullish",
          "highlight": "one sentence about today",
          "topGainer": {"name":"Reliance Industries","change":"+3.2%"},
          "topLoser": {"name":"Zomato","change":"-2.1%"},
          "volume": "₹85,000 Cr",
          "advanceDecline": "1842/832"
        }""",
        700
    )
    return data


@app.get("/weekly-outlook")
def get_weekly_outlook():
    """AI-generated weekly market outlook."""
    data = ask_groq_json(
        "You are a weekly market analyst at Nextgen ShareMarket & AI. Respond ONLY with JSON.",
        """Generate this week's Indian market outlook. Return JSON:
        {
          "headline": "one sentence headline",
          "successRate": 81,
          "failureRate": 19,
          "returns": "+10.7%",
          "risk": "Moderate",
          "sectors": [
            {"name":"Technology","trend":"Strong Growth","icon":"💻"},
            {"name":"Energy","trend":"Stable","icon":"⚡"},
            {"name":"Finance","trend":"Volatile","icon":"💰"},
            {"name":"Healthcare","trend":"Improving","icon":"🏥"}
          ],
          "summary": "2-sentence summary",
          "keyEvents": ["Event 1","Event 2","Event 3"],
          "weeklyTrend": [
            {"day":"Mon","value":100},{"day":"Tue","value":102},
            {"day":"Wed","value":99},{"day":"Thu","value":105},{"day":"Fri","value":103}
          ]
        }""",
        800
    )
    return data


@app.get("/breaking-news")
def get_breaking_news():
    """AI-generated breaking financial news."""
    data = ask_groq_json(
        "You are a real-time financial news AI for Nextgen ShareMarket & AI. Respond ONLY with JSON.",
        """Generate 5 breaking Indian stock market news items. Return JSON:
        {
          "ticker": "running ticker text about markets",
          "headline": {"title":"Main headline","summary":"2 sentence summary"},
          "news": [
            {
              "sector": "Technology",
              "icon": "💻",
              "title": "news headline",
              "summary": "one sentence",
              "impact": "Positive"
            }
          ]
        }
        impact must be: Positive, Negative, or Neutral""",
        800
    )
    return data


@app.get("/sector-focus")
def get_sector_focus():
    """AI-generated sector performance analysis."""
    data = ask_groq_json(
        "You are a sector analysis AI for Nextgen ShareMarket & AI. Respond ONLY with JSON.",
        """Generate sector-wise performance analysis for Indian markets today. Return JSON:
        {
          "hotSector": "Technology",
          "sectors": [
            {
              "name": "Technology",
              "icon": "💻",
              "change": "+2.5%",
              "trend": "Strong Growth",
              "outlook": "Bullish on AI stocks",
              "topStock": "TCS (+3.1%)"
            }
          ],
          "summary": "2-3 sentence summary of overall sector outlook"
        }
        Include 6 sectors: Technology, Energy, Finance, Healthcare, FMCG, Auto""",
        800
    )
    return data


# ══════════════════════════════════════════════════════════════════════════════
# ALGO
# ══════════════════════════════════════════════════════════════════════════════
@app.get("/momentum")
def get_momentum():
    """AI-generated momentum tracker data."""
    data = ask_groq_json(
        "You are a momentum analysis AI for Nextgen ShareMarket & AI. Respond ONLY with JSON.",
        """Generate momentum tracker data for Indian markets. Return JSON:
        {
          "bullishStrength": "Strong",
          "bullishScore": 72,
          "bearishStrength": "Moderate",
          "bearishScore": 38,
          "neutralZone": "Stable",
          "overallMomentum": "Bullish Bias",
          "topMomentumStocks": [
            {"name":"Reliance","momentum":"Strong Bullish","change":"+2.8%"},
            {"name":"HDFC Bank","momentum":"Moderate Bullish","change":"+1.4%"},
            {"name":"Infosys","momentum":"Strong Bullish","change":"+3.1%"}
          ],
          "momentumTrend": [
            {"time":"9:30","value":50},{"time":"10:00","value":55},{"time":"10:30","value":60},
            {"time":"11:00","value":58},{"time":"11:30","value":63},{"time":"12:00","value":67},
            {"time":"12:30","value":65},{"time":"13:00","value":70}
          ],
          "recommendation": "one paragraph recommendation"
        }""",
        800
    )
    return data


@app.post("/value-screener")
def value_screener(req: ScreenerRequest):
    """AI-powered value stock screener."""
    data = ask_groq_json(
        "You are a value screener AI for Nextgen ShareMarket & AI. Respond ONLY with JSON.",
        f"""Screen undervalued Indian stocks with filters: PE<{req.pe}, Market Cap:{req.market_cap}, Dividend:{req.dividend}.
        Return JSON array of 5 Indian stocks:
        [
          {{
            "company": "Company Name (TICKER)",
            "pe": 12.4,
            "pb": 1.8,
            "marketCap": "Large",
            "dividendYield": "3.2%",
            "aiScore": 87,
            "status": "Undervalued"
          }}
        ]
        status must be: Undervalued, Fair Value, or Overvalued""",
        800
    )
    return data


@app.get("/volatility")
def get_volatility():
    """AI-generated volatility guard data."""
    data = ask_groq_json(
        "You are a volatility analysis AI for Nextgen ShareMarket & AI. Respond ONLY with JSON.",
        """Generate current volatility data for Indian markets. Return JSON:
        {
          "lowVolatility": 40,
          "mediumVolatility": 45,
          "highVolatility": 15,
          "overallStatus": "Moderate Risk",
          "vix": 14.8,
          "alerts": [
            {"level":"low","message":"Market is stable"},
            {"level":"medium","message":"Moderate risk detected in mid-caps"},
            {"level":"high","message":"High volatility in small-cap space"}
          ],
          "protectedStocks": [
            {"name":"Hindustan Unilever","volatility":"Very Low"},
            {"name":"ITC Limited","volatility":"Low"},
            {"name":"TCS","volatility":"Low"}
          ],
          "recommendation": "one paragraph protective strategy"
        }""",
        700
    )
    return data


@app.post("/custom-model")
def build_custom_model(req: CustomModelRequest):
    """AI explanation of a custom financial model."""
    text = ask_groq(
        "You are an AI model builder for Nextgen ShareMarket & AI.",
        f"""Describe the "{req.model_type}" custom AI model for Indian markets.
        Context: {req.dataset}.
        Cover: algorithm used, key inputs, expected accuracy, training data needed,
        and how to deploy it for Indian NSE/BSE markets.
        Keep it under 200 words.""",
        500
    )
    return {"model_type": req.model_type, "description": text}


# ══════════════════════════════════════════════════════════════════════════════
# COMMUNITY
# ══════════════════════════════════════════════════════════════════════════════
@app.get("/sentiment")
def get_sentiment():
    """AI-generated community sentiment data."""
    data = ask_groq_json(
        "You are a community sentiment analyzer for Nextgen ShareMarket & AI. Respond ONLY with JSON.",
        """Generate live market sentiment data for Indian investors. Return JSON:
        {
          "bullish": 65,
          "bearish": 25,
          "neutral": 10,
          "dominantMood": "Cautiously Bullish",
          "trendingTopics": ["NIFTY rally", "IT sector earnings", "RBI policy", "FII buying"],
          "fearGreedIndex": 62,
          "fearGreedLabel": "Greed"
        }"""
    )
    return data


# ══════════════════════════════════════════════════════════════════════════════
# LEARN
# ══════════════════════════════════════════════════════════════════════════════
@app.post("/learn-content")
def get_learn_content(req: LearnRequest):
    """AI-generated educational content for a topic."""
    text = ask_groq(
        "You are an expert financial educator at Nextgen ShareMarket & AI.",
        f"""Explain "{req.topic}" for Indian stock market investors in a clear, engaging way.
        Include: definition, how it works in the Indian context (NSE/BSE), a practical example
        with ₹ amounts, and one key takeaway. Keep it under 200 words.""",
        500
    )
    return {"topic": req.topic, "content": text}


@app.post("/generate-article")
def generate_article(req: ArticleRequest):
    """AI-generated financial article."""
    text = ask_groq(
        "You are a financial journalist at Nextgen ShareMarket & AI writing for Indian investors.",
        f"""Write a brief, insightful article about "{req.topic}" relevant to Indian markets in 2026.
        Include current data points, NSE/BSE context, and actionable insights.
        Keep it under 180 words.""",
        450
    )
    return {"topic": req.topic, "article": text}


# ══════════════════════════════════════════════════════════════════════════════
# CHATBOT  (section-aware, multi-turn)
# ══════════════════════════════════════════════════════════════════════════════
SECTION_SYSTEM_PROMPTS = {
    "Dashboard": """You are the Nextgen ShareMarket & AI Dashboard assistant. Help users understand their portfolio stats,
    market overview, rewards, and community features. Be concise, data-driven, and always reference Indian markets (NSE/BSE).
    You are not a SEBI-registered advisor — always add a brief disclaimer at the end.""",

    "Advisory": """You are the Nextgen ShareMarket & AI Advisory chatbot. Answer questions about investment strategies,
    IPOs, daily tips, long-term planning, and SEBI compliance for Indian investors.
    Be practical and cite real sectors. Not SEBI-registered — remind users to verify with a certified advisor.""",

    "Accuracy": """You are the Nextgen ShareMarket & AI Accuracy chatbot. Help users understand success rates,
    failure analysis, sector performance, and monthly charts.
    Explain what the numbers mean and how to interpret AI prediction accuracy for Indian markets.""",

    "Forecasts": """You are the Nextgen ShareMarket & AI Forecasts chatbot. Help users with investment calculators,
    risk simulations, time horizon planning, and strategy comparisons using Indian market data.
    Always caveat: past performance does not guarantee future results.""",

    "Learn": """You are the Nextgen ShareMarket & AI education chatbot. Teach concepts about the Indian stock market —
    from DEMAT basics to advanced algo trading. Use simple language with Indian examples (NSE, BSE, NIFTY, SENSEX).""",

    "Updates": """You are the Nextgen ShareMarket & AI market updates chatbot. Discuss daily snapshots, weekly outlooks,
    breaking news, and sector focus for Indian markets. Keep users informed about current trends.""",

    "Plans": """You are the Nextgen ShareMarket & AI subscription chatbot. Help users choose between Free, Pro,
    Premium, and Elite plans. Explain features, pricing, and benefits clearly. Assist with upgrade decisions.""",

    "Algo": """You are the Nextgen ShareMarket & AI Algo trading chatbot. Assist with momentum tracking, value screening,
    volatility guard, custom models, and algo subscription plans. Explain algorithmic concepts in accessible terms
    for Indian market investors.""",
}

@app.post("/chat")
def chat(req: ChatMessage):
    """Section-aware AI chatbot with conversation history."""
    system = SECTION_SYSTEM_PROMPTS.get(req.section, SECTION_SYSTEM_PROMPTS["Dashboard"])

    # Build message history
    messages = []
    for msg in (req.history or [])[-10:]:  # keep last 10 messages
        role = "user" if msg.get("from") == "user" else "assistant"
        messages.append({"role": role, "content": msg.get("text", "")})
    messages.append({"role": "user", "content": req.message})

    response = client.messages.create(
        model=MODEL,
        max_tokens=500,
        system=system,
        messages=messages
    )
    return {"reply": response.content[0].text}


# ══════════════════════════════════════════════════════════════════════════════
# HEALTH CHECK
# ══════════════════════════════════════════════════════════════════════════════
@app.get("/health")
def health():
    return {"status": "healthy", "service": "Nextgen ShareMarket & AI Backend"}


if __name__ == "__main__":
    import uvicorn
    uvicorn.run("main:app", host="0.0.0.0", port=8000, reload=True)
