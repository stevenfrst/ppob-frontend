import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { loginSuccess } from "../../redux/loginSlice";

import Header from "../../components/navigation/Header";
import BottomBar from "../../components/navigation/BottomBar";

import {
  Avatar,
  Box,
  CircularProgress,
  Link,
  Typography,
  Button,
  Snackbar,
} from "@mui/material";
import MuiAlert from "@mui/material/Alert";
const User = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const { currentUser } = useSelector((state) => state.login);
  const { userData } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const imageLink =
    "https://avatars.dicebear.com/api/miniavs/" +
    userData?.data?.username +
    ".svg";

  const _isMounted = useRef(true);

  useEffect(() => {
    return () => {
      _isMounted.current = false;
    };
  }, []);

  const handleClick = () => {
    setLoading(true);
    axios
      .post(
        "https://api.stevenhoyo.co/v1/user/pin",
        {},
        {
          headers: { Authorization: `Bearer ${currentUser?.data?.token}` },
        }
      )
      .then(() => {
        if (_isMounted) {
          navigate("/verification");
          setLoading(false);
        }
      })
      .catch((err) => {
        if (_isMounted) {
          if (err?.response?.status === 403) {
            dispatch(loginSuccess(null));
            navigate("/tokenexpired");
            setLoading(false);
          } else {
            setOpenAlert(true);
            setError(err);
            setLoading(false);
          }
        }
      });
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const handleLogout = () => {
    dispatch(loginSuccess(null));
    navigate("/logout");
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
        <BottomBar currentPage={2} />
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
        <BottomBar currentPage={2} />
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Avatar
          alt="avatar"
          src={imageLink}
          sx={{
            height: 100,
            width: 100,
            display: "flex",
            alignItems: "center",
            marginBottom: 7,
          }}
        />
        <Box sx={{ width: 400 }}>
          <Box sx={{ display: "flex", marginBottom: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: 150,
                marginRight: 2,
              }}
            >
              <Typography>Username</Typography>
              <Typography>:</Typography>
            </Box>
            <Box>
              <Typography>{userData?.data?.username}</Typography>
            </Box>
          </Box>
          <Box sx={{ display: "flex", marginBottom: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: 150,
                marginRight: 2,
              }}
            >
              <Typography>Email</Typography>
              <Typography>:</Typography>
            </Box>
            <Box sx={{ width: 200 }}>
              <Typography>{userData?.data?.email}</Typography>
            </Box>
          </Box>
          {userData?.data?.is_verified ? (
            <></>
          ) : (
            <Box sx={{ display: "flex", marginBottom: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: 150,
                  marginRight: 2,
                }}
              >
                <Typography></Typography>
                <Typography></Typography>
              </Box>
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <Link
                  sx={{ cursor: "pointer", marginBottom: 2 }}
                  onClick={() => handleClick()}
                >
                  (Verifikasi Sekarang!)
                </Link>
                {error ? (
                  <Typography>Terjadi Error, coba lagi nanti</Typography>
                ) : (
                  <></>
                )}
              </Box>
            </Box>
          )}

          <Box sx={{ display: "flex", marginBottom: 2 }}>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                width: 150,
                marginRight: 2,
              }}
            >
              <Typography>Nomor Handphone</Typography>
              <Typography>:</Typography>
            </Box>
            <Box>
              <Typography>{userData?.data?.phoneNumber}</Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            sx={{ marginTop: 3 }}
            onClick={() => handleLogout()}
          >
            Logout
          </Button>
        </Box>
      </Box>
      <BottomBar currentPage={2} />
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

export default User;
