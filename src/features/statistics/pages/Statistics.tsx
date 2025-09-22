import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);


const Statistics = () => {
  const data = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Stats",
        data: [500, 700, 900, 1200, 1300, 1800, 2000, 1200, 2700, 2000, 3200, 3500],
        borderColor: "rgb(37, 99, 235)",
        backgroundColor: "rgba(37, 99, 235, 0.2)",
        tension: 0.4,
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        labels: {
          color: "#374151",
        },
      },
      title: {
        display: false,
      },
    },
    scales: {
      x: {
        ticks: { color: "#6B7280" },
      },
      y: {
        ticks: { color: "#6B7280" },
      },
    },
  };
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
          <span className="text-sm text-gray-500">Users</span>
          <span className="text-2xl font-bold text-blue-600 mt-2">1,245</span>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
          <span className="text-sm text-gray-500">Revenue</span>
          <span className="text-2xl font-bold text-green-600 mt-2">$8,540</span>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
          <span className="text-sm text-gray-500">Orders</span>
          <span className="text-2xl font-bold text-purple-600 mt-2">325</span>
        </div>

        <div className="bg-white rounded-2xl shadow p-6 flex flex-col">
          <span className="text-sm text-gray-500">Growth</span>
          <span className="text-2xl font-bold text-red-600 mt-2">+12.4%</span>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow p-6">
        <h2 className="text-lg font-semibold text-gray-700 mb-4">Monthly Overview</h2>
        <div className="h-64">
          <Line data={data} options={options}/>
        </div>
      </div>
    </div>
  );
};

export default Statistics;
