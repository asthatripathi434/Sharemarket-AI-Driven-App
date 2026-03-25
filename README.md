# Nextgen ShareMarket & AI 🤖📈
**Full-stack AI-powered Indian Stock Market Advisory Platform**

---

## 🏗️ Project Structure

```
nextgen-sharemarket-ai/
├── frontend/          ← React + Vite frontend
│   ├── src/
│   │   ├── aiService.js          ← All API calls to backend
│   │   ├── components/
│   │   │   ├── Chatbot.jsx       ← AI chatbot (every section)
│   │   │   ├── Dashboard/        ← Dashboard + Demat boxes
│   │   │   ├── Advisory/         ← AI tips, IPO, alerts
│   │   │   ├── Accuracy/         ← AI accuracy analytics
│   │   │   ├── Forecasts/        ← AI calculator, risk sim
│   │   │   ├── Learn/            ← AI-powered education
│   │   │   ├── Updates/          ← AI news & snapshots
│   │   │   ├── Plans/            ← Subscription plans
│   │   │   └── Algo/             ← AI algo trading tools
│   │   └── ...
│   ├── package.json
│   └── vite.config.js
│
└── backend/           ← Python FastAPI backend
    ├── main.py               ← All Claude API endpoints
    ├── requirements.txt
    └── .env.example
```

---

## ⚡ Quick Start

### Step 1: Get Anthropic API Key
1. Go to https://console.anthropic.com/
2. Create an account and generate an API key
3. Copy the key — you'll need it in Step 3

---

### Step 2: Setup Backend (Python)

```bash
cd backend

# Create virtual environment
python -m venv venv

# Activate it
# On Windows:
venv\Scripts\activate
# On Mac/Linux:
source venv/bin/activate

# Install dependencies
pip install -r requirements.txt

# Copy env file
cp .env.example .env
```

### Step 3: Add your API Key to `.env`
Open `backend/.env` and replace:
```
ANTHROPIC_API_KEY=your_anthropic_api_key_here
```
with your actual key:
```
ANTHROPIC_API_KEY=sk-ant-api03-xxxxxxxxxxxxx
```

### Step 4: Start the Backend
```bash
# Make sure you're in backend/ with venv active
python main.py
```
✅ Backend running at: **http://localhost:8000**
📖 API docs at: **http://localhost:8000/docs**

---

### Step 5: Setup Frontend (Node.js)

Open a **new terminal**:

```bash
cd frontend

# Install dependencies
npm install

# Start dev server
npm run dev
```
✅ Frontend running at: **http://localhost:5173**

---

## 🌐 Open in Browser

Go to **http://localhost:5173** — the full AI-powered platform is live!

---

## 🤖 AI Features (All Sections)

| Section | AI Features |
|---------|-------------|
| **Dashboard** | Live NIFTY/SENSEX stats, AI market mood, portfolio analysis |
| **Advisory** | Daily AI tips, IPO analysis, long-term strategies, alerts |
| **Accuracy** | AI success/failure rates, sector analytics, monthly charts |
| **Forecasts** | AI investment calculator, risk simulation, time horizon |
| **Learn** | Click-to-learn AI explainers, AI article generator |
| **Updates** | AI daily snapshot, weekly outlook, breaking news, sector focus |
| **Algo** | Momentum tracker, value screener, volatility guard, custom models |
| **Plans** | Free, Pro (₹999), Premium (₹1,999), Elite subscriptions |
| **All Sections** | 🤖 Floating AI chatbot with section-aware context |

---

## 🏦 Dashboard Features
- **Two Open Demat Account boxes** — blue-purple and teal gradient
- Live market ticker (NIFTY + SENSEX)
- AI-generated suggested strategy
- Risk-Aware Advisory AI card

---

## 📋 Backend API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/stats` | Dashboard market stats |
| GET | `/featured-tip` | Today's AI stock tip |
| GET | `/trial` | Trial advisory |
| GET | `/daily-tips` | 8 AI market tips |
| POST | `/ipo-analysis` | IPO AI analysis |
| POST | `/long-term-strategy` | Strategy analysis |
| GET | `/alerts` | Real-time alerts |
| GET | `/accuracy-stats` | AI accuracy metrics |
| POST | `/forecast-calculate` | Investment calculator |
| POST | `/risk-simulation` | Risk scenarios |
| GET | `/daily-snapshot` | Daily market snapshot |
| GET | `/weekly-outlook` | Weekly AI outlook |
| GET | `/breaking-news` | AI breaking news |
| GET | `/sector-focus` | Sector analysis |
| GET | `/momentum` | Momentum tracker |
| POST | `/value-screener` | Value stock screen |
| GET | `/volatility` | Volatility guard |
| POST | `/custom-model` | Custom AI model |
| GET | `/sentiment` | Community sentiment |
| POST | `/learn-content` | Educational content |
| POST | `/generate-article` | AI article writer |
| POST | `/chat` | Section chatbot |

---

## 🔧 Requirements

**Frontend:**
- Node.js 18+
- npm 9+

**Backend:**
- Python 3.10+
- Anthropic API key

---

## ⚠️ Disclaimer
Nextgen ShareMarket & AI provides AI-generated insights for informational purposes only.
This is not SEBI-registered financial advice. Always consult a certified financial advisor
before making investment decisions.

---

## 🏢 Company
**Nextgen ShareMarket & AI**
AI-Powered Trading Intelligence for Indian Markets
