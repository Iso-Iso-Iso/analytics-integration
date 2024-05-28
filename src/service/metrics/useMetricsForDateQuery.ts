import { useQuery } from "@tanstack/react-query";
import { baseApi } from "@/service/baseApi";
import { AxiosResponse } from "axios";

const getMetrics = ({ date }: any) =>
  baseApi.get(`/api/metrics/date?date=${date}`);
const getTotalMetricKeys = ({ date }: any) => ["metricsDate", date];

export const useMetricsForDateQuery = ({ date }: any) =>
  useQuery({
    queryFn: () => getMetrics({ date }),
    queryKey: getTotalMetricKeys({ date }),
    select: (data) => data.data,
    placeholderData: { data: {} } as AxiosResponse,
  });
