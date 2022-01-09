import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import { AppBar } from '@mui/material';
import { AccountCircle, History, Home } from '@mui/icons-material';

export default function NewBottombar() {
  const [value, setValue] = React.useState(0);

  return (
    <AppBar
    position="sticky"
    sx={(theme) => ({
      top: "auto",
      bottom: 0,
      width: 450,
      margin: "auto",
      backgroundColor: "white",
      borderRadius: 5,
      [theme.breakpoints.down("sm")]: {
        width: "100vw",
      },
    })}
  >
    <Box sx={{ width: 450 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Dashboard" icon={<Home />} />
        <BottomNavigationAction label="Akun" icon={<AccountCircle />} />
        <BottomNavigationAction label="History" icon={<History />} />
      </BottomNavigation>
      
    </Box>
    </AppBar>
  );
}