"use client";
import React, { FC } from "react";
import { Radio } from "antd";
import { DATEPICKER_VALUES } from "@/app/(index)/constants/datepicker-values";
import { useController } from "react-hook-form";
import { Control } from "react-hook-form";

type DatepickerProps = {
  name: string;
  control: Control;
};

const Datepicker: FC<DatepickerProps> = ({ control, name }) => {
  const {
    field: { onChange, value },
  } = useController({ control, name });
  console.log(value);
  return (
    <Radio.Group
      onChange={onChange}
      value={value}
      options={DATEPICKER_VALUES}
    />
  );
};

export default Datepicker;
