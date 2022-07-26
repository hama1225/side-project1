import FormInputText from "../../common/FormInputText";
import React, { useCallback, useState } from "react";
import { Control } from "react-hook-form";
import Box from "@mui/material/Box";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import IconButton from "@mui/material/IconButton";
import Divider from "@mui/material/Divider";

type GroupNameInputText = {
  control: Control<
    {
      timeUnits: string;
      startDate: Date;
      endDate: Date;
    },
    object
  >;
  number: number;
};

function GroupNameInput({ control, number }: GroupNameInputText) {
  const [keywordNum, setKeywordNum] = useState(1);

  const addKeywordInput = useCallback(() => {
    setKeywordNum((prevState) => prevState + 1);
  }, []);

  return (
    <Box sx={{ marginBottom: "20px" }}>
      <FormInputText
        name={`groupName${number}`}
        control={control}
        label="그룹 이름"
      />
      <IconButton aria-label="add" onClick={addKeywordInput}>
        <ControlPointIcon />
      </IconButton>
      <Box
        sx={{
          display: "inline-block",
        }}
      >
        {[...Array(keywordNum)].map((n, index) => {
          return (
            <FormInputText
              key={index}
              name={`keyword${number}-${index}`}
              control={control}
              label="키워드"
            />
          );
        })}
      </Box>
      <Divider />
    </Box>
  );
}

export default GroupNameInput;
