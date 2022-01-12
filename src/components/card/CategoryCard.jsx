import { useEffect, useState } from "react";
import { Box, Typography, CardActionArea } from "@mui/material";
import NumberInput from "../content/NumberInput";
import { ConfirmationNumber, FlashOn, PhoneInTalk } from "@mui/icons-material";
import History from "../content/History";

const CategoryCard = (props) => {
  const { isHome } = props;
  const [currentButton, setCurrentButton] = useState(null);
  const [openVoucher, setOpenVoucher] = useState(false);
  const [openPulsa, setOpenPulsa] = useState(false);
  const [openListrik, setOpenListrik] = useState(false);
  const [openHistory, setOpenHistory] = useState(true);
  const [type, setType] = useState("");
  const handleOpen = (type) => {
    if (type === "Pulsa") {
      setOpenPulsa(!openPulsa);
      setOpenVoucher(false);
      setOpenListrik(false);
      setCurrentButton(1);
    } else if (type === "Voucher") {
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
          onClick={() => handleOpen("Pulsa")}
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
          onClick={() => handleOpen("Voucher")}
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
          onClick={() => handleOpen("Listrik")}
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
