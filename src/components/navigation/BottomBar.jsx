import * as React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";

import { AccountCircle, History, Home } from "@mui/icons-material";
import { Paper } from "@mui/material";
export default function BottomBar({value, onChange}) {
 

  return (
    
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0, width:460, margin:'auto'}} elevation={3}>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(e, tab)=>onChange(tab)}
          sx={{position:'sticky', bottom:0, }}
        >
          <BottomNavigationAction label="Dashboard" icon={<Home />} />
          <BottomNavigationAction label="Akun" icon={<AccountCircle />} />
          <BottomNavigationAction label="History" icon={<History />} />
        </BottomNavigation>
    </Paper>
 

  );
}
