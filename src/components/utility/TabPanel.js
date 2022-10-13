import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import React from "react";


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div role="tabpanel" hidden={value !== index} {...other}>
      <Box sx={{ p: 3 }}>
        <Typography component={"div"}>{children}</Typography>
      </Box>
    </div>
  );
}

export default TabPanel;
