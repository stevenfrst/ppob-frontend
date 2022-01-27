import { Typography, Box, Button } from "@mui/material";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginSuccess } from "../../redux/loginSlice";

const InvalidToken = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(loginSuccess(null));
  },[dispatch])
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Typography>Sesi telah habis, silahkan login lagi</Typography>
      <br />
      <Button variant="contained" onClick={() => navigate("/login")}>
        Login
      </Button>
    </Box>
  );
};

export default InvalidToken;
