import React from "react";
import Chart from 'react-apexcharts'

var options = {
  series: [44, 55, 13, 43, 22],
  labels: ['Expense', 'Income',],
  chart: {
    width: 380,
    type: "pie",
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

export default function ChartSummary({expense,income}) {
  return (
    <Chart
      options={options}
      series={[expense,income]}
      type="pie"
      width={"100%"}
      height={"100%"}
    />
  );
}
