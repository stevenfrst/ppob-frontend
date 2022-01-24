import CategoryCard from "../card/CategoryCard";

import { Box, Typography } from "@mui/material";

const TopContent = (props) => {
  const { isHome } = props;

  return (
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
          paddingTop: 3,
          paddingBottom: 3,
          borderRadius: 3,
          backgroundColor: "#113CFC",
          display: "flex",
        }}
      >
        <Box
          sx={{
            width: 225,
            height: 200,
            display: "flex",
            alignItems: "center",
            color: "white",
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
  );
};

export default TopContent;
