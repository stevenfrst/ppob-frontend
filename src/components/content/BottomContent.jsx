import { Box, Fab } from "@mui/material";
import Text from "../typography/Text";

const BottomContent = () => {
  return (
    <Box
      sx={{
        height: 300,
        backgroundColor: "white",
        marginTop: 2,
        display: "block",
      }}
    >
      <Text text="Produk Teratas" />
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
