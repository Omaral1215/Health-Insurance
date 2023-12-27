import React, { useRef, useEffect } from "react";
import Chart from "chart.js/auto";

const Charts = () => {
  const chartRef = useRef();

  useEffect(() => {
    const chartConfig = {
      type: "line",
      data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [
          {
            label: "Premium Amount (₹)",
            data: [10000, 15000, 12000, 18000, 20000, 25000],
            borderColor: "rgb(75, 192, 192)",
            fill: true,
            tension: 0.4,
          },
        ],
      },
    };

    const ctx = chartRef.current.getContext("2d");
    new Chart(ctx, chartConfig);
  }, []);

  return (
    <div className="mt-6 p-4 bg-white rounded shadow-md">
      <h2 className="text-xl font-semibold mb-2">Premium Amount Trends</h2>
      <canvas ref={chartRef}></canvas>
    </div>
  );
};

export default Charts;
