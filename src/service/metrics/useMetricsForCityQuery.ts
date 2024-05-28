import { useQuery } from "@tanstack/react-query";
import { baseApi } from "@/service/baseApi";
import { AxiosResponse } from "axios";

const getMetrics = ({ date }: any) =>
  baseApi.get(`/api/metrics/city?date=${date}`);
const getTotalMetricKeys = ({ date, dimension }: any) => ["metricsCity", date];

export const useMetricsForCityQuery = ({ date, dimension }: any) =>
  useQuery({
    queryFn: () => getMetrics({ date, dimension }),
    queryKey: getTotalMetricKeys({ date, dimension }),
    select: (data) => data.data,
    placeholderData: { data: {} } as AxiosResponse,
  });
