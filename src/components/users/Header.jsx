import {  Toolbar, Typography } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import { Chat,  } from "@mui/icons-material";
import { Box } from "@mui/material";
const Header = () => {
  return (
    <AppBar sx={{backgroundColor:'#113CFC'}}>
      <Toolbar sx={{display:'flex', justifyContent:'center'}}>
        <Box sx={{display:'flex', alignItems:'center', width:450}}>
            <Typography variant="h5">Hello</Typography>
            <Chat sx={{marginLeft:'auto'}}></Chat>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
