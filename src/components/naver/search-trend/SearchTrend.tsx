import React, { useCallback, useState } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import IconButton from "@mui/material/IconButton";
import { useForm } from "react-hook-form";
import { useTitle } from "ahooks";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../store";
import { fetchGetNaverSearchTrend } from "../../../store/naver/searchTrend";
import { dateToString } from "../../../common/utils";
import { FormInputDate } from "../../common/FormInputDate";
import { FormInputDropdown } from "../../common/FormInputDropdown";
import GroupNameInput from "./GroupNameInput";

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

const defaultValues = {
  timeUnits: "",
  startDate: new Date(),
  endDate: new Date(),
};

function SearchTrend() {
  useTitle("네이버 | 검색 트렌드");
  const dispatch = useDispatch<AppDispatch>();
  const methods = useForm({ defaultValues });
  const { handleSubmit, reset, control } = methods;
  const [searchGroupNum, setSearchGroupNum] = useState(1);
  // const { data, loading } = useSelector(naverSearchTrendSelector);
  const onSubmit = useCallback(
    (data: any) => {
      data.startDate = dateToString(data.startDate);
      data.endDate = dateToString(data.endDate);
      let keywordGroups: { groupName: string; keywords: string[] }[] = [];
      for (const [key] of Object.entries(data)) {
        if (key.indexOf("groupName") !== -1) {
          const number = key.slice(9);
          const keywords: string[] = [];
          for (const [key] of Object.entries(data)) {
            if (key.indexOf(`keyword${number}`) !== -1) {
              keywords.push(data[key]);
            }
          }
          keywordGroups.push({
            groupName: data[key],
            keywords: keywords,
          });
        }
      }
      const result = {
        startDate: data.startDate,
        endDate: data.endDate,
        timeUnit: data.timeUnits,
        keywordGroups,
      };
      dispatch(fetchGetNaverSearchTrend(result));
    },
    [dispatch]
  );

  const addSearchGroup = useCallback(() => {
    setSearchGroupNum((prevState) => prevState + 1);
  }, []);

  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Typography>Naver-Search-Trend</Typography>
      <Box
        component="form"
        sx={{
          display: "block",
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            display: "flex",
            width: "auto",
            margin: "10px",
          }}
        >
          <FormInputDate name="startDate" control={control} label="startDate" />
          <FormInputDate name="endDate" control={control} label="endDate" />
          <FormInputDropdown
            name="timeUnits"
            control={control}
            options={options}
          />
        </Box>
        <Box>
          <IconButton aria-label="add" onClick={addSearchGroup}>
            <ControlPointIcon />
          </IconButton>
          {[...Array(searchGroupNum)].map((n, index) => {
            return (
              <GroupNameInput control={control} number={index} key={index} />
            );
          })}
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            type="submit"
            variant="contained"
            onClick={handleSubmit(onSubmit)}
          >
            분석
          </Button>
          <Button variant="contained" onClick={() => reset()}>
            리셋
          </Button>
        </Stack>
      </Box>
    </Box>
  );
}
export default SearchTrend;
