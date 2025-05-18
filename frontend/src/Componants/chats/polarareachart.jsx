import React from "react";
import { PolarArea } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  RadialLinearScale,
} from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend, RadialLinearScale);

const PolarAreaChart = ({ data }) => {
  // Group leads by source
  const grouped = data.reduce((acc, lead) => {
    const key = lead.source || "Unknown";
    acc[key] = (acc[key] || 0) + 1;
    return acc;
  }, {});
  console.log(grouped);
  const chartData = {
    labels: Object.keys(grouped),
    datasets: [
      {
        label: "Leads by Source",
        data: Object.values(grouped),
        backgroundColor: [
          "rgba(59, 130, 246, 0.6)", // Facebook - Blue
          "rgba(249, 115, 22, 0.6)", // Instagram - Orange
          "rgba(16, 185, 129, 0.6)", // Email - Emerald
          "rgba(147, 51, 234, 0.6)", // Google Ads - Purple
          "rgba(51, 65, 85, 0.6)", // Others - Gray
        ],
        borderColor: [
          "rgba(59, 130, 246, 1)",
          "rgba(249, 115, 22, 1)",
          "rgba(16, 185, 129, 1)",
          "rgba(147, 51, 234, 1)",
          "rgba(51, 65, 85, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Leads Distribution by Source",
      },
    },
  };
  return (
    <PolarArea
      data={chartData}
      options={options}
      style={{ width: "400px", height: "400px", margin: "auto" }}
    />
  );
};

export default PolarAreaChart;
