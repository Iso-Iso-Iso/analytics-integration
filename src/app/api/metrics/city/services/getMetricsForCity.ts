import { googleApiClient } from "@/service/google-analytics/googleApiClient";

export const getMetricsForCity = async (daysAgo: number | string = 7) =>
  googleApiClient.runReport({
    property: `properties/${process.env.PROPERTY_ID}`,
    dimensions: [
      {
        name: "city",
      },
    ],
    metrics: [
      {
        name: "activeUsers",
      },
    ],
    dateRanges: [
      {
        startDate: `${daysAgo}daysAgo`,
        endDate: "yesterday",
      },
    ],
  });
