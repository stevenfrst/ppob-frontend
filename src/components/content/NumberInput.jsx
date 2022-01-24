import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { saveInputPhoneNumber, saveInputPLN } from "../../redux/userLogSlice";

import { Login } from "@mui/icons-material";
import { Box, IconButton, TextField, Typography } from "@mui/material";

const NumberInput = (props) => {
  const { type } = props;

  const { inputPhoneNumber } = useSelector((state) => state.userLog);
  const { inputPLN } = useSelector((state) => state.userLog);

  const [input, setInput] = useState(
    type !== "paypln" ? inputPhoneNumber : inputPLN
  );

  const [error, setError] = useState("");

  const dispatch = useDispatch();

  const regexPhone = /^08[1-9][0-9]{6,9}$/;

  const link = "/" + type;

  const navigate = useNavigate();

  const handleChange = (e) => {
    setInput(e.target.value);
    setError("");
  };

  const handleClick = () => {
    if (type !== "paypln") {
      if (!input) {
        setError("Input masih kosong");
      } else if (!regexPhone.test(input)) {
        setError("Gunakan Format 08xxxx");
      } else if (error === "") {
        dispatch(saveInputPhoneNumber(input));
        navigate(link);
      }
    } else {
      if (!input) {
        setError("Input masih kosong");
      } else if (error === "") {
        dispatch(saveInputPLN(input));
        navigate(link);
      }
    }
  };

  return (
    <Box sx={{ width: 450, marginTop: 3 }}>
      <Box
        component="span"
        sx={{
          padding: 0.5,
          border: 1,
          borderRadius: 2,
          borderColor: "#113CFC",
          borderStyle: "solid",
          backgroundColor: "#113CFC",
          color: "white",
          fontWeight: "bold",
        }}
      >
        {type === "paypln" ? "Isi Nomor Pelanggan PLN" : "Isi Nomor Handphone"}
      </Box>

      <Box
        sx={{
          width: 450,
          mt: 2,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            marginLeft: "auto",
            marginRight: 2,
            fontWeight: "bold",
            color: "red",
          }}
        >
          {error}
        </Typography>
        <Box
          sx={{
            width: 450,
            height: 70,
            paddingTop: 1,
            paddingBottom: 1,
            backgroundColor: "white",
            borderRadius: 5,
            borderWidth: 1,
            borderStyle: "solid",
            borderColor: "#113CFC",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "white",
          }}
          style={error ? { borderColor: "red" } : { borderColor: "#113CFC" }}
        >
          <Box
            sx={{
              width: 300,
              ml: 2,
            }}
          >
            {error ? (
              <TextField
                error
                variant="standard"
                defaultValue={input}
                sx={{ width: 350 }}
                inputProps={{ style: { color: "black", fontSize: "25px" } }}
                InputLabelProps={{ style: { color: "black" } }}
                SelectProps={{ style: { color: "white" } }}
                onChange={(e) => handleChange(e)}
              />
            ) : (
              <TextField
                id="standard-basic"
                variant="standard"
                defaultValue={input}
                sx={{ width: 350 }}
                inputProps={{ style: { color: "black", fontSize: "25px" } }}
                InputLabelProps={{ style: { color: "black" } }}
                SelectProps={{ style: { color: "white" } }}
                onChange={(e) => handleChange(e)}
              />
            )}
          </Box>
          <Box sx={{ mr: 2 }}>
            <IconButton
              style={error ? { color: "red" } : { color: "black" }}
              onClick={() => handleClick()}
            >
              <Login />
            </IconButton>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default NumberInput;
