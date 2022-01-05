import { Login } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const NumberInput = (props) => {
  const { type } = props;

  return (
    <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', marginTop:3}}>
    <Box
      sx={(theme) => ({
        width: 450,
        backgroundColor: "white",
        borderRadius:3,
        borderStyle:'solid',
        borderColor:'#113CFC',
        display: "flex",
        justifyContent: "center",
        height: 70,
        color: "white",
        alignItems: "center",
        paddingBottom: 1,
        paddingTop:1,
        [theme.breakpoints.down("sm")]: {
          width: "100vw",
        },
      })}
    >
      <Box
        sx={{
          width: 300,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <TextField
          id="standard-basic"
          label={type === "Listrik" ? "Isi No Pelanggan PLN" : "Isi No Handphone"}
          variant="standard"
          defaultValue=" "
          sx={{ width: 350 }}
          inputProps={{ style: { color: "Black" } }}
          InputLabelProps={{ style: { color: "Black" } }}
          SelectProps={{ style: { color: "white" } }}
        />
        <Link to="login" style={{ color: "black" }}>
                <Login />
              </Link>
      </Box>
    </Box>
    </Box>
  );
};

export default NumberInput;
