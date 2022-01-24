import Text from "../typography/Text";
import { Box, Fab } from "@mui/material";

const BottomContent = () => {
  return (
    <Box
      sx={{
        height: 300,
        marginTop: 2,
        backgroundColor: "white",
        display: "block",
      }}
    >
      <Text text="Produk Teratas" />
      <Box
        sx={{
          marginLeft: "25px",
          marginRight: "25px",
          marginTop: "25px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Fab sx={{ width: 70, height: 70 }}></Fab>
        <Fab sx={{ width: 70, height: 70 }}></Fab>
        <Fab sx={{ width: 70, height: 70 }}></Fab>
        <Fab sx={{ width: 70, height: 70 }}></Fab>
      </Box>
      <Box
        sx={{
          marginLeft: "25px",
          marginRight: "25px",
          marginTop: "25px",
          display: "flex",
          justifyContent: "space-between",
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
