import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { product } from "../../redux/productApi";
import { setOrderID, setSelectedProduct } from "../../redux/userLogSlice";

import CategoryCard from "../../components/card/CategoryCard";
import Text from "../../components/typography/Text";

import {
  Box,
  CardActionArea,
  CircularProgress,
  Typography,
} from "@mui/material";
import Header from "../../components/navigation/Header";

const PayPLN = () => {
  const { inputPLN } = useSelector((state) => state.userLog);
  const { listProduct } = useSelector((state) => state.product);
  const { userData } = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [customer, setCustomer] = useState("");
  const [error, setError] = useState("");
  const [tagihan, setTagihan] = useState("");
  const [selectedPLN, setSelectedPLN] = useState();
  const [loading, setLoading] = useState(false);
  const randomNumber = (min, max) => {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
  };
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const number = parseInt(randomNumber(41, 45));
  const editedTagihan = numberWithCommas(tagihan);
  let orderID =
    String(userData?.data?.id) +
    Math.floor(Math.random() * 10) +
    String(Date.now());

  if (!currentUser?.data?.token) {
    orderID = Math.floor(Math.random() * 10) + String(Date.now());
  }

  useEffect(() => {
    listProduct?.data
      .filter((product) => product?.id === number)
      .map((product) => setSelectedPLN(product));
  }, [listProduct?.data, number]);

  useEffect(() => {
    setTagihan(
      listProduct?.data
        .filter((product) => product?.id === number)
        .map((product) => product?.price + product?.tax)
    );
  }, [listProduct?.data, number]);

  useEffect(() => {
    const getCustomer = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://6141f3fb4d16670017ba2ac7.mockapi.io/api/v1/pelanggan/${inputPLN}`
        );
        setCustomer(res?.data);
        setError("");
        setLoading(false);
      } catch (err) {
        setError("Data Tidak Ditemukan");
        setLoading(false);
      }
    };
    getCustomer();
  }, [inputPLN]);

  useEffect(() => {
    product(dispatch, 3);
  }, [dispatch]);

  const handleClick = (product) => {
    dispatch(setSelectedProduct(product));
    dispatch(setOrderID(orderID));
    navigate("/choosepayment");
  };
  const handleRedirect = () => {
    navigate("/login");
  };

  return (
    <div>
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
          <Text text="Informasi Tagihan" />
        </Box>
        {loading ? (
          <Box
            sx={{
              marginTop: 3,
              marginBottom: 10,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <CircularProgress />
          </Box>
        ) : error ? (
          <Box sx={{ marginTop: 3 }}>
            <Typography>Data Pelanggan Tidak Ditemukan</Typography>
          </Box>
        ) : (
          <>
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
              <Typography>{customer?.name}</Typography>
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
              <Typography>{customer?.nomor_pelanggan}</Typography>
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
              <Typography>{customer?.alamat}</Typography>
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
                marginBottom: 3,
              }}
            >
              <Typography>Rp{editedTagihan},00</Typography>
            </Box>
          </>
        )}
        {currentUser ? (
          error ? (
            <></>
          ) : (
            <CardActionArea
              sx={{
                width: 450,
                height: 70,
                margin: "auto",
                backgroundColor: "#113CFC",
                color: "white",
                padding: 3,
                display: "flex",
                alignItems: "center",
                bottom: "0",
                top: "auto",
                right: 0,
                left: 0,
                position: "sticky",
              }}
              onClick={() => handleClick(selectedPLN)}
            >
              <Box sx={{ marginLeft: "auto", display: "flex" }}>
                <Typography variant="h4" sx={{ marginRight: 2 }}>
                  Next
                </Typography>
                <img alt="next" src="./assets/nextbutton.png" />
              </Box>
            </CardActionArea>
          )
        ) : (
          <CardActionArea
            onClick={() => handleRedirect()}
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
    </div>
  );
};

export default PayPLN;
