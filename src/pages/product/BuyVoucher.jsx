import { Box } from "@mui/material";
import CategoryCard from "../../components/card/CategoryCard";
import VoucherCard from "../../components/card/VoucherCard";
import Header2 from "../../components/navigation/Header2";
import Text from "../../components/typography/Text";

const BuyVoucher = () => {
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
            alignItems: "center",
            justifyContent: "center",
            margin: "auto",
          }}
        >
          <Box sx={{ marginTop: 3, display: "flex", flexDirection: "column" }}>
            <VoucherCard></VoucherCard>
            <VoucherCard></VoucherCard>
            <VoucherCard></VoucherCard>
          </Box>
          <Box sx={{ marginTop: 3, display: "flex", flexDirection: "column" }}>
            <VoucherCard></VoucherCard>
            <VoucherCard></VoucherCard>
            <VoucherCard></VoucherCard>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BuyVoucher;
