import { Box, Typography } from "@mui/material";

const Detail = ({ label, value }) => {
  return (
    <Box
      sx={{
        width: 400,
        marginTop: 2,
        paddingBottom: 1,
        borderBottom: 1,
        borderColor: "rgb(63, 61, 86, 20%)",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: 150, display: "flex",  alignItems: "center" }}>
        <Typography>{label}</Typography>
        <Typography sx={{ marginLeft: "auto", fontWeight: "bold" }}>
          :
        </Typography>
      </Box>
      <Typography sx={{ marginLeft: "auto" }}>{value}</Typography>
    </Box>
  );
};

export default Detail;
