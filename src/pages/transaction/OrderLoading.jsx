import { Box, Typography } from "@mui/material";

const OrderLoading = () => {
  return (
    <Box
      sx={{
        width: 450,

        margin: "auto",
        color: "#3F3D56",
        textAlign: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography variant="h4">
        Order <br />
        Kamu Sedang <br /> Diproses
      </Typography>
      <Box>
        <img
          alt="process"
          src="./assets/undraw_season_change_f99v.svg"
          style={{ height: 300, width: 300 }}
        />
      </Box>
    </Box>
  );
};

export default OrderLoading;
