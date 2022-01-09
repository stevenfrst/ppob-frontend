import { Box, Button, CardActionArea, styled, Typography } from "@mui/material";
import BuyCard from "../components/contents/BuyCard";
import Header2 from "../components/Header2";

const PayPLN = () => {
  return (
    <div>
      <Header2></Header2>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <BuyCard isHome={false}></BuyCard>
      </Box>
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
          <Box
            component="span"
            sx={{
              border: 1,
              borderColor: "#113CFC",
              padding: 0.5,
              borderStyle: "solid",
              backgroundColor: "#113CFC",
              color: "white",
              borderRadius: 2,
              fontWeight: "bold",
            }}
          >
            Informasi Tagihan
          </Box>
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <Typography>Nama Pelanggan</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(17,60,252,10%)",
            padding: 1,
            paddingLeft: 2,
            borderRadius: 3,
            marginTop: 1,
          }}
        >
          <Typography>Joni</Typography>
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <Typography>Nomor Pelanggan</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(17,60,252,10%)",
            padding: 1,
            paddingLeft: 2,
            borderRadius: 3,
            marginTop: 1,
          }}
        >
          <Typography>752123xxxxxxxxxxxxxxxxxxxxxxxxxxxxx</Typography>
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <Typography>Alamat</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "rgba(17,60,252,10%)",
            padding: 1,
            paddingLeft: 2,
            borderRadius: 3,
            marginTop: 1,
          }}
        >
          <Typography>Jawa Tengah</Typography>
        </Box>
        <Box sx={{ marginTop: 3 }}>
          <Typography>Tagihan</Typography>
        </Box>
        <Box
          sx={{
            backgroundColor: "#FBFF21",
            padding: 1,
            paddingLeft: 2,
            borderRadius: 3,
            marginTop: 1,
          }}
        >
          <Typography>Rp. 200.000,-</Typography>
        </Box>
        <CardActionArea
          sx={{
            height: 70,
            marginTop: 10,
            backgroundColor: "#113CFC",
            color: "white",
            padding: 3,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box sx={{ marginLeft: "auto", display: "flex" }}>
            <Typography variant="h4" sx={{ marginRight: 2 }}>
              Next
            </Typography>
            <img alt="next" src="./assets/nextbutton.png" />
          </Box>
        </CardActionArea>
      </Box>
    </div>
  );
};

export default PayPLN;
