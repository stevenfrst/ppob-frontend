import { FileCopy } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";

const OrderIdCard = () => {
  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: 3,
        borderColor: "#113CFC",
        borderRadius: 5,
        borderStyle: "solid",
        paddingTop: 3,
        paddingBottom: 3,
        display: "flex",
        position: "relative",
        borderWidth: 2,
        color: "#3F3D56",
        width: 450,
      }}
    >
      <Box sx={{ margin: "auto" }}>
        {" "}
        <Typography variant="h4" sx={{ fontWeight: "bold", marginRight: 3 }}>
          MID-GO-TEST-XXXXX
        </Typography>
      </Box>

      <Box sx={{ position: "absolute", top: 3, right: 3 }}>
        <IconButton aria-label="upload picture" component="span">
          <FileCopy />
        </IconButton>
      </Box>
    </Box>
  );
};

export default OrderIdCard;
