import { Avatar, IconButton, Toolbar } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Login } from "@mui/icons-material";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const { currentUser } = useSelector((state) => state.login);
  const {userData} = useSelector((state)=>state.user)
  const imageLink = "https://avatars.dicebear.com/api/miniavs/"+userData?.data?.username+".svg";

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
            <Box>
              <img
                src="./assets/component2.png"
                alt="phone logo"
                width="120px"
              />
            </Box>
            {currentUser?.data?.token ? (
              <Avatar
                alt="avatar"
                src={imageLink}
                sx={{ marginLeft: "auto" }}
              />
            ) : (
              <IconButton sx={{ marginLeft: "auto", color: "white" }}>
                <Link to="login" style={{ color: "black" }}>
                  <Login />
                </Link>
              </IconButton>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Header;
