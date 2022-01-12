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
const TransactionDetail = () => {
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
          <OrderIdCard></OrderIdCard>
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
                <Typography>Done</Typography>
              </Box>
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

              <Typography sx={{ marginLeft: "auto" }}>VA BCA</Typography>
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
                Rp. 22.000
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
                27 Des 2021 &nbsp;11:04
              </Typography>
            </Box>
          </Box>
          <Box>
            <Text text="Voucher Detail" />
            <Box
              sx={{
                marginTop: 1,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src="./assets/xl.png"
                alt="xl"
                style={{ width: 50, height: 50, marginRight: "10px" }}
              />
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                XL 5000
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
