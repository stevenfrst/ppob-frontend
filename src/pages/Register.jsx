import { Box, Link, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

import { yellow } from "@mui/material/colors";

import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/apiCall";

const Register = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    username:'',
    email:'',
    password:'',
    phone_number:'',
  })
  const dispatch = useDispatch();
  const {input, isPosting, error } = useSelector((state)=>state.register)
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
  const onChange = (event) =>{
    setData({...data,[event.target.name]:event.target.value})
  }
  const handleSubmit = (e) =>{
    
    if (data.username&&data.email&&data.password&&data.phone_number){
      const newData = {
        username : data.username,
        email : data.email,
        password : data.password,
        phone_number : data.phone_number
      }
      register(dispatch, newData, navigate)
    } else{
      e.preventDefault()
    }
    
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
          <Typography variant="h3">Register</Typography>
          <br />
          <input
            type="text"
            placeholder="Username"
            style={{
              height: "20px",
              marginBottom: "10px",
              borderRadius: "20px",
              padding: "10px",
            }}
            size="50"
            name= "username"
            value = {data.username}
            onChange={onChange}
          />
          <br />
          <input
            type="text"
            placeholder="Nomor Handphone"
            style={{
              height: "20px",
              borderRadius: "20px",
              padding: "10px",
              marginBottom: "10px",
            }}
            size="50"
            name="phone_number"
            value={data.phone_number}
            onChange={onChange}
          />
          <input
            type="text"
            placeholder="Email"
            style={{
              height: "20px",
              marginBottom: "10px",
              borderRadius: "20px",
              padding: "10px",
            }}
            size="50"
            name="email"
            value = {data.email}
            onChange={onChange}

          />
          <br />
          <input
            type="text"
            placeholder="Password"
            style={{
              height: "20px",
              borderRadius: "20px",
              padding: "10px",
              marginBottom: "10px",
            }}
            size="50"
            name="password"
            value={data.password}
            onChange={onChange}
            
          />
         

          <ColorButton onClick={(e)=>handleSubmit(e)}>
            <span style={{ color: "#113CFC" }}>Register</span>
          </ColorButton>
          <Typography>
            Sudah punya akun?{" "}
            <Link
              underline="hover"
              style={{ color: "yellow" }}
              onClick={() => navigate("/login")}
            >
              Login
            </Link>
          </Typography>
        </div>
      </Box>
    </div>
  );
};

export default Register;
