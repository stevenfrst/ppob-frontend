import { AppBar, Box, Fab, styled, Toolbar } from "@mui/material";

import IconButton from "@mui/material/IconButton";

import { AccountCircle, History, Home } from "@mui/icons-material";
import { useState } from "react";
const Bottombar = () => {
  const [currentButton, setCurrentButton] = useState(null)
  console.log(currentButton)
  const changeColorNav =(id)=>{
    setCurrentButton(id)
  }
  const StyledFab = styled(Fab)({
    position: "absolute",
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: "0 auto",
    width: 80,
    height: 80,
  });

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
      <Toolbar>
        <IconButton sx={currentButton===1?{ display: "block", color: "#113CFC" }:{ display: "block", color: "#7D7D7D" }} onClick={()=>changeColorNav(1)} >
          <Home />
          <div style={{ fontSize: "10px" }}>Dashboard</div>
        </IconButton>

        <StyledFab color="white" sx={currentButton===2?{ display: "block", color: "#113CFC" }:{ display: "block", color: "#7D7D7D" }} onClick={()=>changeColorNav(2)}>
          <AccountCircle sx={{ height: 50, width: 50 }} />
          <div style={{ fontSize: "10px", textTransform: "capitalize" }}>
            Akun
          </div>
        </StyledFab>

        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" sx={currentButton===3?{ display: "block", color: "#113CFC" }:{ display: "block", color: "#7D7D7D" }} onClick={()=>changeColorNav(3)}>
          <History />
          <div style={{ fontSize: "10px" }}>History</div>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Bottombar;
