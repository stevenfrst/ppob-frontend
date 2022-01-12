import { Box } from "@mui/material";
import CategoryCard from "../../components/card/CategoryCard";
import PulsaCard from "../../components/card/PulsaCard";

import Header2 from "../../components/navigation/Header2";
import Text from "../../components/typography/Text";

const BuyPulsa = () => {
  return (
    <Box>
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
          <Text text="Pilih Produk" />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            width: 450,
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Box sx={{ marginTop: 3, display: "flex", flexDirection: "column" }}>
            <PulsaCard></PulsaCard>
            <PulsaCard></PulsaCard>
            <PulsaCard></PulsaCard>
          </Box>
          <Box sx={{ marginTop: 3, display: "flex", flexDirection: "column" }}>
            <PulsaCard></PulsaCard>
            <PulsaCard></PulsaCard>
            <PulsaCard></PulsaCard>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BuyPulsa;
