import { Box, CardActionArea, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CategoryCard from "../../components/card/CategoryCard";
import Header2 from "../../components/navigation/Header2";
import Text from "../../components/typography/Text";
import axios from "axios";
import { product } from "../../redux/productApi";
const PayPLN = () => {
  const [customer, setCustomer] = useState("");
  const dispatch = useDispatch();
  const { inputPLN } = useSelector((state) => state.userLog);
  const { listProduct } = useSelector((state) => state.product);
  const [error, setError] = useState("")
  const randomNumber=(min, max)=>{
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const number = parseInt(randomNumber(41,45))
  const [tagihan, setTagihan] = useState("")
  const editedTagihan = numberWithCommas(tagihan);
  useEffect(()=>{
    setTagihan(listProduct?.data
      .filter((product) => product?.id === number)
      .map((product) => product?.price + product?.tax))
  },[listProduct?.data, number])
  useEffect(() => {
    
    const getCustomer = async () => {
      try {
        const res = await axios.get(
          `https://6141f3fb4d16670017ba2ac7.mockapi.io/api/v1/pelanggan/${inputPLN}`
        );
        setCustomer(res?.data);
        setError("")
      } catch (err) {
        setError("Data Tidak Ditemukan")
      }
    };
    getCustomer();
  }, [inputPLN]);
  useEffect(() => {
    product(dispatch, 3);
  }, [dispatch]);
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
        {error?<Box sx={{marginTop:3}}><Typography>Data Pelanggan Tidak Ditemukan</Typography></Box>:
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
          }}
        >
          <Typography>Rp{editedTagihan},00</Typography>
        </Box></>
}
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
