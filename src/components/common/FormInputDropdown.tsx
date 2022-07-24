import React from "react";
import { Select, InputLabel, MenuItem } from "@mui/material";

import { useFormContext, Controller } from "react-hook-form";
import { FormOptionProps } from "./FormProps";

export const FormInputDropdown = ({
  name,
  control,
  options,
}: FormOptionProps) => {
  const generateSelectOptions = () => {
    return options.map((option) => {
      return (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      );
    });
  };

  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value } }) => (
        <Select onChange={onChange} value={value}>
          {generateSelectOptions()}
        </Select>
      )}
    />
  );
};
