import React from "react";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

function HomeContainer() {
  return (
    <Box component="main" sx={{ p: 3 }}>
      <Toolbar />
      <Typography>Home</Typography>
    </Box>
  );
}
export default HomeContainer;
