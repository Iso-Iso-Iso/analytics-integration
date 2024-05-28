import { google } from "@google-analytics/data/build/protos/protos";
import IRunReportResponse = google.analytics.data.v1beta.IRunReportResponse;
import { NextRequest } from "next/server";
import { getMetricsForDate } from "@/app/api/metrics/date/services/getMetricsForDate";

const getLabelsForBarChart = (metrics: IRunReportResponse) =>
  metrics?.rows
    ? metrics.rows.map((item) => {
        const value = item?.dimensionValues?.[0]?.value;
        return value
          ? `${value.slice(0, 4)}/${value.slice(4, 6)}/${value.slice(6, 8)}`
          : "N-A";
      })
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

  const metrics = await getMetricsForDate(date);

  const labels = getLabelsForBarChart(metrics[0]);
  const datasetData = getData(metrics[0]);

  return Response.json({ labels, datasetData, metrics });
}
