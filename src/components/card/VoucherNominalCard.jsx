import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import {
  setOrderID,
  setSelectedProduct,
  setSelectedVoucher,
} from "../../redux/userLogSlice";

import { Avatar, Box, CardActionArea, Typography } from "@mui/material";

const VoucherNominalCard = (props) => {
  const { listProduct } = props;

  const { userData } = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.login);
  const { selectedVoucher } = useSelector((state) => state.userLog);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const totalPrice = numberWithCommas(listProduct?.price + listProduct?.tax);
  const price = numberWithCommas(listProduct?.price);

  let orderID =
    String(userData?.data?.id) +
    Math.floor(Math.random() * 10) +
    String(Date.now());
  if (!currentUser?.data?.token) {
    orderID = Math.floor(Math.random() * 10) + String(Date.now());
  }

  const handleClick = (product) => {
    dispatch(setSelectedVoucher(product));
    dispatch(setOrderID(orderID));
    dispatch(setSelectedProduct(selectedVoucher));
    navigate("/choosepayment");
  };

  return (
    <Box
      sx={{
        margin: 0.5,
        borderStyle: "solid",
        borderColor: "#113CFC",
        borderRadius: 3,
        display: "flex",
      }}
    >
      <CardActionArea
        disabled={!currentUser?.data?.token}
        sx={{
          borderStyle: "solid",
          borderColor: "#113CFC",
          borderRadius: 3,
        }}
        onClick={() => handleClick(listProduct)}
      >
        <Box sx={{ display: "flex" }}>
          <Box sx={{ padding: 1 }}>
            <Box sx={{ marginBottom: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {price}
              </Typography>
            </Box>
            <Box
              sx={{ width: 120, paddingTop: 1, borderTop: 1, color: "#113CFC" }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Rp{totalPrice},00
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <Avatar
              alt={listProduct?.name}
              src={listProduct?.link}
              sx={{ width: 50, height: 50 }}
            ></Avatar>
          </Box>
        </Box>
      </CardActionArea>
    </Box>
  );
};

export default VoucherNominalCard;
