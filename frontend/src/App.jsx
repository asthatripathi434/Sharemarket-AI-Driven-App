import { useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./components/Dashboard/Dashboard";
import Welcome from "./components/Dashboard/Welcome";
import Stats from "./components/Dashboard/Stats";
import Trial from "./components/Dashboard/Trial";
import FeaturedTip from "./components/Dashboard/FeaturedTip";
import Rewards from "./components/Dashboard/Rewards/Rewards";
import Badges from "./components/Dashboard/Rewards/Badges";
import Progress from "./components/Dashboard/Rewards/Progress";
import Challenges from "./components/Dashboard/Rewards/Challenges";
import Growth from "./components/Dashboard/Rewards/Growth";
import Community from "./components/Dashboard/Community/Community";
import Sentiment from "./components/Dashboard/Community/Sentiment";
import Leadership from "./components/Dashboard/Community/Leaderboard";
import Discussions from "./components/Dashboard/Community/Discussions";
import Polls from "./components/Dashboard/Community/Polls";
import Advisory from "./components/Advisory/Advisory";
import DailyTips from "./components/Advisory/DailyTips";
import LongTerm from "./components/Advisory/LongTerm";
import IPO from "./components/Advisory/IPO";
import Alerts from "./components/Advisory/Alerts";
import Accuracy from "./components/Accuracy/Accuracy";
import SuccessRate from "./components/Accuracy/SuccessRate";
import FailureRate from "./components/Accuracy/FailureRate";
import AvgReturns from "./components/Accuracy/AvgReturns";
import MonthlyChart from "./components/Accuracy/MonthlyChart";
import Forecasts from "./components/Forecasts/Forecasts";
import Calculator from "./components/Forecasts/Calculator";
import RiskSimulation from "./components/Forecasts/RiskSimulation";
import TimeHorizon from "./components/Forecasts/TimeHorizon";
import Comparison from "./components/Forecasts/Comparison";
import Learn from "./components/Learn/Learn";
import Basics from "./components/Learn/Basics";
import Advanced from "./components/Learn/Advanced";
import Explainers from "./components/Learn/Explainers";
import Articles from "./components/Learn/Articles";
import Updates from "./components/Updates/Updates";
import DailySnapshot from "./components/Updates/DailySnapshot";
import WeeklyOutlook from "./components/Updates/WeeklyOutlook";
import BreakingNews from "./components/Updates/BreakingNews";
import SectorFocus from "./components/Updates/SectorFocus";
import Plans from "./components/Plans/Plans";
import FreePlan from "./components/Plans/FreePlan";
import PremiumPlan from "./components/Plans/PremiumPlan";
import ProPlan from "./components/Plans/ProPlan";
import ElitePlan from "./components/Plans/ElitePlan";
import Algo from "./components/Algo/Algo";
import MomentumTracker from "./components/Algo/MomentumTracker";
import ValueScreener from "./components/Algo/ValueScreener";
import VolatilityGuard from "./components/Algo/VolatilityGuard";
import CustomModels from "./components/Algo/CustomModels";
import AlgoPricing from "./components/Algo/AlgoPricing";

export default function App() {
  const [activeSection, setActiveSection] = useState("Dashboard");

  return (
    <div className="app-container">
      <Sidebar setActiveSection={setActiveSection} />
      <main className="main">
        {activeSection === "Dashboard" && <Dashboard setActiveSection={setActiveSection} />}
        {activeSection === "Welcome" && <Welcome />}
        {activeSection === "Stats" && <Stats />}
        {activeSection === "Trial" && <Trial />}
        {activeSection === "FeaturedTip" && <FeaturedTip />}
        {activeSection === "Rewards" && <Rewards />}
        {activeSection === "Badges" && <Badges />}
        {activeSection === "Progress" && <Progress />}
        {activeSection === "Challenges" && <Challenges />}
        {activeSection === "Growth" && <Growth />}
        {activeSection === "Community" && <Community />}
        {activeSection === "Sentiment" && <Sentiment />}
        {activeSection === "Leaderboard" && <Leadership />}
        {activeSection === "Discussions" && <Discussions />}
        {activeSection === "Polls" && <Polls />}
        {activeSection === "Advisory" && <Advisory />}
        {activeSection === "DailyTips" && <DailyTips />}
        {activeSection === "LongTerm" && <LongTerm />}
        {activeSection === "IPO" && <IPO />}
        {activeSection === "Alerts" && <Alerts />}
        {activeSection === "Accuracy" && <Accuracy />}
        {activeSection === "SuccessRate" && <SuccessRate />}
        {activeSection === "FailureRate" && <FailureRate />}
        {activeSection === "AvgReturns" && <AvgReturns />}
        {activeSection === "MonthlyChart" && <MonthlyChart />}
        {activeSection === "Forecasts" && <Forecasts />}
        {activeSection === "Calculator" && <Calculator />}
        {activeSection === "RiskSimulation" && <RiskSimulation />}
        {activeSection === "TimeHorizon" && <TimeHorizon />}
        {activeSection === "Comparison" && <Comparison />}
        {activeSection === "Learn" && <Learn />}
        {activeSection === "Basics" && <Basics />}
        {activeSection === "Advanced" && <Advanced />}
        {activeSection === "Explainers" && <Explainers />}
        {activeSection === "Articles" && <Articles />}
        {activeSection === "Updates" && <Updates />}
        {activeSection === "DailySnapshot" && <DailySnapshot />}
        {activeSection === "WeeklyOutlook" && <WeeklyOutlook />}
        {activeSection === "BreakingNews" && <BreakingNews />}
        {activeSection === "SectorFocus" && <SectorFocus />}
        {activeSection === "Plans" && <Plans />}
        {activeSection === "FreePlan" && <FreePlan />}
        {activeSection === "PremiumPlan" && <PremiumPlan />}
        {activeSection === "ProPlan" && <ProPlan />}
        {activeSection === "ElitePlan" && <ElitePlan />}
        {activeSection === "Algo" && <Algo />}
        {activeSection === "MomentumTracker" && <MomentumTracker />}
        {activeSection === "ValueScreener" && <ValueScreener />}
        {activeSection === "VolatilityGuard" && <VolatilityGuard />}
        {activeSection === "CustomModels" && <CustomModels />}
        {activeSection === "AlgoPricing" && <AlgoPricing />}
      </main>
    </div>
  );
}
