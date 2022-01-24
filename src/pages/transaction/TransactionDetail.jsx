import { useEffect } from "react";
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
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useNavigate } from "react-router-dom";
import Header from "../../components/navigation/Header";

const TransactionDetail = () => {
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
        dispatch(getTransactionFailure());
        dispatch(isFetchingTransaction(false));
      }
    };
    getTransaction();
  }, [currentUser?.data?.token, dispatch, orderIDPayment]);

  const newDate = moment.utc(transactionData?.data?.created_at);
  const localDate = moment(newDate).local().format("DD-MM-YYYY, h:mm:ss");

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

            <Box
              sx={{
                margin: "auto",
                marginTop: 2,
                width: 400,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: 170, display: "flex" }}>
                <Typography>Status Transaksi</Typography>
                <Typography sx={{ marginLeft: "auto", fontWeight: "bold" }}>
                  :
                </Typography>
              </Box>
              {transactionData?.data?.transaction_status === "pending" ? (
                <Box
                  component="span"
                  sx={{
                    border: 1,

                    padding: 0.5,
                    borderStyle: "solid",
                    backgroundColor: "#FF2929",
                    color: "white",
                    borderRadius: 2,
                    marginLeft: "auto",
                  }}
                >
                  <Typography>Sedang di Proses</Typography>
                </Box>
              ) : (
                <Box
                  component="span"
                  sx={{
                    border: 1,

                    padding: 0.5,
                    borderStyle: "solid",
                    backgroundColor: "#113CFC",
                    color: "white",
                    borderRadius: 2,
                    marginLeft: "auto",
                  }}
                >
                  <Typography>Selesai</Typography>
                </Box>
              )}
            </Box>
            <Box
              sx={{
                margin: "auto",
                marginTop: 2,
                width: 400,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: 170, display: "flex" }}>
                <Typography>Pembayaran Melalui</Typography>
                <Typography sx={{ marginLeft: "auto", fontWeight: "bold" }}>
                  :
                </Typography>
              </Box>

              <Typography sx={{ marginLeft: "auto" }}>
                VA {transactionData?.data?.provider?.toUpperCase()}
              </Typography>
            </Box>
            <Box
              sx={{
                margin: "auto",
                marginTop: 2,
                width: 400,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: 170, display: "flex" }}>
                <Typography>Total Pembayaran</Typography>
                <Typography sx={{ marginLeft: "auto", fontWeight: "bold" }}>
                  :
                </Typography>
              </Box>

              <Typography sx={{ marginLeft: "auto", fontWeight: "bold" }}>
                Rp{numberWithCommas(transactionData?.data?.total)},00
              </Typography>
            </Box>
            <Box
              sx={{
                margin: "auto",
                marginTop: 2,
                width: 400,
                display: "flex",
                alignItems: "center",
              }}
            >
              <Box sx={{ width: 170, display: "flex" }}>
                <Typography>Waktu Order</Typography>
                <Typography sx={{ marginLeft: "auto", fontWeight: "bold" }}>
                  :
                </Typography>
              </Box>

              <Typography sx={{ marginLeft: "auto" }}>{localDate}</Typography>
            </Box>
          </Box>
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
            sx={{ marginTop: 3, backgroundColor: "#113CFC", color: "white" }}
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
                Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
                eget.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </Box>
      </Box>
    </Box>
  );
};

export default TransactionDetail;
