import { Box, Typography } from "@mui/material";

import BuyCard from "./BuyCard";

const TopContent = (props) => {
  const {isHome} = props
  return (
    <Box>
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
      
    <BuyCard isHome={isHome}></BuyCard>
    </Box>
    </Box>
  );
};

export default TopContent;
