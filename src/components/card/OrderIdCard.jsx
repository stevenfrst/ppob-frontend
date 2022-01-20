import { FileCopy } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useSelector } from "react-redux";


const OrderIdCard = (props) => {
  const {isPayment} = props
  const {orderID} = useSelector((state)=>state.userLog)
  const {orderIDPayment} = useSelector((state)=>state.userLog)
  
  return (
    <Box
      sx={{
        margin: "auto",
        marginTop: 3,
        borderColor: "#113CFC",
        borderRadius: 5,
        borderStyle: "solid",
        paddingTop: 3,
        paddingBottom: 3,
        display: "flex",
        position: "relative",
        borderWidth: 2,
        color: "#3F3D56",
        width: 450,
      }}
    >
      <Box sx={{ margin: "auto" }}>
        {" "}
        <Typography variant="h4" sx={{ fontWeight: "bold", marginRight: 3 }}>
          {isPayment?orderIDPayment:orderID}
        </Typography>
      </Box>

      <Box sx={{ position: "absolute", top: 3, right: 3 }}>
        <Tooltip title="Copied!" onClick={()=>navigator.clipboard.writeText(isPayment?orderIDPayment:orderID)}>
        <IconButton aria-label="upload picture" component="span">
          <FileCopy />
        </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default OrderIdCard;
