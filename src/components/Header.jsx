import { IconButton, Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Login } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

import React from "react";
const Header = () => {
  return (
    <>
      <AppBar
        sx={(theme) => ({ backgroundColor: "white", position: "fixed" })}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={(theme) => ({
              display: "flex",
              alignItems: "center",
              width: 450,
              [theme.breakpoints.down("sm")]: {
                width: "100vw",
              },
            })}
          >
            <Box><img
            src="./assets/component2.png"
            alt="phone logo"
            width="120px"
          /></Box>

            <IconButton sx={{ marginLeft: "auto", color: "white" }}>
              <Link to="login" style={{ color: "black" }}>
                <Login />
              </Link>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
