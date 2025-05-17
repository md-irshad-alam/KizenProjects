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
        backgroundColor: "#3b82f6",
      },
    ],
  };

  return <Bar data={chartData} />;
};

export default BarChart;
