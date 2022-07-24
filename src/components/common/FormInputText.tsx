import React from "react";
import { Controller } from "react-hook-form";
import { TextField } from "@mui/material";
import { FormInputProps } from "./FormProps";

function FormInputText({ name, control, label }: FormInputProps) {
  return (
    <Controller
      name="groupName"
      control={control}
      render={({ field: { onChange, value } }) => (
        <TextField
          onChange={onChange}
          id={name}
          value={value}
          label={label}
          variant="outlined"
        />
      )}
    />
  );
}

export default FormInputText;
