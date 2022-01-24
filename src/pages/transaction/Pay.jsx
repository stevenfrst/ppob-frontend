import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setOrderID } from "../../redux/userLogSlice";

import OrderIdCard from "../../components/card/OrderIdCard";
import Text from "../../components/typography/Text";

import { FileCopy } from "@mui/icons-material";
import {
  Box,
  Button,
  CardActionArea,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import {
  getTransactionData,
  isFetchingTransaction,
} from "../../redux/transactionSlice";
import { getTransactionFailure } from "../../redux/errorSlice";
import axios from "axios";
import Header from "../../components/navigation/Header";

const Pay = () => {
  const { currentUser } = useSelector((state) => state.login);
  const { transactionData } = useSelector((state) => state.transaction);
  const { orderIDPayment } = useSelector((state) => state.userLog);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const totalPrice = numberWithCommas(transactionData?.data?.total);

  useEffect(() => {
    const getTransaction = async () => {
      dispatch(isFetchingTransaction(true));
      try {
        const res = await axios.get(
          `https://api.stevenhoyo.co/v1/payment/${orderIDPayment}`,
          {
            headers: { Authorization: `Bearer ${currentUser?.data?.token}` },
          }
        );
        dispatch(getTransactionData(res?.data));
        dispatch(isFetchingTransaction(false));
      } catch (err) {
        dispatch(getTransactionFailure());
        dispatch(isFetchingTransaction(false));
      }
    };
    getTransaction();
  }, [currentUser?.data?.token, dispatch, orderIDPayment]);

  const handleRedirect = () => {
    navigate("/payment/detail");
  };

  useEffect(() => {
    dispatch(setOrderID(null));
  });

  const handleNullID = () => {
    navigate("/");
  };

  if (!orderIDPayment) {
    return (
      <Box>
        <Header />

        <Box
          sx={{
            width: 450,
            margin: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <Typography>Silahkan Pilih Produk Terlebih Dahulu</Typography>
          <br />
          <Button variant="contained" onClick={() => handleNullID()}>
            Pilih Produk
          </Button>
        </Box>
      </Box>
    );
  }

  return (
    <Box>
      <Header></Header>
      <Box sx={{ width: 450, margin: "auto", marginTop: 15 }}>
        <Box>
          <Text text="Order ID" />
        </Box>
        <OrderIdCard isPayment={true}></OrderIdCard>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            margin: "auto",
            color: "#3F3D56",
            marginBottom: 3,
          }}
        >
          <Box sx={{ textAlign: "center", marginTop: 3 }}>
            <Typography>Transaksi Anda Berakhir Pada</Typography>
          </Box>
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h3">59:58:01</Typography>
          </Box>
        </Box>

        <Text text="Total yang dibayarkan" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 1,
            padding: 2,
            marginBottom: 3,
          }}
        >
          <Box
            sx={{
              width: 350,
              margin: "auto",
              backgroundColor: "rgba(17, 60, 252, 10%)",
              textAlign: "center",
              paddingBottom: 1,
              paddingTop: 1,
              borderRight: 1,
              borderColor: "rgba(63,61,86,50%)",
              color: "#3F3D56",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              Rp{totalPrice},00
            </Typography>
          </Box>
          <IconButton>
            <FileCopy sx={{ color: "#3F3D56" }} />
          </IconButton>
        </Box>
        <Text text="VA Transfer" />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginTop: 1,
            padding: 2,
            marginBottom: 3,
          }}
        >
          <Box
            sx={{
              width: 350,
              margin: "auto",
              borderRight: 1,
              borderColor: "rgba(63,61,86,50%)",
              color: "#3F3D56",
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: "45px",
                height: "45px",
                background: `url(./assets/${transactionData?.data?.provider}.png)`,
                borderRadius: 3,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                backgroundSize: "100%",
                marginRight: 3,
                marginLeft: 3,
              }}
            ></Box>
            <Box>
              <Typography variant="h5">
                {transactionData?.data?.link}
              </Typography>
              <Typography sx={{ fontStyle: "italic" }}>
                Virtual Account {transactionData?.data?.provider?.toUpperCase()}
              </Typography>
            </Box>
          </Box>
          <Tooltip
            title="Copied!"
            onClick={() =>
              navigator.clipboard.writeText(transactionData?.data?.link)
            }
          >
            <IconButton>
              <FileCopy sx={{ color: "#3F3D56" }} />
            </IconButton>
          </Tooltip>
        </Box>
        <Text text="Tata Cara Pembayaran" />
        <Box>
          <ol>
            <li>
              <Typography variant="body">
                Buka Aplikasi Mobile Banking Anda
              </Typography>
            </li>
            <li>
              <Typography variant="body">
                Setelah masuk, pilih menu transfer, kemudian pilih Virtual
                Account
              </Typography>
            </li>
            <li>
              <Typography variant="body">
                Isi kolom no virtual account seperti yang diatas
              </Typography>
            </li>
            <li>
              <Typography variant="body">
                Pada kolom nominal isikan sesuai nominal transaksi kamu.
              </Typography>
            </li>
            <li>
              <Typography variant="body">
                Setelah dikirim, jangan lupa screenshot bukti pembayaran kamu !
              </Typography>
            </li>
          </ol>
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
            position: "sticky",
            top: "auto",
            bottom: 0,
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
            onClick={() => handleRedirect()}
          >
            <Typography>Detail Transaksi</Typography>
          </Box>
        </CardActionArea>
      </Box>
    </Box>
  );
};

export default Pay;
