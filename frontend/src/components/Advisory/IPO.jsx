import { useState } from "react";
import "./IPO.css";

export default function IPO() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const ipoList = [
    {
      name: "TechNova Ltd",
      date: "Feb 2026",
      details: "AI-driven SaaS company focusing on enterprise automation.",
      sector: "Technology",
      priceBand: "₹450 - ₹500",
      lotSize: "30 shares",
      status: "Upcoming",
      color: "ipo-technova",
    },
    {
      name: "GreenEnergy Corp",
      date: "Mar 2026",
      details: "Renewable energy firm expanding into solar and wind projects.",
      sector: "Energy",
      priceBand: "₹300 - ₹340",
      lotSize: "40 shares",
      status: "Upcoming",
      color: "ipo-green",
    },
    {
      name: "FinTrust Bank",
      date: "Apr 2026",
      details: "Digital-first banking platform with strong retail presence.",
      sector: "Finance",
      priceBand: "₹120 - ₹150",
      lotSize: "100 shares",
      status: "Upcoming",
      color: "ipo-fintrust",
    },
    {
      name: "MediCare Plus",
      date: "May 2026",
      details: "Healthcare services provider expanding into telemedicine.",
      sector: "Healthcare",
      priceBand: "₹600 - ₹650",
      lotSize: "25 shares",
      status: "Upcoming",
      color: "ipo-health",
    },
    {
      name: "AgriGrow Ltd",
      date: "Jun 2026",
      details: "Agri-tech startup revolutionizing supply chain and crop analytics.",
      sector: "Agriculture",
      priceBand: "₹200 - ₹240",
      lotSize: "50 shares",
      status: "Upcoming",
      color: "ipo-agri",
    },
    {
      name: "EduSmart Systems",
      date: "Jul 2026",
      details: "EdTech platform offering AI-powered learning solutions.",
      sector: "Education",
      priceBand: "₹350 - ₹400",
      lotSize: "35 shares",
      status: "Upcoming",
      color: "ipo-edu",
    },
  ];

  return (
    <div className="ipo-container">
      <h2 className="ipo-heading">🆕 Upcoming IPOs</h2>
      <p className="ipo-text">Stay ahead with details on upcoming market listings across sectors.</p>

      {ipoList.map((ipo, index) => (
        <div
          key={index}
          className={`accordion ${ipo.color}`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="accordion-header">
            <span>{ipo.name}</span>
            <div className="badge-container">
              <span className="badge">{ipo.status}</span>
              <span className={`arrow ${openIndex === index ? "open" : ""}`}>➤</span>
            </div>
          </div>
          {openIndex === index && (
            <div className="accordion-content">
              <p><strong>Date:</strong> {ipo.date}</p>
              <p><strong>Sector:</strong> {ipo.sector}</p>
              <p><strong>Price Band:</strong> {ipo.priceBand}</p>
              <p><strong>Lot Size:</strong> {ipo.lotSize}</p>
              <p>{ipo.details}</p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}