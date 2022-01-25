import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Avatar, IconButton, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Login } from "@mui/icons-material";
import { Box } from "@mui/material";

const Header = () => {
  const { currentUser } = useSelector((state) => state.login);
  const { userData } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const home = ()=>{
    navigate("/")
  }
  const user = ()=>{
    navigate("/user")
  }
  const imageLink =
    "https://avatars.dicebear.com/api/miniavs/" +
    userData?.data?.username +
    ".svg";

  return (
    <>
      <AppBar sx={{ backgroundColor: "white", position: "fixed" }}>
        <Toolbar sx={{ display: "flex", justifyContent: "center" }}>
          <Box
            sx={{
              width: 450,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box>
              <img
                src="https://app.stevenhoyo.co/static/component2.png"
                alt="phone logo"
                width="120px"
                onClick={()=>home()}
              />
            </Box>
            {currentUser?.data?.token ? (
              <Avatar
              onClick={()=>user()}
                alt="avatar"
                src={imageLink}
                sx={{ marginLeft: "auto" }}
              />
            ) : (
              <IconButton
                sx={{ marginLeft: "auto", color: "black" }}
                onClick={() => navigate("/login")}
              >
                <Login />
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
