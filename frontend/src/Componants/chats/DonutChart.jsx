import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

ChartJS.register(ArcElement, Tooltip, Legend);

const DonutChart = ({ data }) => {
  const high = data.filter((l) => l.score > 80).length;
  const medium = data.filter((l) => l.score >= 50 && l.score <= 80).length;
  const low = data.filter((l) => l.score < 50).length;

  const chartData = {
    labels: ["High (>80)", "Medium (50–80)", "Low (<50)"],
    datasets: [
      {
        data: [high, medium, low],
        backgroundColor: ["#10b981", "#f59e0b", "#ef4444"],
      },
    ],
  };

  return <Doughnut data={chartData} />;
};

export default DonutChart;
