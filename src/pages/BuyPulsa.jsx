import { Box } from "@mui/material";
import BuyCard from "../components/contents/BuyCard";
import PulsaCard from "../components/contents/PulsaCard";
import Header2 from "../components/Header2";

const BuyPulsa = () => {
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
            Pilih Produk
          </Box>
        </Box>
        <Box sx={{display:'flex', flexDirection:'row', width:450, alignItems:'center', justifyContent:'center', margin:'auto'}}>
        <Box sx={{marginTop:3, display:'flex', flexDirection:'column' }}>
        <PulsaCard></PulsaCard>
        <PulsaCard></PulsaCard>
        <PulsaCard></PulsaCard>
        </Box>
        <Box sx={{marginTop:3, display:'flex', flexDirection:'column' }}>
        <PulsaCard></PulsaCard>
        <PulsaCard></PulsaCard>
        <PulsaCard></PulsaCard>
        </Box>
        </Box>
      </Box>
    </div>
  );
};

export default BuyPulsa;
