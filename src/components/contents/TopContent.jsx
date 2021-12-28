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
    <div>
      <Box
        sx={(theme) => ({
          width: 450,
          backgroundColor: "#113CFC",
          paddingTop: 10,
          margin: "auto",
          display: "flex",
          [theme.breakpoints.down("sm")]: {
            width: "100vw",
          },
        })}
      >
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
            src="./assets/undraw_app_data_re_vg5c.svg"
            alt="phone logo"
            width="180px"
          />
        </Box>
        <Box
          sx={{
            width: 200,
            height: 200,
            color: "white",
            display: "flex",
            alignItems: "center",
            paddingLeft: 1,
          }}
        >
          <Typography variant="h4">Beli ini itu harus mudah</Typography>
        </Box>
      </Box>
      <Box
        sx={(theme) => ({
          backgroundColor: "#113CFC",
          width: 450,
          margin: "auto",
          textAlign: "center",
          color: "white",
          [theme.breakpoints.down("sm")]: {
            width: "100vw",
          },
        })}
      >
        <Typography variant="body">Beli</Typography>
      </Box>
      <Box
        sx={(theme) => ({
          width: 450,
          backgroundColor: "#113CFC",
          paddingTop: 3,
          margin: "auto",
          display: "flex",
          justifyContent: "center",
          paddingBottom: 5,
          [theme.breakpoints.down("sm")]: {
            width: "100vw",
          },
        })}
      >
        <CardActionArea
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "white",
            marginRight: 1,
            borderRadius: 3,
            display: "block",
          }}
          onClick={() => handleOpen("Pulsa")}
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
            <Typography>Pulsa</Typography>
          </Box>
        </CardActionArea>
        <CardActionArea
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "white",
            marginRight: 1,
            borderRadius: 3,
          }}
          onClick={() => handleOpen("Voucher")}
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
            <Typography>Voucher</Typography>
          </Box>
        </CardActionArea>
        <CardActionArea
          sx={{
            width: 100,
            height: 100,
            backgroundColor: "white",

            borderRadius: 3,
          }}
          onClick={() => handleOpen("Listrik")}
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
            <Typography>Listrik</Typography>
          </Box>
        </CardActionArea>
      </Box>
      {openInput ? <NumberInput type={type} /> : <div></div>}
    </div>
  );
};

export default TopContent;
