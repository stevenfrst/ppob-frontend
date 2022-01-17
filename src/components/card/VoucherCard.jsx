import { Avatar, Box, CardActionArea, Typography } from "@mui/material";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setSelectedVoucher } from "../../redux/userLogSlice";


const VoucherCard = (props) => {
  const {listProduct} = props
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const handleClick = (product) =>{
    dispatch(setSelectedVoucher(product))
    navigate("/buyvoucher/selectvoucher")
  }
  return (
    <Box
      sx={{
        borderStyle: "solid",
        borderColor: "#113CFC",
        margin: 0.5,
        borderRadius: 3,
      }}
    >
      <CardActionArea
        sx={{
          borderStyle: "solid",
          borderColor: "#113CFC",
          borderRadius: 3,
          padding: 1,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
        onClick={()=>handleClick(listProduct)}
      >
        <Box>
          <Avatar
            alt={listProduct?.sub_category}
            src={listProduct?.link}
            sx={{ width: 50, height: 50 }}
          ></Avatar>
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
