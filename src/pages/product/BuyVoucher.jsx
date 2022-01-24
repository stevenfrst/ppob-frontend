import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import CategoryCard from "../../components/card/CategoryCard";
import VoucherCard from "../../components/card/VoucherCard";
import Text from "../../components/typography/Text";
import { product } from "../../redux/productApi";

import _ from "lodash";

import { useNavigate } from "react-router-dom";

import { Box, CardActionArea, Grid, Typography } from "@mui/material";
import Header from "../../components/navigation/Header";

const BuyVoucher = () => {
  const { listProduct } = useSelector((state) => state.product);
  const { currentUser } = useSelector((state) => state.login);
  const { inputPhoneNumber } = useSelector((state) => state.userLog);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleRedirect = () => {
    navigate("/login");
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
              {_.uniqBy(listProduct?.data, "sub_category").map((product) => (
                <Grid key={product?.id} item xs={6}>
                  <VoucherCard
                    key={product?.id}
                    listProduct={product}
                  ></VoucherCard>
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
              marginTop: 3,
              position: "sticky",
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

export default BuyVoucher;
