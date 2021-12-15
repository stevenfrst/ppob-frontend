import { AppBar, Box, Fab, styled, Toolbar } from "@mui/material";

import IconButton from "@mui/material/IconButton";

import { AccountCircle, History, Home } from "@mui/icons-material";
const Bottombar = () => {
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
      color="primary"
      sx={{
        top: "auto",
        bottom: 0,
        width: 450,
        margin: "auto",
        backgroundColor: "white",
        borderRadius: 5,
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          sx={{ display: "block", color: "#7D7D7D" }}
        >
          <Home />
          <div style={{ fontSize: "10px" }}>Dashboard</div>
        </IconButton>

        <StyledFab
          color="white"
          aria-label="add"
          sx={{ display: "block", color: "#7D7D7D" }}
        >
          <AccountCircle sx={{ height: 50, width: 50 }} />
          <div style={{ fontSize: "10px", textTransform: "capitalize" }}>
            Akun
          </div>
        </StyledFab>

        <Box sx={{ flexGrow: 1 }} />
        <IconButton color="inherit" sx={{ display: "block", color: "#7D7D7D" }}>
          <History />
          <div style={{ fontSize: "10px" }}>History</div>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Bottombar;
