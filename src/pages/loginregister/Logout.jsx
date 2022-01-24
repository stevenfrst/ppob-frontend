import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Logout = ()=>{
    const navigate = useNavigate()
    const home = ()=>{
        localStorage.clear()
        navigate("/")
        
    }
    const login = ()=>{
        localStorage.clear()
        navigate("/login")
    }
    return (
      
          <Box
            sx={{
              width: 450,
              margin: "auto",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              height: "100vh",
            }}
          >
            <Typography variant="h4">Berhasil Logout</Typography>
            <br />
            <Box sx={{display:'flex', alignItems:'center'}}>
            <Button variant="contained" onClick={() => login()}>
              Login
            </Button>
            <Typography sx={{marginLeft:1, marginRight:1}}>atau</Typography>
            <Button variant="contained" onClick={() => home()}>
              Home
            </Button>
            </Box>
            <Box>
        <img
          alt="process"
          src="./assets/undraw_season_change_f99v.svg"
          style={{ height: 300, width: 300 }}
        />
      </Box>
          </Box>
         
     
      );
}

export default Logout