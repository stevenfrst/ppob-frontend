import { useDispatch, useSelector } from "react-redux";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import { getUserData, isFetchingUser } from "../../redux/userSlice";
import { getUserFailure } from "../../redux/errorSlice";

import TopContent from "../../components/content/TopContent";
import BottomContent from "../../components/content/BottomContent";
import Header from "../../components/navigation/Header";
import BottomBar from "../../components/navigation/BottomBar";

import { Box, Snackbar } from "@mui/material";
import { loginSuccess } from "../../redux/loginSlice";

import MuiAlert from "@mui/material/Alert";


const Home = () => {
  const [openAlert, setOpenAlert] = useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });

  const { currentUser } = useSelector((state) => state.login);
  

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  
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
          if (err?.response?.status === 403) {
            dispatch(loginSuccess(null));
            navigate("/tokenexpired");
            dispatch(isFetchingUser(false));
          } else {
            setOpenAlert(true);
            dispatch(getUserFailure());
            dispatch(isFetchingUser(false));
          }
        }
      };
      getUser();
    }
  }, [currentUser?.data?.token, dispatch, navigate]);

  return (
    <Box>
      <Header />
      <Box
        sx={{
          width: 450,
          margin: "auto",
          marginTop: 10,
          marginBottom: 3,
        }}
      >
        <TopContent isHome={true} />
        <BottomContent />
      </Box>
      <BottomBar currentPage={1} />
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

export default Home;
