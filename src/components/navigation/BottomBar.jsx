import * as React from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { AppBar } from "@mui/material";
import { AccountCircle, History, Home } from "@mui/icons-material";

export default function BottomBar({value, onChange}) {
 

  return (
    <AppBar
      position="sticky"
      sx={{
        top: "auto",
        bottom: 0,
        width: 450,
        margin: "auto",
        backgroundColor: "white",
        borderRadius: 5,
      }}
    >
      <Box sx={{ width: 450 }}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(e, tab)=>onChange(tab)}
        >
          <BottomNavigationAction label="Dashboard" icon={<Home />} />
          <BottomNavigationAction label="Akun" icon={<AccountCircle />} />
          <BottomNavigationAction label="History" icon={<History />} />
        </BottomNavigation>
      </Box>
    </AppBar>
  );
}
