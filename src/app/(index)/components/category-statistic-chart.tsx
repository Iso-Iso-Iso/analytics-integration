"use client";
import React, { FC } from "react";
import { Bar } from "react-chartjs-2";
import { useMetricsForCityQuery } from "@/service/metrics/useMetricsForCityQuery";

const createBarChart = ({ labels, datasetData }: any) => ({
  labels: labels,
  datasets: [
    {
      label: "Category stats",
      data: datasetData,
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(255, 159, 64, 0.2)",
        "rgba(255, 205, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(201, 203, 207, 0.2)",
      ],
      borderColor: [
        "rgb(255, 99, 132)",
        "rgb(255, 159, 64)",
        "rgb(255, 205, 86)",
        "rgb(75, 192, 192)",
        "rgb(54, 162, 235)",
        "rgb(153, 102, 255)",
        "rgb(201, 203, 207)",
      ],
      borderWidth: 1,
    },
  ],
});

type CategoryStatisticChartProps = {
  date: number;
};

const CategoryStatisticChart: FC<CategoryStatisticChartProps> = ({ date }) => {
  const {
    data: chartConfig,
    isLoading,
    isError,
  } = useMetricsForCityQuery({ date });

  const data = createBarChart(chartConfig);

  if (isLoading) {
    return "Loading";
  }

  if (isError) {
    return "Error";
  }

  return (
    <div style={{ height: 800 }}>
      <Bar data={data} />
    </div>
  );
};

export default CategoryStatisticChart;
