"use client";
import React, { FC, PropsWithChildren } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  LineElement,
  BarController,
  BarElement,
} from "chart.js";
import { QueryClient } from "@tanstack/query-core";
import { QueryClientProvider } from "@tanstack/react-query";

// TODO: move in useEffect
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineController,
  LineElement,
  BarController,
  BarElement
);

const queryClient = new QueryClient();

const MainLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <AntdRegistry>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </AntdRegistry>
  );
};

export default MainLayout;
