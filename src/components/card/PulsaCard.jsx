import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setOrderID, setSelectedProduct } from "../../redux/userLogSlice";

import { Box, CardActionArea, Typography } from "@mui/material";

const PulsaCard = (props) => {
  const { listProduct } = props;

  const { userData } = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function numberWithCommas(x) {
    return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const totalPrice = numberWithCommas(listProduct?.price + listProduct.tax);
  const price = numberWithCommas(listProduct?.price);

  let orderID =
    String(userData?.data?.id) +
    Math.floor(Math.random() * 10) +
    String(Date.now());

  if (!currentUser?.data?.token) {
    orderID = Math.floor(Math.random() * 10) + String(Date.now());
  }

  const handleClick = (product) => {
    dispatch(setSelectedProduct(product));
    dispatch(setOrderID(orderID));
    navigate("/choosepayment");
  };

  return (
    <Box
      sx={{
        borderStyle: "solid",
        borderColor: "#113CFC",
        borderRadius: 3,
        display: "flex",
      }}
    >
      <CardActionArea
        disabled={!currentUser?.data?.token}
        sx={{
          padding: 1,
          borderStyle: "solid",
          borderColor: "#113CFC",
          borderRadius: 3,
        }}
        onClick={() => handleClick(listProduct)}
      >
        <Box sx={{ display: "flex" }}>
          <Box>
            <Box sx={{ marginBottom: 1 }}>
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                {price}
              </Typography>
            </Box>
            <Box
              sx={{ width: 130, paddingTop: 1, borderTop: 1, color: "#113CFC" }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Rp{totalPrice},00
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <img
              alt={listProduct?.name}
              src={listProduct?.link}
              style={{ width: 30, height: 30 }}
            />
          </Box>
        </Box>
      </CardActionArea>
    </Box>
  );
};

export default PulsaCard;
