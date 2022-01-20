import { Alert, Box, CardActionArea, Snackbar, Typography } from "@mui/material";
import Radio from "@mui/material/Radio";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import OrderIdCard from "../../components/card/OrderIdCard";
import Header2 from "../../components/navigation/Header2";
import Text from "../../components/typography/Text";
import { useDispatch, useSelector } from "react-redux";
import {createTransaction} from "../../redux/transactionApi"
import { setOrderIDPayment } from "../../redux/userLogSlice";
const ChoosePayment = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const {selectedProduct} = useSelector((state)=>state.userLog)
  const dispatch = useDispatch()
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  let totalPrice = numberWithCommas(selectedProduct?.price + selectedProduct?.tax);
  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };
  const {currentUser} = useSelector((state)=>state.login)
  const {orderID} = useSelector((state)=>state.userLog)
  const [openSnackBar, setOpenSnackBar]= useState(false)
  const {createTransactionError} = useSelector((state)=>state.error)
  const data = {
    product_id:selectedProduct?.id,
    discount:0,
    tax:selectedProduct?.tax,
    subtotal:selectedProduct?.price,
    bank: selectedValue,
    order_id:parseInt(orderID)
  }
 
  const navigate = useNavigate()
  if (!currentUser) {
    return <Navigate to="/" />;
  }
 
  const handlePayment = ()=>{
    if(selectedValue){
      dispatch(setOrderIDPayment(orderID))
      createTransaction(dispatch, data, navigate  )
    } else {
      setOpenSnackBar(true)
    } 
  }
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpenSnackBar(false);
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
                  background: "url(./assets/bca.svg)",
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
                  checked={selectedValue === "bca"}
                  onChange={handleChange}
                  value="bca"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "bca" }}
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
                  background: "url(./assets/bni.svg)",
                  borderRadius: 3,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "100%",
                  marginRight: 3,
                  marginLeft: 3,
                }}
              ></Box>
              <Box>
                <Typography variant="h6">Virtual Account BNI</Typography>
              </Box>
              <Box sx={{ marginLeft: "auto" }}>
                <Radio
                  checked={selectedValue === "bni"}
                  onChange={handleChange}
                  value="bni"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "bni" }}
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
                  background: "url(./assets/permata.png)",
                  borderRadius: 3,
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  backgroundSize: "100%",
                  marginRight: 3,
                  marginLeft: 3,
                }}
              ></Box>
              <Box>
                <Typography variant="h6">Virtual Account Permata</Typography>
              </Box>
              <Box sx={{ marginLeft: "auto" }}>
                <Radio
                  checked={selectedValue === "permata"}
                  onChange={handleChange}
                  value="permata"
                  name="radio-buttons"
                  inputProps={{ "aria-label": "permata" }}
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
        onClick={()=>handlePayment()}
          sx={{
            height: 70,
            marginTop: 10,
            backgroundColor: "#113CFC",
            color: "white",
            padding: 3,
            display: "flex",
            alignItems: "center",
            position:'sticky',
            bottom:'0'
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

            <Typography variant="h5">Rp{totalPrice},00</Typography>
          </Box>
          <Box sx={{ marginLeft: "auto", display: "flex" }}>
            <Typography variant="h4" sx={{ marginRight: 2 }}>
              Checkout
            </Typography>
            <img alt="next" src="./assets/nextbutton.png" />
          </Box>
        </CardActionArea>
        <Snackbar open={openSnackBar} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="info" sx={{ width: '100%' }}>
        {createTransactionError?"Terjadi Kesalahan, Silahkan Refresh Halaman":"Pilih Pembayaran Terlebih Dahulu"} 
        </Alert>
      </Snackbar>
      </Box>
    </Box>
  );
};

export default ChoosePayment;
