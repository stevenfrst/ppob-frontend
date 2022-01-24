import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setSelectedVoucher } from "../../redux/userLogSlice";

import { Avatar, Box, CardActionArea, Typography } from "@mui/material";

const VoucherCard = (props) => {
  const {listProduct} = props

  const { currentUser } = useSelector((state) => state.login);

  const navigate = useNavigate()
  const dispatch = useDispatch()
  
  const handleClick = (product) =>{
    dispatch(setSelectedVoucher(product))
    navigate("/buyvoucher/selectvoucher")
  }
  return (
    <Box
      sx={{
        margin: 0.5,
        borderStyle: "solid",
        borderColor: "#113CFC",
        borderRadius: 3,
      }}
    >
      <CardActionArea
      disabled={!currentUser?.data?.token}
        sx={{
          padding: 1,
          borderStyle: "solid",
          borderColor: "#113CFC",
          borderRadius: 3,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
        onClick={()=>handleClick(listProduct)}
      >
        <Box>
          <Avatar
            alt={listProduct?.sub_category}
            src={listProduct?.link}
            sx={{ width: 50, height: 50 }}
          />
        </Box>
        <Box>
          <Typography variant="h6" sx={{ fontWeight: "bold" }}>
            {listProduct?.sub_category}
          </Typography>
        </Box>
      </CardActionArea>
    </Box>
  );
};

export default VoucherCard;
