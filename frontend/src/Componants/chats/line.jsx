import React from "react";
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

const LineChart = ({ data, source }) => {
  const labels = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  // Filter data by source
  const filteredData = data.filter((lead) => lead.source === source);

  // Count leads by weekday
  const leadCounts = labels.map(
    (_, i) =>
      filteredData.filter((lead) => new Date(lead.createdAt).getDay() === i)
        .length
  );

  const chartData = {
    labels,
    datasets: [
      {
        label: `${source} Leads`,
        data: leadCounts,
        borderColor: "#3b82f6",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
      title: {
        display: true,
        text: `${source} Lead Trends`,
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
