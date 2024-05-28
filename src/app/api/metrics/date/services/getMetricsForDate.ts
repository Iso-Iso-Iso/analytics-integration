import { googleApiClient } from "@/service/google-analytics/googleApiClient";

export const getMetricsForDate = async (daysAgo: number | string = 7) => {
  const res = await googleApiClient.runReport({
    property: `properties/${process.env.PROPERTY_ID}`,
    dimensions: [
      {
        name: "date",
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

  res[0].rows = res[0].rows?.sort(
    (itemA, itemB) =>
      // @ts-ignore
      itemA.dimensionValues[0].value - itemB.dimensionValues[0].value
  );

  return res;
};
