import { Box, Link, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import { yellow } from "@mui/material/colors";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { register } from "../redux/apiCall";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    phone_number: "",
  });
  const dispatch = useDispatch();

  const ColorButton = styled(Button)(({ theme }) => ({
    color: "#113CFC",
    fontWeight: "bold",
    width: "320px",
    padding: "10px",
    borderRadius: "10px",
    marginBottom: "10px",
    backgroundColor: yellow[500],
    "&:hover": {
      backgroundColor: yellow[700],
    },
  }));
  const onChange = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };
  const handleSubmit = (e) => {
    if (data.username && data.email && data.password && data.phone_number) {
      const newData = {
        username: data.username,
        email: data.email,
        password: data.password,
        phone_number: data.phone_number,
      };
      register(dispatch, newData, navigate);
    } else {
      e.preventDefault();
    }
  };
  return (
    <Box
      sx={(theme) => ({
        width: 450,
        backgroundColor: "#113CFC",
        margin: "auto",
        color: "white",
        textAlign: "center",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        [theme.breakpoints.down("sm")]: {
          width: "100vw",
        },
        flexDirection: "column",
      })}
    >
      <Typography variant="h3" style={{ marginBottom: "30px" }}>
        Register
      </Typography>
      <Box sx={{ textAlign: "right" }}>
        <Typography
          variant="body2"
          sx={{ color: "yellow", fontWeight: "bold" }}
        >
          Error Message
        </Typography>
        <input
          style={{
            height: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
            padding: "10px",
            borderColor: "transparent",
            width: "300px",
          }}
          type="text"
          name="username"
          value={data.username}
          placeholder="Username"
        />
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Typography
          variant="body2"
          sx={{ color: "yellow", fontWeight: "bold" }}
        >
          Error Message
        </Typography>
        <input
          style={{
            height: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
            padding: "10px",
            borderColor: "transparent",
            width: "300px",
          }}
          type="text"
          name="phone_number"
          value={data.phone_number}
          placeholder="Nomor Handphone"
        />
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Typography
          variant="body2"
          sx={{ color: "yellow", fontWeight: "bold" }}
        >
          Error Message
        </Typography>
        <input
          style={{
            height: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
            padding: "10px",
            borderColor: "transparent",
            width: "300px",
          }}
          type="text"
          name="email"
          value={data.email}
          placeholder="Email"
        />
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Typography
          variant="body2"
          sx={{ color: "yellow", fontWeight: "bold" }}
        >
          Error Message
        </Typography>
        <input
          style={{
            height: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
            padding: "10px",
            borderColor: "transparent",
            width: "300px",
          }}
          type="text"
          name="password"
          value={data.password}
          placeholder="Password"
        />
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Typography
          variant="body2"
          sx={{ color: "yellow", fontWeight: "bold" }}
        >
          Error Message
        </Typography>
        <input
          style={{
            height: "20px",
            marginBottom: "20px",
            borderRadius: "10px",
            padding: "10px",
            borderColor: "transparent",
            width: "300px",
          }}
          type="text"
          name="username"
          placeholder="Ulangi Password"
        />
      </Box>

      <ColorButton onClick={(e) => handleSubmit(e)}>Register</ColorButton>
      <Typography>
        Sudah punya akun?{" "}
        <Link
          underline="hover"
          style={{ color: "yellow", fontWeight: "bold" }}
          onClick={() => navigate("/login")}
        >
          Login
        </Link>
      </Typography>
    </Box>
  );
};

export default Register;
