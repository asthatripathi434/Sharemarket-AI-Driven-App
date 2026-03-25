import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend } from "chart.js";
import "./MonthlyChart.css";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement, Tooltip, Legend);

export default function MonthlyChart({ stats }) {
  const monthly = stats?.monthlyData || [
    {month:"Jan",success:82,failure:18,returns:12.5},{month:"Feb",success:79,failure:21,returns:11.8},
    {month:"Mar",success:85,failure:15,returns:13.2},{month:"Apr",success:83,failure:17,returns:12.9},
    {month:"May",success:80,failure:20,returns:11.5},{month:"Jun",success:84,failure:16,returns:13.0},
    {month:"Jul",success:86,failure:14,returns:14.1},{month:"Aug",success:81,failure:19,returns:12.7},
    {month:"Sep",success:83,failure:17,returns:13.3},{month:"Oct",success:82,failure:18,returns:12.8},
    {month:"Nov",success:84,failure:16,returns:13.5},{month:"Dec",success:85,failure:15,returns:14.0},
  ];
  const data = {
    labels: monthly.map(m => m.month),
    datasets: [
      { label:"Success Rate (%)", data: monthly.map(m=>m.success), borderColor:"#22c55e", backgroundColor:"rgba(34,197,94,0.2)", tension:0.4, fill:true },
      { label:"Failure Rate (%)", data: monthly.map(m=>m.failure), borderColor:"#ef4444", backgroundColor:"rgba(239,68,68,0.2)", tension:0.4, fill:true },
      { label:"Avg Returns (%)", data: monthly.map(m=>m.returns), borderColor:"#0ea5e9", backgroundColor:"rgba(14,165,233,0.2)", tension:0.4, fill:true },
    ],
  };
  return (
    <div className="monthly-container">
      <h2 className="monthly-heading">📈 Nextgen AI — Monthly Performance Chart</h2>
      <p className="monthly-text">Track AI Success, Failure, and Returns across months.</p>
      <div className="chart-box"><Line data={data} options={{ responsive:true, plugins:{ legend:{position:"top"} }, scales:{ y:{beginAtZero:true} } }} /></div>
    </div>
  );
}
