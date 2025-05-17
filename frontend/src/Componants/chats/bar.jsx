import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart = ({ data }) => {
  const sources = ["Facebook", "Instagram", "Google Ads", "Email"];
  const counts = sources.map(
    (source) => data.filter((l) => l.source === source).length
  );

  const chartData = {
    labels: sources,
    datasets: [
      {
        label: "Leads by Source",
        data: counts,
        backgroundColor: [
          "rgba(66, 153, 225, 0.7)", // Facebook - Sky Blue
          "rgba(134, 239, 172, 0.7)", // Instagram - Mint Green
          "rgba(251, 146, 60, 0.7)", // Google Ads - Amber
          "rgba(167, 137, 250, 0.7)", // Email - Violet
          "rgba(148, 163, 184, 0.7)", // Others - Gray
        ],

        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: false, // ✅ Hides the top label
      },
      legend: {
        // position: "bottom", // Optional: keep legend
        display: false,
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
