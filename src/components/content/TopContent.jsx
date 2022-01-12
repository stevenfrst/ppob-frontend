import { Box, Typography } from "@mui/material";

import CategoryCard from "../card/CategoryCard";

const TopContent = (props) => {
  const { isHome } = props;
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: 450,
            borderRadius: 3,
            backgroundColor: "#113CFC",
            paddingTop: 3,
            marginTop: 10,
            display: "flex",
            paddingBottom: 3,
          }}
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
            <Typography
              variant="h4"
              sx={{ fontWeight: "500", textAlign: "right" }}
            >
              Beli Voucher Jadi Mudah <br /> & <br />
              Aman
            </Typography>
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
              width="150px"
            />
          </Box>
        </Box>

        <CategoryCard isHome={isHome}></CategoryCard>
      </Box>
    </Box>
  );
};

export default TopContent;
