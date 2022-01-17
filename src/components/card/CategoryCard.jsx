import { useEffect, useState } from "react";
import { Box, Typography, CardActionArea } from "@mui/material";
import NumberInput from "../content/NumberInput";
import { ConfirmationNumber, FlashOn, PhoneInTalk } from "@mui/icons-material";
import History from "../content/History";
import { useLocation } from "react-router-dom";

const CategoryCard = (props) => {
  const { isHome } = props;
  const location = useLocation();
  const [currentButton, setCurrentButton] = useState(
    isHome
      ? null
      : location?.pathname === "/buypulsa"
      ? 1
      : location?.pathname === "/buyvoucher" || location?.pathname==="/buyvoucher/selectvoucher"
      ? 2
      : 3
  );
  const [openVoucher, setOpenVoucher] = useState(
    location?.pathname==='/buyvoucher' ||
    location?.pathname ==='/buyvoucher/selectvoucher'
  );
  const [openPulsa, setOpenPulsa] = useState(
    location?.pathname === "/buypulsa"
  );
  const [openListrik, setOpenListrik] = useState(location?.pathname==="/paypln");
  const [openHistory, setOpenHistory] = useState(true);
  const [type, setType] = useState(location?.pathname.slice(1));
  
  const handleOpen = (type) => {
    if (type === "buypulsa") {
      setOpenPulsa(!openPulsa);
      setOpenVoucher(false);
      setOpenListrik(false);
      setCurrentButton(1);
    } else if (type === "buyvoucher") {
      setOpenVoucher(!openVoucher);
      setOpenPulsa(false);
      setOpenListrik(false);
      setCurrentButton(2);
    } else {
      setOpenListrik(!openListrik);
      setOpenPulsa(false);
      setOpenVoucher(false);
      setCurrentButton(3);
    }
    setType(type);
  };

  
  useEffect(() => {
    if (openListrik || openVoucher || openPulsa) {
      setOpenHistory(false);
    } else {
      setOpenHistory(true);
    }
  }, [openListrik, openVoucher, openPulsa]);

  return (
    <Box>
      <Box
        sx={{
          paddingTop: 3,
          display: "flex",
          justifyContent: "center",
        }}
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
          onClick={() => handleOpen("buypulsa")}
        >
          <Box
            sx={currentButton === 1 ? { color: "yellow" } : { color: "white" }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <PhoneInTalk
                sx={{
                  width: 50,
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5">Pulsa</Typography>
            </Box>
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
          onClick={() => handleOpen("buyvoucher")}
        >
          <Box
            sx={currentButton === 2 ? { color: "yellow" } : { color: "white" }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <ConfirmationNumber
                sx={{
                  width: 50,
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </Box>

            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5">Voucher</Typography>
            </Box>
          </Box>
        </CardActionArea>
        <CardActionArea
          sx={{
            width: 140,
            height: 140,
            backgroundColor: "#113CFC",

            borderRadius: 3,
          }}
          onClick={() => handleOpen("paypln")}
        >
          <Box
            sx={currentButton === 3 ? { color: "yellow" } : { color: "white" }}
          >
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <FlashOn
                sx={{
                  width: 50,
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                }}
              />
            </Box>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5">PLN</Typography>
            </Box>
          </Box>
        </CardActionArea>
      </Box>
      {openPulsa ? <NumberInput type={type} /> : <div></div>}
      {openVoucher ? <NumberInput type={type} /> : <div></div>}
      {openListrik ? <NumberInput type={type} /> : <div></div>}
      {isHome ? openHistory ? <History /> : <div></div> : <div></div>}
    </Box>
  );
};

export default CategoryCard;
