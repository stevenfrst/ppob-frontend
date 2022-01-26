import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import axios from "axios";

import moment from "moment";

import {
  getTransactionData,
  isFetchingTransaction,
} from "../../redux/transactionSlice";
import { getTransactionFailure } from "../../redux/errorSlice";

import OrderIdCard from "../../components/card/OrderIdCard";
import Text from "../../components/typography/Text";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Snackbar,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import Header from "../../components/navigation/Header";
import MuiAlert from "@mui/material/Alert";
import { loginSuccess } from "../../redux/loginSlice";
import Detail from "../../components/typography/Detail";
import Text2 from "../../components/typography/Text2";

const TransactionDetail = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const { orderIDPayment } = useSelector((state) => state.userLog);
  const { transactionData } = useSelector((state) => state.transaction);
  const { currentUser } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

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
        if (err?.response?.status === 403) {
          dispatch(loginSuccess(null));
          navigate("/tokenexpired");
          dispatch(isFetchingTransaction(false));
        } else {
          setOpenAlert(true);
          dispatch(getTransactionFailure());
          dispatch(isFetchingTransaction(false));
        }
      }
    };
    getTransaction();
  }, [currentUser?.data?.token, dispatch, orderIDPayment, navigate]);

  const newDate = moment.utc(transactionData?.data?.created_at);
  const localDate = moment(newDate).local().format("DD-MM-YYYY, h:mm:ss");

  const handleNullID = () => {
    navigate("/");
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 450,
            borderRadius: 3,

            paddingTop: 3,
            marginTop: 10,

            paddingBottom: 3,
          }}
        >
          <Text text="Order ID" />
          <OrderIdCard isPayment={true}></OrderIdCard>
          <Box sx={{ marginBottom: 2 }}>&nbsp;</Box>
          <Box sx={{ marginBottom: 3 }}>
            <Text text="Detail Order" />
            <Box sx={{ margin: 3 }}>
              <Detail label="Order ID" value={transactionData?.data?.id} />
              <Detail label="Kode Bayar" value={transactionData?.data?.link} />
              <Detail
                label="Nama Produk"
                value={transactionData?.data?.product_name}
              />
              <Detail
                label="Harga"
                value={`Rp${numberWithCommas(
                  transactionData?.data?.total - transactionData?.data?.tax
                )},00`}
              />
              <Detail
                label="Tax"
                value={`Rp${numberWithCommas(transactionData?.data?.tax)},00`}
              />
              <Detail
                label="Diskon"
                value={`Rp${numberWithCommas(
                  transactionData?.data?.discount
                )},00`}
              />
              <Detail
                label="Total"
                value={`Rp${numberWithCommas(transactionData?.data?.total)},00`}
              />
              <Detail
                label="Status"
                value={
                  transactionData?.data?.transaction_status === "pending" ? (
                    <Text2 text="Unpaid" unpaid={true} />
                  ) : (
                    <Text2 text="Paid" />
                  )
                }
              />
              <Detail label="Metode Pembayaran" value="Transfer Bank" />
              <Detail
                label="Provider"
                value={transactionData?.data?.provider?.toUpperCase()}
              />
              <Box
                sx={{
                  width: 400,
                  marginTop: 2,
                  paddingBottom: 1,
                  display: "flex",
                }}
              >
                <Box sx={{ width: 150, display: "flex" }}>
                  <Typography>Waktu Order</Typography>
                  <Typography sx={{ marginLeft: "auto", fontWeight: "bold" }}>
                    :
                  </Typography>
                </Box>
                <Typography sx={{ marginLeft: "auto" }}>{localDate}</Typography>
              </Box>
            </Box>
          </Box>
          {transactionData?.data?.product_name?.startsWith("Voucher") ? (
            <>
              <Box>
                <Text text="Voucher Detail" />
                <Box
                  sx={{
                    marginTop: 2,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <img
                    src={transactionData?.data?.image_url}
                    alt="xl"
                    style={{ width: 50, height: 50, marginRight: "10px" }}
                  />
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    {transactionData?.data?.product_name}
                  </Typography>
                </Box>
              </Box>

              <Accordion
                sx={{
                  marginTop: 3,
                  backgroundColor: "#113CFC",
                  color: "white",
                }}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon sx={{ color: "white" }} />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Voucher Kamu</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse malesuada lacus ex, sit amet blandit leo
                    lobortis eget.
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </>
          ) : (
            <></>
          )}
        </Box>
      </Box>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Terjadi error, silahkan coba lagi nanti
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default TransactionDetail;
