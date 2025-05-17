import React, { useEffect, useRef } from "react";
import { Chart } from "chart.js";

const ChartWrapper = ({ children }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    return () => {
      // Destroy chart instance when component unmounts
      if (chartRef.current && Chart.instances[chartRef.current.id]) {
        Chart.instances[chartRef.current.id].destroy();
      }
    };
  }, []);

  // Create a wrapper canvas element with a unique ID
  const id = `chart-${Math.random().toString(36).substr(2, 9)}`;

  return (
    <div>
      <canvas
        ref={chartRef}
        id={id}
        style={{ display: "block", width: "100%" }}
      ></canvas>
      {React.cloneElement(children, { id })}
    </div>
  );
};

export default ChartWrapper;
