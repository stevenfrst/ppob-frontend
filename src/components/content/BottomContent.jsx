import Text from "../typography/Text";
import { Avatar, Box, Fab } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  saveInputPhoneNumber,
  setSelectedVoucher,
} from "../../redux/userLogSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { product } from "../../redux/productApi";
import _ from "lodash";
const BottomContent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const { inputPhoneNumber } = useSelector((state) => state.userLog);
  const { listProduct } = useSelector((state) => state.product);

  const handleClick = (product) => {
    dispatch(setSelectedVoucher(product));
    if (!inputPhoneNumber) {
      dispatch(saveInputPhoneNumber(userData?.data?.phoneNumber));
    }
    navigate("/buyvoucher/selectvoucher");
  };

  useEffect(() => {
    product(dispatch, 2);
  }, [dispatch]);

  return (
    <Box
      sx={{
        height: 300,
        marginTop: 2,
        backgroundColor: "white",
        display: "block",
      }}
    >
      <Text text="Produk Teratas" />

      <Box
        sx={{
          marginLeft: "10px",
          marginRight: "10px",
          marginTop: 5,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        {_.uniqBy(listProduct?.data, "sub_category").map((product) => (
          <Fab
            key={product?.id}
            sx={{ width: 70, height: 70 }}
            onClick={() => handleClick(product)}
          >
            <Avatar key={product?.id} sx={{ width: 70, height: 70 }} src={product?.link} />
          </Fab>
        ))}
      </Box>
    </Box>
  );
};

export default BottomContent;
