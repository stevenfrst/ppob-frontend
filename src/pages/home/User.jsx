import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Header from "../../components/navigation/Header";
import BottomBar from "../../components/navigation/BottomBar";

import {
  Avatar,
  Box,
  CircularProgress,
  Link,
  Typography,
  Button,
} from "@mui/material";

const User = () => {
  const { currentUser } = useSelector((state) => state.login);
  const { userData } = useSelector((state) => state.user);

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
          setLoading(false);
          setError(err);
        }
      });
  };

  const handleLogin = () => {
    navigate("/login");
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
            justifyContent: "center",
            flexDirection: "column",
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
        <Header></Header>
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
        <BottomBar currentPage={2}></BottomBar>
      </Box>
    );
  }
  return (
    <Box>
      <Header></Header>
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
          <Box sx={{ display: "flex", justifyContent: "row", marginBottom: 2 }}>
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
          <Box sx={{ display: "flex", justifyContent: "row", marginBottom: 2 }}>
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
            <Box
              sx={{ display: "flex", justifyContent: "row", marginBottom: 2 }}
            >
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
                  <Typography>Terjadi Error, coba lagi</Typography>
                ) : (
                  <></>
                )}
              </Box>
            </Box>
          )}

          <Box sx={{ display: "flex", justifyContent: "row", marginBottom: 2 }}>
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
        </Box>
      </Box>
      <BottomBar currentPage={2}></BottomBar>
    </Box>
  );
};

export default User;
