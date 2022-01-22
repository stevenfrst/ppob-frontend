import {
  Avatar,
  Box,
  CardActionArea,
  CircularProgress,
  Container,
  Modal,
  Typography,
} from "@mui/material";
import Text from "../../components/typography/Text";
import { useSelector } from "react-redux";
import moment from "moment";
import { useState } from "react";
import Detail from "../typography/Detail";
import Text2 from "../typography/Text2";
import axios from "axios";
const HistoryCard = (props) => {
  const { listHistory } = props;
  const [open, setOpen] = useState(false);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const totalPrice = numberWithCommas(listHistory?.total);

  const { currentUser } = useSelector((state) => state.login);
  const date = moment(listHistory?.created_at).format("LL");
  const newDate = moment.utc(listHistory?.created_at);
  const localDate = moment(newDate).local().format("DD-MM-YYYY, h:mm:ss");
  const [history, setHistory] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = (orderID) => {
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
  console.log(history);
  return (
    <>
      <Box
        sx={{
          borderRadius: 3,
          display: "flex",
        }}
      >
        <CardActionArea
          disabled={!currentUser?.data?.token}
          sx={{
            borderRadius: 3,
            padding: 1,
          }}
          onClick={() => handleClick()}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar
              alt={listHistory?.product_name}
              src={listHistory?.image_url}
              sx={{ marginRight: 3, width: 50, height: 50 }}
            ></Avatar>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Rp{totalPrice},00
              </Typography>
              <Typography variant="body">{date}</Typography>
            </Box>
          </Box>
        </CardActionArea>
      </Box>
      <Modal open={open} onClose={() => setOpen(false)}>
        <Container
          sx={(theme) => ({
            width: 450,
            height: 610,
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
              <Detail label="Nama Produk" value={history?.data?.product_name} />
              <Detail
                label="Harga"
                value={history?.data?.total - history?.data?.tax}
              />
              <Detail label="Tax" value={history?.data?.tax} />
              <Detail label="Diskon" value={history?.data?.discount} />
              <Detail label="Total" value={history?.data?.total} />
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
                  display: "flex",
                  marginTop: 2,
                  width: 400,
                  paddingBottom: 1,
                }}
              >
                <Box sx={{ display: "flex", width: 150 }}>
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

export default HistoryCard;
