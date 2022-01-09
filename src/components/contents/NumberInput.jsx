import { Login } from "@mui/icons-material";
import { Box, TextField } from "@mui/material";
import { Link } from "react-router-dom";

const NumberInput = (props) => {
  const { type } = props;

  return (
    <Box sx={{marginTop:3, width:450}}>
      <Box component='span' sx={{ border:1, borderColor:'#113CFC',padding:0.5, borderStyle:'solid', backgroundColor:"#113CFC", color:'white',  borderRadius:2, fontWeight:'bold'}}>{type==="Listrik"?"Isi Nomor Pelanggan PLN":"Isi Nomor Handphone"}</Box>

    <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', mt:2, width:450}}>
    <Box
      sx={(theme) => ({
        width: 446,
        backgroundColor: "white",
        borderRadius:5,
        borderStyle:'solid',
        borderColor:'#113CFC',
        display: "flex",
        justifyContent: "space-between",
        height: 70,
        color: "white",
        alignItems: "center",
        paddingTop:1,
        paddingBottom:1,
        
        [theme.breakpoints.down("sm")]: {
          width: "100vw",
        },
      })}
    >
      
      <Box
        sx={{
          width: 300,
          ml:2
        }}
      >
        <TextField
          id="standard-basic"
          variant="standard"
          defaultValue=" "
          sx={{ width: 350 }}
          inputProps={{ style: { color: "Black", fontSize:"25px" } }}
          InputLabelProps={{ style: { color: "Black" } }}
          SelectProps={{ style: { color: "white" } }}
        />
      </Box>
      <Box sx={{mr:2}}>
      <Link to="login" style={{ color: "black" }}>
                <Login />
              </Link>
      </Box>
    </Box>
    </Box>
    </Box>
  );
};

export default NumberInput;
