import { IconButton, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { ArrowBack, Login } from "@mui/icons-material";
import { Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import React from "react";
const Header2 = () => {
  const navigate = useNavigate()
  return (
    <>
      <AppBar sx={{ backgroundColor: "white", position: "fixed" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: 450,
            }}
          >
            <IconButton sx={{ color: "black" }} onClick={()=>navigate(-1)}>
              <ArrowBack />
            </IconButton>

            <IconButton sx={{ marginLeft: "auto", color: "black" }} onClick={()=>navigate('/login')} >
              
                <Login />
           
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header2;
