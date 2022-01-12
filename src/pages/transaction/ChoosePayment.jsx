import { Box, CardActionArea, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import OrderIdCard from "../../components/card/OrderIdCard";
import Header2 from "../../components/navigation/Header2";
import Text from "../../components/typography/Text";
const ChoosePayment = () => {
  const [selectedValue, setSelectedValue] = useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  return (
    <Box>
      <Header2></Header2>
      <Box
        sx={{
          width: 450,
          display: "flex",
          margin: "auto",
          flexDirection: "column",
        }}
      >
        <Box sx={{ margin: "auto", marginTop: 10 }}>
          <img
            alt="savings"
            src="./assets/undraw_savings_re_eq4w.svg"
            style={{ width: "200px", height: "200px" }}
          />
        </Box>
        <Box></Box>
        <Box>
          <Text text="Order ID" />
        </Box>
        <OrderIdCard></OrderIdCard>
        <Box>&nbsp;</Box>
        <Box>
          <Text text="Pilih Pembayaran" />
        </Box>
        <Box sx={{ marginTop: 1 }}>
          <Box
            sx={{
              display: "flex",
              marginTop: 3,
              flexDirection: "column",
              width: 450,
              borderBottom: 1,
              borderColor: "rgba(0,0,0,30%)",
              paddingBottom: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box></Box>
              <Box
                sx={{
                  width: "45px",
                  height: "45px",
                  background: "url(./assets/bca.png)",
                  borderRadius: 3,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "100%",
                  marginRight: 3,
                  marginLeft: 3,
                }}
              ></Box>
              <Box>
                <Typography variant="h6">Virtual Account BCA</Typography>
              </Box>
              <Box sx={{ marginLeft: "auto" }}>
                <Radio
                  checked={selectedValue === "a"}
                  onChange={handleChange}
                  value="a"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "A" }}
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: 3,
              width: 450,
              borderBottom: 1,
              borderColor: "rgba(0,0,0,30%)",
              paddingBottom: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box></Box>
              <Box
                sx={{
                  width: "45px",
                  height: "45px",
                  background: "url(./assets/bca.png)",
                  borderRadius: 3,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "100%",
                  marginRight: 3,
                  marginLeft: 3,
                }}
              ></Box>
              <Box>
                <Typography variant="h6">Virtual Account BCA</Typography>
              </Box>
              <Box sx={{ marginLeft: "auto" }}>
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: 3,
              width: 450,
              borderBottom: 1,
              borderColor: "rgba(0,0,0,30%)",
              paddingBottom: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box></Box>
              <Box
                sx={{
                  width: "45px",
                  height: "45px",
                  background: "url(./assets/bca.png)",
                  borderRadius: 3,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "100%",
                  marginRight: 3,
                  marginLeft: 3,
                }}
              ></Box>
              <Box>
                <Typography variant="h6">Virtual Account BCA</Typography>
              </Box>
              <Box sx={{ marginLeft: "auto" }}>
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              marginTop: 3,
              width: 450,
              borderBottom: 1,
              borderColor: "rgba(0,0,0,30%)",
              paddingBottom: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Box></Box>
              <Box
                sx={{
                  width: "45px",
                  height: "45px",
                  background: "url(./assets/bca.png)",
                  borderRadius: 3,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "100%",
                  marginRight: 3,
                  marginLeft: 3,
                }}
              ></Box>
              <Box>
                <Typography variant="h6">Virtual Account BCA</Typography>
              </Box>
              <Box sx={{ marginLeft: "auto" }}>
                <Radio
                  checked={selectedValue === "b"}
                  onChange={handleChange}
                  value="b"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "B" }}
                  sx={{
                    color: "black",
                    "&.Mui-checked": {
                      color: "black",
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Box>

        <CardActionArea
          sx={{
            height: 70,
            marginTop: 10,
            backgroundColor: "#113CFC",
            color: "white",
            padding: 3,
            display: "flex",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              borderRight: 1,
              paddingRight: 3,
              height: 50,
              display: "flex",
              alignItems: "center",
            }}
          >
            <Typography variant="h5">Rp. 20.000</Typography>
          </Box>
          <Box sx={{ marginLeft: "auto", display: "flex" }}>
            <Typography variant="h4" sx={{ marginRight: 2 }}>
              Checkout
            </Typography>
            <img alt="next" src="./assets/nextbutton.png" />
          </Box>
        </CardActionArea>
      </Box>
    </Box>
  );
};

export default ChoosePayment;
