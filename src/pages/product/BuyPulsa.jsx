import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import CategoryCard from "../../components/card/CategoryCard";
import PulsaCard from "../../components/card/PulsaCard";
import Text from "../../components/typography/Text";

import { product } from "../../redux/productApi";

import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import Header from "../../components/navigation/Header";
const BuyPulsa = () => {
  const { inputPhoneNumber } = useSelector((state) => state.userLog);
  const { listProduct } = useSelector((state) => state.product);
  const { currentUser } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [pulsaType, setPulsaType] = useState("");

  const handleRedirect = () => {
    navigate("/login");
  };

  useEffect(() => {
    product(dispatch, 1);
  }, [dispatch]);

  useEffect(() => {
    if (
      inputPhoneNumber?.startsWith("0811") ||
      inputPhoneNumber?.startsWith("0812") ||
      inputPhoneNumber?.startsWith("0813") ||
      inputPhoneNumber?.startsWith("0821") ||
      inputPhoneNumber?.startsWith("0822") ||
      inputPhoneNumber?.startsWith("0852") ||
      inputPhoneNumber?.startsWith("0853") ||
      inputPhoneNumber?.startsWith("0823") ||
      inputPhoneNumber?.startsWith("0851")
    ) {
      setPulsaType("Telkomsel");
    } else if (
      inputPhoneNumber?.startsWith("0811") ||
      inputPhoneNumber?.startsWith("0814") ||
      inputPhoneNumber?.startsWith("0815") ||
      inputPhoneNumber?.startsWith("0816") ||
      inputPhoneNumber?.startsWith("0855") ||
      inputPhoneNumber?.startsWith("0856") ||
      inputPhoneNumber?.startsWith("0857") ||
      inputPhoneNumber?.startsWith("0858")
    ) {
      setPulsaType("Indosat");
    } else if (
      inputPhoneNumber?.startsWith("0817") ||
      inputPhoneNumber?.startsWith("0818") ||
      inputPhoneNumber?.startsWith("0819") ||
      inputPhoneNumber?.startsWith("0859") ||
      inputPhoneNumber?.startsWith("0877") ||
      inputPhoneNumber?.startsWith("0878")
    ) {
      setPulsaType("Xl");
    } else if (
      inputPhoneNumber?.startsWith("0838") ||
      inputPhoneNumber?.startsWith("0831") ||
      inputPhoneNumber?.startsWith("0832") ||
      inputPhoneNumber?.startsWith("0833")
    ) {
      setPulsaType("Axis");
    } else if (
      inputPhoneNumber?.startsWith("0881") ||
      inputPhoneNumber?.startsWith("0882") ||
      inputPhoneNumber?.startsWith("0883") ||
      inputPhoneNumber?.startsWith("0884") ||
      inputPhoneNumber?.startsWith("0885") ||
      inputPhoneNumber?.startsWith("0886") ||
      inputPhoneNumber?.startsWith("0887") ||
      inputPhoneNumber?.startsWith("0888") ||
      inputPhoneNumber?.startsWith("0889")
    ) {
      setPulsaType("Smartfren");
    } else {
      setPulsaType("Three");
    }
  }, [inputPhoneNumber]);

  return (
    <Box>
      <Header></Header>

      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CategoryCard></CategoryCard>
      </Box>
      <Box
        sx={{
          width: 450,
          height: 300,
          margin: "auto",
          marginTop: 2,
          backgroundColor: "white",
          display: "block",
        }}
      >
        <Box sx={{ marginTop: 3 }}>
          <Text text="Pilih Produk" />
        </Box>
        {inputPhoneNumber ? (
          <Box sx={{ width: 450, marginTop: 2 }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {listProduct?.data
                .filter((product) => product?.sub_category === pulsaType)
                .map((product) => (
                  <Grid key={product?.id} item xs={6}>
                    <PulsaCard
                      key={product?.id}
                      listProduct={product}
                    ></PulsaCard>
                  </Grid>
                ))}
            </Grid>
          </Box>
        ) : (
          <Box sx={{ marginTop: 3 }}>
            <Typography>
              Silahkan Masukkan Nomor Handphone Terlebih Dahulu
            </Typography>
          </Box>
        )}
        {currentUser ? (
          <></>
        ) : (
          <CardActionArea
            onClick={() => handleRedirect()}
            sx={{
              height: 70,
              width: 450,
              backgroundColor: "#113CFC",
              color: "white",
              padding: 3,
              display: "flex",
              alignItems: "center",
              bottom: 0,
              top: "auto",
              position: "sticky",
              marginTop: 3,
            }}
          >
            <Box
              sx={{
                width: 300,
                borderStyle: "solid",
                borderColor: "white",
                borderRadius: 5,
                textAlign: "center",
                padding: 1,
              }}
            >
              <Typography>Login untuk Melanjutkan Pembelian</Typography>
            </Box>
          </CardActionArea>
        )}
      </Box>
    </Box>
  );
};

export default BuyPulsa;
