import { Box, Fab, Typography } from "@mui/material";

const BottomContent = () => {
  return (
    <Box
      sx={(theme) => ({
        width: 450,
        height: 300,
        margin: "auto",
        backgroundColor: "#113CFC",
        marginTop: 3,
        display: "block",
        [theme.breakpoints.down("sm")]: {
          width: "100vw",
        },
      })}
    >
      <Box sx={{ marginLeft: "25px", paddingTop: 2, color: "white" }}>
        <Typography>Produk Teratas</Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "25px",
          marginRight: "25px",
          marginTop: "25px",
        }}
      >
        <Fab sx={{ width: 70, height: 70 }}></Fab>
        <Fab sx={{ width: 70, height: 70 }}></Fab>
        <Fab sx={{ width: 70, height: 70 }}></Fab>
        <Fab sx={{ width: 70, height: 70 }}></Fab>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "25px",
          marginRight: "25px",
          marginTop: "25px",
        }}
      >
        <Fab sx={{ width: 70, height: 70 }}></Fab>
        <Fab sx={{ width: 70, height: 70 }}></Fab>
        <Fab sx={{ width: 70, height: 70 }}></Fab>
        <Fab sx={{ width: 70, height: 70 }}></Fab>
      </Box>
    </Box>
  );
};

export default BottomContent;
