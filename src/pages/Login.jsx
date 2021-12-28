import { Box, Link, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import { yellow } from "@mui/material/colors";

import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/apiCall";
import { TOKEN } from "../requestMethod";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isfetching, error, currentUser } = useSelector((state) => state.user);
  const bodyForm = new FormData();
  const handleClick = (e) => {
    bodyForm.append("email", email);
    bodyForm.append("password", password);
    login(dispatch, bodyForm, navigate);
  };
  console.log(currentUser);
  console.log("error", error);
  console.log("token", currentUser?.data?.token);
  const navigate = useNavigate();
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(yellow[500]),
    width: 385,
    borderRadius: "20px",
    marginBottom: "10px",
    backgroundColor: yellow[500],
    "&:hover": {
      backgroundColor: yellow[700],
    },
  }));
  if (TOKEN) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <Box
        sx={{
          width: 450,
          backgroundColor: "#113CFC",
          margin: "auto",
          color: "white",
          textAlign: "center",
          height: "100vh",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div style={{ display: "block", margin: "auto" }}>
          <Typography variant="h3">Login</Typography>
          <br />
          <input
            type="text"
            placeholder="email"
            style={{
              height: "20px",
              marginBottom: "10px",
              borderRadius: "20px",
              padding: "10px",
            }}
            size="50"
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <input
            type="text"
            placeholder="password"
            style={{
              height: "20px",
              borderRadius: "20px",
              padding: "10px",
              marginBottom: "10px",
            }}
            size="50"
            onChange={(e) => setPassword(e.target.value)}
          />
          <ColorButton disabled={isfetching} onClick={(e) => handleClick(e)}>
            <span style={{ color: "#113CFC" }}>Login</span>
          </ColorButton>
          {error && <p>Email atau password salah</p>}
          <Typography>
            Belum punya akun?{" "}
            <Link
              underline="hover"
              style={{ color: "yellow" }}
              onClick={() => navigate("/register")}
            >
              Register
            </Link>
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default Login;
