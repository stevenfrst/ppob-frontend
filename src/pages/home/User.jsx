import { Avatar, Box, CircularProgress, Link, Typography } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { getUserData, isFetchingUser } from "../../redux/userSlice";
import { getUserFailure } from "../../redux/errorSlice";
const User = () => {
  const { currentUser } = useSelector((state) => state.login);
  const { userData } = useSelector((state) => state.user);
  const imageLink =
    "https://avatars.dicebear.com/api/miniavs/" +
    userData?.data?.username +
    ".svg";
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const _isMounted = useRef(true);
  useEffect(() => {
    return () => {
      _isMounted.current = false;
    };
  }, []);
  useEffect(() => {
    if (currentUser?.data?.token) {
      const getUser = async () => {
        dispatch(isFetchingUser(true));
        try {
          const res = await axios.get("https://api.stevenhoyo.co/v1/user", {
            headers: { Authorization: `Bearer ${currentUser?.data?.token}` },
          });
          dispatch(getUserData(res?.data));
          dispatch(isFetchingUser(false));
        } catch (err) {
          dispatch(getUserFailure());
          dispatch(isFetchingUser(false));
        }
      };
      getUser();
    }
  }, [currentUser?.data?.token, dispatch]);
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
  if (loading) {
    return (
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
    );
  }
  return (
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
          <Box sx={{ display: "flex", justifyContent: "row", marginBottom: 2 }}>
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
  );
};

export default User;
