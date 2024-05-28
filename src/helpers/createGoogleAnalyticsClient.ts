import "server-only";
import { BetaAnalyticsDataClient } from "@google-analytics/data";

export const createGoogleAnalyticsClient = () => {
  return new BetaAnalyticsDataClient();
};
