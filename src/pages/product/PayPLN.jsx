import { Box, CardActionArea, Typography } from "@mui/material";
import CategoryCard from "../../components/card/CategoryCard";
import Header2 from "../../components/navigation/Header2";
import Text from "../../components/typography/Text";

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
        <CategoryCard isHome={false}></CategoryCard>
      </Box>
      <Box
        sx={{
          width: 450,
          height: 300,
          margin: "auto",
          backgroundColor: "white",
          marginTop: 2,
          display: "block",
        }}
      >
        <Box sx={{ marginTop: 3 }}>
          <Text text="Informasi Tagihan" />
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
