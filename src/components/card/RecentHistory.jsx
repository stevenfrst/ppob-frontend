import {
  Box,
  CardActionArea,
  CircularProgress,
  Container,
  Modal,
  Typography,
} from "@mui/material";
import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Detail from "../typography/Detail";
import Text from "../typography/Text";
import Text2 from "../typography/Text2";
const RecentHistory = (props) => {
  const { listHistory } = props;
  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const { currentUser } = useSelector((state) => state.login);
  const [history, setHistory] = useState("");
  const [open, setOpen] = useState(false);
  const newDate = moment.utc(listHistory?.created_at);
  const localDate = moment(newDate).local().format("DD MMM YYYY");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const idVoucher = (listHistory?.id % 100)+1;
  const handleClick = () => {
    const getHistory = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://api.stevenhoyo.co/v1/payment/${listHistory?.id}`,
          {
            headers: { Authorization: `Bearer ${currentUser?.data?.token}` },
          }
        );
        setHistory(res?.data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };
    getHistory();
    setOpen(true);
  };
  const [voucher, setVoucher] = useState("");
  useEffect(() => {
    const getCustomer = async () => {
      setLoading(true);
      try {
        const res = await axios.get(
          `https://6141f3fb4d16670017ba2ac7.mockapi.io/api/v1/code_voucher/${idVoucher}`
        );
        setVoucher(res?.data);
        setError("");
        setLoading(false);
      } catch (err) {
        setError("Data Tidak Ditemukan");
        setLoading(false);
      }
    };
    getCustomer();
  }, [idVoucher]);

  return (
    <>
      <CardActionArea
        sx={{
          width: 400,
          display: "flex",
          alignItems: "center",
          marginRight: 3,
          padding: 1,
        }}
        onClick={() => handleClick()}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            background: `url(${listHistory?.image_url})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "100%",
            marginRight: 3,
          }}
        ></Box>
        <Box sx={{ display: "block" }}>
          {listHistory?.transaction_status === "pending" ? (
            <Box
              component="span"
              sx={{
                backgroundColor: "#FF2929",
                color: "white",
                borderRadius: 3,
                paddingLeft: 3,
                paddingRight: 3,
                paddingBottom: 0.3,
                paddingTop: 0.3,
              }}
            >
              Proses
            </Box>
          ) : (
            <Box
              component="span"
              sx={{
                backgroundColor: "#113CFC",
                color: "white",
                borderRadius: 3,
                paddingLeft: 3,
                paddingRight: 3,
                paddingBottom: 0.3,
                paddingTop: 0.3,
              }}
            >
              Selesai
            </Box>
          )}
          <Typography sx={{ marginTop: 1 }}>
            Rp{numberWithCommas(listHistory?.total)},00
          </Typography>
          <Typography>{localDate}</Typography>
        </Box>
      </CardActionArea>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container
          sx={(theme) => ({
            width: 450,
            height: 650,
            backgroundColor: "white",
            position: "absolute",
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            margin: "auto",
            [theme.breakpoints.down("sm")]: {
              width: "100vw",
              height: "100vh",
            },
          })}
        >
          {loading ? (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: 500,
                overflow: "scroll",
              }}
            >
              <CircularProgress />
            </Box>
          ) : error ? (
            <Box sx={{ marginTop: 3, marginBottom: 5 }}>
              <Typography>Terjadi Error, Silahkan Coba Lagi</Typography>
            </Box>
          ) : (
            <>
              <Box sx={{ marginTop: 3, marginBottom: 5 }}>
                <Text text="Detail Order" />
              </Box>

              <Detail label="Order ID" value={history?.data?.id} />
              <Detail label="Kode Bayar" value={history?.data?.link} />
              <Detail label="Nama Produk" value={history?.data?.product_name} />
              {history?.data?.product_name.startsWith("Voucher")&&history?.data?.transaction_status === "settlement" ? (
                <Detail
                  label="Kode Voucher"
                  value={
                    loading ? (
                      <CircularProgress />
                    ) : error ? (
                      "Tunggu beberapa saat lagi"
                    ) : (
                      voucher?.code
                    )
                  }
                />
              ) : (
                <></>
              )}
              <Detail
                label="Harga"
                value={`Rp${numberWithCommas(
                  history?.data?.total - history?.data?.tax
                )},00`}
              />
              <Detail
                label="Tax"
                value={`Rp${numberWithCommas(history?.data?.tax)},00`}
              />
              <Detail
                label="Diskon"
                value={`Rp${numberWithCommas(history?.data?.discount)},00`}
              />
              <Detail
                label="Total"
                value={`Rp${numberWithCommas(history?.data?.total)},00`}
              />
              <Detail
                label="Status"
                value={
                  history?.data?.transaction_status === "pending" ? (
                    <Text2 text="Unpaid" unpaid={true} />
                  ) : (
                    <Text2 text="Paid" />
                  )
                }
              />
              <Detail label="Metode Pembayaran" value="Transfer Bank" />
              <Detail
                label="Provider"
                value={history?.data?.provider?.toUpperCase()}
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
            </>
          )}
        </Container>
      </Modal>
    </>
  );
};

export default RecentHistory;
