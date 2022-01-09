import { Box, Fab } from "@mui/material";

const BottomContent = () => {
  return (
    <Box
      sx={(theme) => ({
        width: 450,
        height: 300,
        margin: "auto",
        backgroundColor: "white",
        marginTop: 2,
        display: "block",
        [theme.breakpoints.down("sm")]: {
          width: "100vw",
        },
      })}
    >
      <Box sx={{ paddingTop: 2, color: "white" }}>
      <Box component='span' sx={{ border:1, borderColor:'#113CFC',padding:0.5, borderStyle:'solid', backgroundColor:"#113CFC", color:'white',  borderRadius:2, fontWeight:'bold'}}>Produk Teratas</Box>

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
