import { Avatar, Box, CardActionArea, Typography } from "@mui/material";

const VoucherCard = () => {
  return (
    <Box
      sx={{
        borderStyle: "solid",
        borderColor: "#113CFC",
        margin: 0.5,
        borderRadius: 3,
      }}
    >
      <CardActionArea
        sx={{
          width: 180,
          borderStyle: "solid",
          borderColor: "#113CFC",
          borderRadius: 3,
          padding: 1,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box>
          <Avatar
            alt="xl.png"
            src="./assets/pagisore.png"
            sx={{ width: 50, height: 50 }}
          ></Avatar>
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            Pagi Sore
          </Typography>
        </Box>
      </CardActionArea>
    </Box>
  );
};

export default VoucherCard;
