import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";

import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header2 from "../../components/navigation/Header2";
import OrderIdCard from "../../components/card/OrderIdCard";
import Text from "../../components/typography/Text";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTransaction } from "../../redux/transactionApi";
import { product } from "../../redux/productApi";
const TransactionDetail = () => {
  const dispatch = useDispatch();
  const { orderIDPayment } = useSelector((state) => state.userLog);
  const { transactionData } = useSelector((state) => state.transaction);
  
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const {listProduct} = useSelector((state)=>state.product)
  useEffect(() => {
    getTransaction(dispatch, orderIDPayment);
  }, [dispatch, orderIDPayment]);
  const category = transactionData?.data?.product_name?.startsWith("Pulsa")?1:transactionData?.data?.product_name?.startsWith("Voucher")?2:3
  useEffect(() => {
    product(dispatch, category);
  }, [dispatch, category]);
  const picture = listProduct?.data.filter((product) => product?.name === transactionData?.data?.product_name).map(product=>product?.link)
 
  return (
    <Box>
      <Header2></Header2>
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

              <Typography sx={{ marginLeft: "auto" }}>
                {new Date(transactionData?.data?.created_at).toLocaleString('en-GB', { timeZone: 'UTC' })}
              </Typography>
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
                src={picture}
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
