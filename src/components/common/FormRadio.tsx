import React from "react";
import { Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { Controller } from "react-hook-form";
import { FormOptionProps } from "./FormProps";

function FormInputRadio({ name, control, options }: FormOptionProps) {
  const generateRadioOptions = () => {
    return options.map((singleOption) => (
      <FormControlLabel
        value={singleOption.value}
        label={singleOption.label}
        control={<Radio />}
      />
    ));
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value } }) => (
        <RadioGroup value={value} onChange={onChange}>
          {generateRadioOptions()}
        </RadioGroup>
      )}
    />
  );
}
