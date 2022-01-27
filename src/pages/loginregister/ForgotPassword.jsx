import { Box, Button, TextField, Typography, Snackbar, CircularProgress } from "@mui/material";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import MuiAlert from "@mui/material/Alert";

import axios from "axios";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false)
  const [errMsg, setErrMsg] = useState("");
  const navigate = useNavigate();
  const _isMounted = useRef(true);
  const [openAlert, setOpenAlert] = useState(false);
  const Alert = React.forwardRef(function Alert(props, ref) {
    return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
  });
  useEffect(() => {
    return () => {
      _isMounted.current = false;
    };
  }, []);
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenAlert(false);
  };
  const handleClick = () => {
    if (email === "") {
      setErrMsg("Email Masih Kosong");
    } else{
        setLoading(true);
    axios
      .post("https://api.stevenhoyo.co/v1/user/reset", {email:email})
      .then(() => {
        if (_isMounted) {
          navigate("/login");
          setLoading(false);
        }
      })
      .catch((err) => {
        if (_isMounted) {
            setOpenAlert(true)
            setLoading(false);
        }
      })};
  };
  return (
    <Box
      sx={{
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
        {loading?<CircularProgress/>:
        <>
      <TextField
        id="filled-basic"
        label="Silahkan Masukkan Email Anda"
        variant="filled"
        size="large"
        onChange={(e) => setEmail(e.target.value)}
      />
      <Typography variant="body2" sx={{ color: "red" }}>
        {errMsg}
      </Typography>
      <br />
      <Button variant="contained" onClick={() => handleClick()}>
        Kirim Password Baru
      </Button>
      <br/>
      <Typography variant="body2" sx={{fontStyle:'italic'}}>*masukkan password baru yang dikirimkan ke email ketika login</Typography>
      <Snackbar
        open={openAlert}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          Email Tidak Ditemukan
        </Alert>
      </Snackbar>
      </>}
    </Box>
  );
};
