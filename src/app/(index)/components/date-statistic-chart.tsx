"use client";
import React, { FC } from "react";
import { Line } from "react-chartjs-2";
import { useMetricsForCityQuery } from "@/service/metrics/useMetricsForCityQuery";
import { useMetricsForDateQuery } from "@/service/metrics/useMetricsForDateQuery";
const labels = ["aw", "22", "33", "24", " 242", "24", "25"];

const createLinearChart = ({ labels, datasetData }: any) => ({
  labels: labels,
  datasets: [
    {
      label: "My First Dataset",
      data: datasetData,
      fill: false,
      borderColor: "rgb(75, 192, 192)",
      tension: 0.1,
    },
  ],
});

type GlobalStatisticChartProps = {
  date: number;
};

const DateStatisticChart: FC<GlobalStatisticChartProps> = ({ date }) => {
  const { data: chartConfig } = useMetricsForDateQuery({
    date,
    dimension: "date",
  });

  const data = createLinearChart(chartConfig);

  return (
    <div style={{ height: 800 }}>
      <Line data={data}></Line>
    </div>
  );
};

export default DateStatisticChart;
