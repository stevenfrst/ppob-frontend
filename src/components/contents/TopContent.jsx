import { Box, Typography, CardActionArea } from "@mui/material";
import { useState } from "react";

import NumberInput from "./NumberInput";
import { ConfirmationNumber, FlashOn, PhoneInTalk } from "@mui/icons-material";

const TopContent = () => {
  const [openInput, setOpenInput] = useState(false);
  const [type, setType] = useState("");
  const handleOpen = (type) => {
    setOpenInput(true);
    setType(type);
  };
  console.log("type", type);
  return (
    <Box sx={{ display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <Box
        sx={(theme) => ({
          width: 450,
          borderRadius:3,
          backgroundColor: "#113CFC",
          paddingTop: 3,
          marginTop:10,
          display: "flex",
          paddingBottom:3,
          [theme.breakpoints.down("sm")]: {
            width: "100vw",
          },
        })}
      >
        
        <Box
          sx={{
            width: 225,
            height: 200,
            color: "white",
            display: "flex",
            alignItems: "center",
            paddingLeft: 1,
          }}
        >
          <Typography variant="h4" sx={{fontWeight:'500', textAlign:'right'}}>Beli Voucher Jadi Mudah <br/> & <br/>Aman</Typography>
        </Box>
        <Box
          sx={{
            width: 200,
            height: 200,
            marginLeft: "25px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <img
            src="./assets/undraw_credit_card_re_blml 1.svg"
            alt="phone logo"
            width="180px"
          />
        </Box>
      </Box>
      
      <Box
        sx={(theme) => ({
          width: 450,
          paddingTop: 3,
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          [theme.breakpoints.down("sm")]: {
            width: "100vw",
          },
        })}
      >
        <CardActionArea
          sx={{
            width: 140,
            height: 140,
            backgroundColor: "#113CFC",
            marginRight: 2,
            borderRadius: 3,
            display: "block",
          }}
          onClick={() => handleOpen("Pulsa")}
        >
          <Box sx={{ display: "flex", justifyContent: "center", color:'white' }}>
            <PhoneInTalk
              sx={{
                width: 50,
                height: 50,
                display: "flex",
                justifyContent: "center",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", color:'white' }}>
            <Typography>Pulsa</Typography>
          </Box>
        </CardActionArea>
        <CardActionArea
          sx={{
            width: 140,
            height: 140,
            backgroundColor: "#113CFC",
            marginRight: 2,
            borderRadius: 3,
          }}
          onClick={() => handleOpen("Voucher")}
        >
          <Box sx={{ display: "flex", justifyContent: "center", color:'white' }}>
            <ConfirmationNumber
              sx={{
                width: 50,
                height: 50,
                display: "flex",
                justifyContent: "center",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", color:'white' }}>
            <Typography>Voucher</Typography>
          </Box>
        </CardActionArea>
        <CardActionArea
          sx={{
            width: 140,
            height: 140,
            backgroundColor: "#113CFC",

            borderRadius: 3,
          }}
          onClick={() => handleOpen("Listrik")}
        >
          <Box sx={{ display: "flex", justifyContent: "center", color:'white' }}>
            <FlashOn
              sx={{
                width: 50,
                height: 50,
                display: "flex",
                justifyContent: "center",
              }}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", color:'white' }}>
            <Typography>Listrik</Typography>
          </Box>
        </CardActionArea>
      </Box>
      {openInput ? <NumberInput type={type} /> : <div></div>}
    </Box>
  );
};

export default TopContent;
