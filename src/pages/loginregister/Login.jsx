//mui
import { Box, Link, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import { yellow } from "@mui/material/colors";

//react and redux
import { Navigate, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

//check token
import { TOKEN } from "../../requestMethod";

//call backend
import { login } from "../../redux/loginRegisterApi";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState({ email: "", password: "" });
  const regexEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

  const dispatch = useDispatch();
  const { isfetching } = useSelector((state) => state.login);
  const { loginError } = useSelector((state) => state.error);

  const bodyForm = new FormData();

  const navigate = useNavigate();

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      if (!value) {
        setErrMsg({ ...errMsg, [name]: "Email masih kosong" });
      } else if (!regexEmail.test(value)) {
        setErrMsg({ ...errMsg, [name]: "Format email salah" });
      } else {
        setErrMsg({ ...errMsg, [name]: "" });
      }
      setEmail(e.target.value);
    }

    if (name === "password") {
      if (!value) {
        setErrMsg({ ...errMsg, [name]: "Password masih kosong" });
      } else {
        setErrMsg({ ...errMsg, [name]: "" });
      }
      setPassword(e.target.value);
    }
  };

  const handleClick = () => {
    if (email === "" && password === "") {
      setErrMsg({
        ...errMsg,
        email: "Email masih kosong",
        password: "Password masih kosong",
      });
    } else if (email === "") {
      setErrMsg({ ...errMsg, email: "Email masih kosong" });
    } else if (password === "") {
      setErrMsg({ ...errMsg, password: "Password masih kosong" });
    } else if (!errMsg.password && !errMsg.email) {
      bodyForm.append("email", email);
      bodyForm.append("password", password);
      login(dispatch, bodyForm, navigate);
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
    if (loginError === "204") {
      setErrMsg((e) => {
        return { ...e, email: "Email belum terdaftar" };
      });
    } else if (loginError === "401") {
      setErrMsg((e) => {
        return { ...e, password: "Password salah" };
      });
    } else if (loginError === "400") {
      setErrMsg((e) => {
        return { ...e, email: "Format email salah" };
      });
    }
  }, [loginError]);

  if (TOKEN) {
    return <Navigate to="/" />;
  }

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
        Login
      </Typography>

      <Box sx={{ textAlign: "left" }}>
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
          value={email}
          onChange={(e) => handleChange(e)}
          placeholder="Email"
        />
      </Box>

      <Box sx={{ textAlign: "left" }}>
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
          value={password}
          placeholder="Password"
          onChange={(e) => handleChange(e)}
        />
      </Box>

      <ColorButton disabled={isfetching} onClick={() => handleClick()}>
        Login
      </ColorButton>
      <Typography sx={{ marginBottom: 1 }}>
        {loginError === "unkown" ? (
          "Terjadi kesalahan, silahkan coba lagi"
        ) : (
          <></>
        )}
      </Typography>
      <Typography>
        Belum punya akun?{" "}
        <Link
          underline="hover"
          style={{ color: "yellow", fontWeight: "bold" }}
          onClick={() => navigate("/register")}
        >
          Register
        </Link>
      </Typography>
    </Box>
  );
};

export default Login;
