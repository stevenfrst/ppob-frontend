//mui
import { Box, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { yellow } from "@mui/material/colors";

//react and redux
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//call backend
import { register } from "../../redux/loginRegisterApi";

const Register = () => {
  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    phone_number: "",
    repassword: "",
  });
  const [errMsg, setErrMsg] = useState({
    username: "",
    email: "",
    password: "",
    phone_number: "",
    repassword: "",
  });
  const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
  const regexPhone = /^08[1-9][0-9]{6,9}$/;

  const dispatch = useDispatch();
  const { registerError } = useSelector((state) => state.error);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "username") {
      if (!value) {
        setErrMsg({ ...errMsg, [name]: "Username masih kosong" });
      } else {
        setErrMsg({ ...errMsg, [name]: "" });
      }
      setData({ ...data, [name]: value });
    }

    if (name === "email") {
      if (!value) {
        setErrMsg({ ...errMsg, [name]: "Email masih kosong" });
      } else if (!regexEmail.test(value)) {
        setErrMsg({ ...errMsg, [name]: "Format email salah" });
      } else {
        setErrMsg({ ...errMsg, [name]: "" });
      }
      setData({ ...data, [name]: value });
    }
    if (name === "phone_number") {
      if (!value) {
        setErrMsg({ ...errMsg, [name]: "Nomor HP masih kosong" });
      } else if (!regexPhone.test(value)) {
        setErrMsg({
          ...errMsg,
          [name]: "Gunakan Format 08xxxx",
        });
      } else {
        setErrMsg({ ...errMsg, [name]: "" });
      }
      setData({ ...data, [name]: value });
    }

    if (name === "password") {
      if (!value) {
        setErrMsg({ ...errMsg, [name]: "Password masih kosong" });
      } else {
        setErrMsg({ ...errMsg, [name]: "" });
      }
      setData({ ...data, [name]: value });
    }

    if (name === "repassword") {
      if (!value) {
        setErrMsg({ ...errMsg, [name]: "Masukkan kembali password" });
      } else if (value !== data.password) {
        setErrMsg({ ...errMsg, [name]: "Password tidak sama" });
      } else {
        setErrMsg({ ...errMsg, [name]: "" });
      }
      setData({ ...data, [name]: value });
    }
  };

  const navigate = useNavigate();

  const handleClick = () => {
    if (
      !data.username &&
      !data.phone_number &&
      !data.email &&
      !data.password &&
      !data.repassword
    ) {
      setErrMsg({
        ...errMsg,
        username: "Username masih kosong",
        phone_number: "Nomor HP masih kosong",
        email: "Email masih kosong",
        password: "Password masih kosong",
        repassword: "Masukkan kembali password",
      });
    } else if (data.username === "") {
      setErrMsg({ ...errMsg, username: "Usename masih kosong" });
    } else if (data.phone_number === "") {
      setErrMsg({ ...errMsg, phone_number: "Nomor HP masih kosong" });
    } else if (data.email === "") {
      setErrMsg({ ...errMsg, email: "Email masih kosong" });
    } else if (data.password === "") {
      setErrMsg({ ...errMsg, password: "Password masih kosong" });
    } else if (data.repassword === "") {
      setErrMsg({ ...errMsg, repassword: "Masukkan kembali password" });
    } else if (
      !errMsg.username &&
      !errMsg.phone_number &&
      !errMsg.email &&
      !errMsg.password &&
      !errMsg.repassword
    ) {
      register(dispatch, data, navigate);
    }
  };

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

  useEffect(() => {
    if (registerError === "duplicate") {
      setErrMsg((e) => {
        return { ...e, email: "Email sudah dipakai" };
      });
    } else if (registerError === "invalid email") {
      setErrMsg((e) => {
        return { ...e, email: "Format email salah" };
      });
    }
  }, [registerError]);

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
          {errMsg.username}
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
          onChange={(e) => handleChange(e)}
        />
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Typography
          variant="body2"
          sx={{ color: "yellow", fontWeight: "bold" }}
        >
          {errMsg.phone_number}
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
          onChange={(e) => handleChange(e)}
        />
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Typography
          variant="body2"
          sx={{ color: "yellow", fontWeight: "bold" }}
        >
          {errMsg.email}
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
          onChange={(e) => handleChange(e)}
        />
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Typography
          variant="body2"
          sx={{ color: "yellow", fontWeight: "bold" }}
        >
          {errMsg.password}
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
          type="password"
          name="password"
          value={data.password}
          placeholder="Password"
          onChange={(e) => handleChange(e)}
        />
      </Box>
      <Box sx={{ textAlign: "right" }}>
        <Typography
          variant="body2"
          sx={{ color: "yellow", fontWeight: "bold" }}
        >
          {errMsg.repassword}
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
          type="password"
          name="repassword"
          value={data.repassword}
          placeholder="Ulangi Password"
          onChange={(e) => handleChange(e)}
        />
      </Box>

      <ColorButton onClick={() => handleClick()}>Register</ColorButton>
      <Typography sx={{ marginBottom: 1 }}>
        {registerError === 500 ? (
          "Terjadi kesalahan, silahkan coba lagi"
        ) : (
          <></>
        )}
      </Typography>
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
