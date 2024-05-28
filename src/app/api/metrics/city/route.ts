import { getMetricsForCity } from "@/app/api/metrics/city/services/getMetricsForCity";
import { google } from "@google-analytics/data/build/protos/protos";
import IRunReportResponse = google.analytics.data.v1beta.IRunReportResponse;
import { NextRequest } from "next/server";

const getLabelsForBarChart = (metrics: IRunReportResponse) =>
  metrics?.rows
    ? metrics.rows.map((item) => item?.dimensionValues?.[0]?.value)
    : [];

const getData = (metrics: IRunReportResponse) =>
  metrics?.rows
    ? metrics.rows.map((item) => {
        const value = item?.metricValues?.[0].value;
        return value ? +value : 0;
      })
    : [];

const getDateRange = (searchParams: URLSearchParams) =>
  searchParams.get("date") || 7;

export async function GET(request: NextRequest) {
  const date = getDateRange(request.nextUrl.searchParams);

  const metrics = await getMetricsForCity(date);

  const labels = getLabelsForBarChart(metrics[0]);
  const datasetData = getData(metrics[0]);

  return Response.json({ labels, datasetData });
}
