import { Avatar, Box, CardActionArea, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { setOrderID, setSelectedProduct } from "../../redux/userLogSlice";
import { useDispatch, useSelector } from "react-redux";

const PulsaCard = (props) => {
  const { listProduct } = props;
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const totalPrice = numberWithCommas(listProduct?.price + listProduct.tax);
  const price = numberWithCommas(listProduct?.price);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const { currentUser } = useSelector((state) => state.login);
  let orderID = String(userData?.data?.id) + Math.floor(Math.random() * 10) + String(Date.now());
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
          borderStyle: "solid",
          borderColor: "#113CFC",
          borderRadius: 3,
          padding: 1,
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
              sx={{ paddingTop: 1, borderTop: 1, width: 130, color: "#113CFC" }}
            >
              <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                Rp{totalPrice},00
              </Typography>
            </Box>
          </Box>
          <Box sx={{ marginLeft: "auto" }}>
            <Avatar alt={listProduct?.name} src={listProduct?.link}></Avatar>
          </Box>
        </Box>
      </CardActionArea>
    </Box>
  );
};

export default PulsaCard;
