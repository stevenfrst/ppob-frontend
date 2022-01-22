import { useState } from "react";
import {  useNavigate } from "react-router-dom";

import { AppBar, Box, Toolbar } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import { AccountCircle, History, Home } from "@mui/icons-material";

const BottomBar = (props) => {
  const {currentPage} = props
  const [currentButton, setCurrentButton] = useState(currentPage);
  
  const navigate = useNavigate()
  const changeColorNav = (id) => {
    setCurrentButton(id);
    if(id===1){
      navigate("/")
    } else if(id===2){
      navigate("/user")
    }
  };

  return (
    <AppBar
      sx={(theme) => ({
        position: "fixed",
        top: "auto",
        bottom: 0,
        right: 0,
        left: 0,
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
        <IconButton
          sx={
            currentButton === 1
              ? { display: "block", color: "#113CFC" }
              : { display: "block", color: "#7D7D7D" }
          }
          onClick={() => changeColorNav(1)}
        >
          <Home />
          <div style={{ fontSize: "10px" }}>Dashboard</div>
        </IconButton>

        <IconButton
          sx={
            currentButton === 2
              ? {
                  display: "block",
                  color: "#113CFC",
                  position: "absolute",
                  zIndex: 1,

                  left: 0,
                  right: 0,
                  margin: "0 auto",
                }
              : {
                  display: "block",
                  color: "#7D7D7D",
                  position: "absolute",
                  zIndex: 1,

                  left: 0,
                  right: 0,
                  margin: "0 auto",
                }
          }
          onClick={() => changeColorNav(2)}
        >
          <AccountCircle />
          <div style={{ fontSize: "10px" }}>Dashboard</div>
        </IconButton>

        <Box sx={{ flexGrow: 1 }} />
        <IconButton
          color="inherit"
          sx={
            currentButton === 3
              ? { display: "block", color: "#113CFC" }
              : { display: "block", color: "#7D7D7D" }
          }
          onClick={() => changeColorNav(3)}
        >
          <History />
          <div style={{ fontSize: "10px" }}>History</div>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default BottomBar;
