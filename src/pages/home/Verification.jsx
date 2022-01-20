import { Box, Button, CircularProgress, FormControl, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";
import BottomBar from "../../components/navigation/BottomBar";
import Header from "../../components/navigation/Header";

const Verification = () => {
  const [loading, setLoading] = useState(false);
  const { currentUser } = useSelector((state) => state.login);
  const [error, setError] = useState("");
  const [pin, setPin] = useState(0);
  const navigate = useNavigate();
  const _isMounted = useRef(true);
  const {userData} = useSelector((state)=>state.user)
  
  useEffect(() => {
    return () => {
      _isMounted.current = false;
    };
  });
  const handleSubmit = (pin) => {
    setLoading(true);
    axios
      .post(
        `https://api.stevenhoyo.co/v1/user/verify/${pin}`,
        {},
        {
          headers: { Authorization: `Bearer ${currentUser?.data?.token}` },
        }
      )
      .then((res) => {
     
        if (res?.data?.data === "not match") {
          setError("Not Match");
          setLoading(false)
         
        } else {
          navigate("/user");
         
          
          setLoading(false)
        }
      })
      .catch((err) => {
  
        setError(err);
        setLoading(false);
       
      });
  };
  if(loading){
    return(
      <Box>
      <Header></Header>
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
          <CircularProgress/>
        </Box>
        <BottomBar/>
        </Box>
    
    )
  }
  if (userData?.data?.is_verified){
    return(
       <Navigate to="/user" />
    )
  }
  return (
    <Box>
      <Header></Header>
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
        <FormControl>
          <Typography sx={{ marginBottom: 2 }}>
            Masukkan Code yang Dikirimkan ke Email Anda
          </Typography>
          <TextField
            id="outlined-basic"
            label="Code"
            variant="outlined"
            sx={{marginBottom:1}}
            onChange={(e) => setPin(e.target.value)}
          />
          {error==="Not Match"?<Typography sx={{color:'red',  marginBottom: 2 }}>Code Tidak Sama</Typography>:<></>}
          <Button variant="contained" onClick={() => handleSubmit(pin)}>
            Submit
          </Button>
        </FormControl>
      </Box>
      <BottomBar />
    </Box>
  );
};

export default Verification;
