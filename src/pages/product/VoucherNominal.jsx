import { Box, Button, CardActionArea, Grid, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CategoryCard from "../../components/card/CategoryCard";

import VoucherNominalCard from "../../components/card/VoucherNominalCard";
import Header from "../../components/navigation/Header";
import Text from "../../components/typography/Text";
import { product } from "../../redux/productApi";

const VoucherNominal = () => {
  const dispatch = useDispatch();
  const { currentUser } = useSelector((state) => state.login);
  const { listProduct } = useSelector((state) => state.product);
  const { selectedVoucher } = useSelector((state) => state.userLog);
  const navigate = useNavigate();
  const handleRedirect = () => {
    navigate("/buyvoucher");
  };
  useEffect(() => {
    product(dispatch, 2);
  }, [dispatch]);

  return (
    <Box>
      <Header></Header>

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
        <Box sx={{ paddingTop: 2, color: "white" }}>
          <Text text="Pilih Produk" />
        </Box>
        {selectedVoucher ? (
          <Box sx={{ width: 450, marginTop: 2 }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {listProduct?.data
                .filter(
                  (product) =>
                    product?.sub_category === selectedVoucher?.sub_category
                )
                .map((product) => (
                  <Grid key={product?.id} item xs={6}>
                    <VoucherNominalCard
                      key={product?.id}
                      listProduct={product}
                    ></VoucherNominalCard>
                  </Grid>
                ))}
            </Grid>
          </Box>
        ) : (
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 3 }}>
            <Button
              variant="contained"
              sx={{ backgroundColor: "#113CFC" }}
              onClick={() => handleRedirect()}
            >
              Pilih Jenis Voucher Terlebih Dahulu
            </Button>
          </Box>
        )}
      </Box>
      {currentUser ? (
        <></>
      ) : (
        <CardActionArea
          onClick={() => navigate("/login")}
          sx={{
            height: 70,
            width: 450,
            margin: "auto",
            backgroundColor: "#113CFC",
            color: "white",
            padding: 3,
            display: "flex",
            alignItems: "center",
            bottom: 0,
            right: 0,
            left: 0,
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
  );
};

export default VoucherNominal;
