import './Welcomestyles.css';

export default function Welcome() {
  return (
    <div className="min-h-screen p-10">
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
        <div className="compliance-box hover-animate infinite-slide">
          <h2 className="compliance-header">📜 Regulatory Commitment</h2>
          <p className="compliance-text">
            Nextgen ShareMarket & AI is fully aligned with SEBI regulations to ensure your investment journey remains safe and compliant.
            Every advisory insight is designed for registered users with a valid DEMAT account, protecting you from unauthorized practices.
            We continuously monitor regulatory updates so you can trust that our AI guidance is always current and reliable.
          </p>
        </div>
        <div className="compliance-box hover-animate infinite-slide">
          <h2 className="compliance-header">⚖️ Legal Disclaimer</h2>
          <p className="compliance-text">
            Our platform provides AI-generated insights to help you make smarter financial decisions.
            These are AI recommendations, not instructions — Nextgen ShareMarket & AI is not a broker-dealer or financial institution.
            We encourage you to consult SEBI-registered advisors before executing trades, ensuring that your choices are legally sound and tailored to your personal circumstances.
          </p>
        </div>
        <div className="compliance-box hover-animate infinite-slide">
          <h2 className="compliance-header">🛡️ Risk Awareness & Safety</h2>
          <p className="compliance-text">
            Investing always carries risk, and our AI models are built to highlight potential downsides before they impact your portfolio.
            We simulate market scenarios, identify volatility in mid-cap and small-cap stocks, and recommend safer alternatives.
            Use Nextgen AI insights responsibly, balancing opportunity with caution, and always cross-check with SEBI guidelines for added protection.
          </p>
        </div>
        <div className="compliance-box hover-animate infinite-slide">
          <h2 className="compliance-header">🌐 Transparency & Trust</h2>
          <p className="compliance-text">
            At Nextgen ShareMarket & AI, transparency isn't just a principle — it's our promise.
            We clearly explain how our AI generates insights, avoid hidden agendas, and never request sensitive brokerage details.
            Our mission is to empower you with ethical, SEBI-compliant AI guidance that builds long-term trust.
            Every recommendation is backed by data, clarity, and a commitment to your financial well-being.
          </p>
        </div>
      </div>
    </div>
  );
}
