"use client";
import DateStatisticChart from "@/app/(index)/components/date-statistic-chart";
import Datepicker from "@/app/(index)/components/datepicker";
import CategoryStatisticChart from "@/app/(index)/components/category-statistic-chart";
import { useForm } from "react-hook-form";
import { DATEPICKER_VALUES } from "@/app/(index)/constants/datepicker-values";

export default function Home() {
  const { control, watch } = useForm({
    defaultValues: {
      field: DATEPICKER_VALUES[0].value,
    },
  });

  const date = watch("field");

  return (
    <div style={{ padding: 20 }}>
      <Datepicker control={control} name="field" />
      <DateStatisticChart date={date} />
      <CategoryStatisticChart date={date} />
    </div>
  );
}
