import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Header from "../../components/navigation/Header";
import BottomBar from "../../components/navigation/BottomBar";
import HistoryCard from "../../components/card/HistoryCard";

import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Snackbar,
  Typography,
} from "@mui/material";
import { loginSuccess } from "../../redux/loginSlice";
import MuiAlert from "@mui/material/Alert";

const History = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const { currentUser } = useSelector((state) => state.login);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [history, setHistory] = useState("");
  const [loading, setLoading] = useState(false);
  
  history?.data?.data.sort(function(a,b){
    return Date.parse(a.created_at) - Date.parse(b.created_at)
  }).reverse()

  useEffect(() => {
    const getHistory = async () => {
      setLoading(true);
      try {
        const res = await axios.get("https://api.stevenhoyo.co/v1/payment/", {
          headers: {
            Authorization: `Bearer ${currentUser?.data?.token}`,
          },
        });
        setHistory(res);
        setLoading(false);
      } catch (err) {
        if (err?.response?.status === 403) {
          dispatch(loginSuccess(null));
          navigate("/tokenexpired");
          setLoading(false);
        } else {
          setOpenAlert(true);
          setLoading(false);
        }
      }
    };
    getHistory();
  }, [currentUser?.data?.token, navigate, dispatch]);

  const handleLogin = () => {
    navigate("/login");
  };
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };

  if (loading) {
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
          <CircularProgress />
        </Box>
        <BottomBar currentPage={3} />
      </Box>
    );
  }

  if (!currentUser) {
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
          <Typography>Silahkan Login Terlebih Dahulu</Typography>
          <br />
          <Button variant="contained" onClick={() => handleLogin()}>
            Login
          </Button>
        </Box>
        <BottomBar currentPage={3} />
      </Box>
    );
  }
  return (
    <Box>
      <Header />
      <Box
        sx={{
          width: 450,
          margin: "auto",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <Typography variant="h4">History</Typography>
        {history ? (
          <Box sx={{ marginTop: 2 }}>
            <Grid
              container
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {history?.data?.data?.map((product) => (
                <Grid key={product?.id} item xs={6}>
                  <HistoryCard
                    key={product?.id}
                    listHistory={product}
                  ></HistoryCard>
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : (
          <Typography sx={{ marginTop: 3 }}>Belum ada Transaksi</Typography>
        )}
      </Box>
      <BottomBar currentPage={3} />
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

export default History;
