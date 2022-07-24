import React, { useCallback, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { InputLabel, TextField } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { useTitle } from "ahooks";
import DatePicker from "react-date-picker";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../store";
import {
  naverSearchTrendSelector,
  updateEndDate,
  updateStartDate,
} from "../../../store/naver/searchTrend";
import { dateToString } from "../../../common/utils";
import { NaverSearchRequestType } from "../../../api/naver";
import FormInputText from "../../common/FormInputText";
import { FormInputDate } from "../../common/FormInputDate";
import { FormInputDropdown } from "../../common/FormInputDropdown";

const options = [
  {
    label: "일간",
    value: "day",
  },
  {
    label: "주간",
    value: "week",
  },
  {
    label: "월간",
    value: "month",
  },
];

function SearchTrend() {
  useTitle("네이버 | 검색 트렌드");
  const dispatch = useDispatch<AppDispatch>();
  const { register, handleSubmit, reset, control } = useForm();
  const { data, loading } = useSelector(naverSearchTrendSelector);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [period, setPeriod] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setPeriod(event.target.value as string);
  };
  const onStartDateChange = useCallback(
    (value: Date) => {
      dispatch(updateStartDate(dateToString(value)));
      setStartDate(value);
    },
    [startDate]
  );
  const onEndDateChange = useCallback(
    (value: Date) => {
      dispatch(updateEndDate(dateToString(value)));
      setEndDate(value);
    },
    [endDate]
  );
  const onSubmit = useCallback((data: any) => {
    console.log(data);
  }, []);

  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Typography>Naver-Search-Trend</Typography>
      <Box
        component="form"
        sx={{
          "& > :not(style)": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <form>
          <FormInputDate name="startDate" control={control} label="startDate" />
          <FormInputDate name="endDate" control={control} label="endDate" />
          {/*<DatePicker onChange={onStartDateChange} value={startDate} required />*/}
          {/*<DatePicker onChange={onEndDateChange} value={endDate} required />*/}
          {/*<FormControl fullWidth>*/}
          {/*  <InputLabel id="demo-simple-select-label">구간 단위</InputLabel>*/}
          {/*  <Select*/}
          {/*    labelId="demo-simple-select-label"*/}
          {/*    id="period"*/}
          {/*    value={period}*/}
          {/*    label="date-period"*/}
          {/*    onChange={handleChange}*/}
          {/*  >*/}
          {/*    <MenuItem value="date">일간</MenuItem>*/}
          {/*    <MenuItem value="week">주간</MenuItem>*/}
          {/*    <MenuItem value="month">월간</MenuItem>*/}
          {/*  </Select>*/}
          {/*</FormControl>*/}
          <FormInputDropdown
            name="timeUnits"
            control={control}
            options={options}
          />
          <FormInputText name="groupName" control={control} label="그룹 이름" />
          <FormInputText name="keyword" control={control} label="키워드" />
          <Stack direction="row" spacing={2}>
            <Button
              type="submit"
              variant="contained"
              onClick={handleSubmit(onSubmit)}
            >
              분석
            </Button>
          </Stack>
        </form>
      </Box>
    </Box>
  );
}
export default SearchTrend;
