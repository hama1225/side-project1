import React from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-date-picker";
import { FormInputProps } from "./FormProps";
export const FormInputDate = ({ name, control, label }: FormInputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <DatePicker onChange={onChange} value={value} required />
      )}
    />
  );
};
