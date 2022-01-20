import { Box, Typography } from "@mui/material";

const TransactionSuccess = () => {
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
        MID-GO-TEST-XXXXX <br /> Berhasil
      </Typography>
      <Box>
        <img
          alt="process"
          src="./assets/undraw_well_done_i2wr.svg"
          style={{ height: 300, width: 300 }}
        />
      </Box>
    </Box>
  );
};

export default TransactionSuccess;
