import React, { useCallback } from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useTitle } from "ahooks";
import { useNavigate } from "react-router-dom";

function NaverContainer() {
  useTitle("네이버 | 홈");
  const navigate = useNavigate();

  const onGoBackClick = useCallback(() => {
    navigate("/home");
  }, []);

  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Typography>Naver</Typography>
    </Box>
  );
}
export default NaverContainer;
