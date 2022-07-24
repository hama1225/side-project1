import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";
import { Link } from "react-router-dom";

function HomeContainer() {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <h1>무슨 일을 하시겠어요?</h1>
      <ButtonGroup
        variant="contained"
        aria-label="outlined primary button group"
      >
        <Link to={"/naver/searchTrend"} style={{ textDecoration: "none" }}>
          <Button>검색어 트렌드</Button>
        </Link>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
    </Box>
  );
}
export default HomeContainer;
