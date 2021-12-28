import { Login } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";

const NumberInput = (props) => {
  const { type } = props;

  return (
    <Box
      sx={(theme) => ({
        width: 450,
        backgroundColor: "#113CFC",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
        height: 70,
        color: "white",
        alignItems: "center",
        paddingBottom: 3,
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
          label={type === "Listrik" ? "No Pelanggan PLN" : "No Handphone"}
          variant="standard"
          defaultValue=" "
          sx={{ width: 250 }}
          inputProps={{ style: { color: "white" } }}
          InputLabelProps={{ style: { color: "white" } }}
          SelectProps={{ style: { color: "white" } }}
        />
        <Login />
      </Box>
    </Box>
  );
};

export default NumberInput;
