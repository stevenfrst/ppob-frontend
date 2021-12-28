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
        sx={(theme) => ({ backgroundColor: "#113CFC", position: "fixed" })}
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
            <Typography variant="h5">Hello</Typography>

            <IconButton sx={{ marginLeft: "auto", color: "white" }}>
              <Link to="login" style={{ color: "#FFF" }}>
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
