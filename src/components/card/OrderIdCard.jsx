import { FileCopy } from "@mui/icons-material";
import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useSelector } from "react-redux";

const OrderIdCard = (props) => {
  const { isPayment } = props;

  const { orderID } = useSelector((state) => state.userLog);
  const { orderIDPayment } = useSelector((state) => state.userLog);

  return (
    <Box
      sx={{
        width: 450,
        margin: "auto",
        marginTop: 3,
        paddingTop: 3,
        paddingBottom: 3,
        borderStyle: "solid",
        borderColor: "#113CFC",
        borderRadius: 5,
        borderWidth: 2,
        display: "flex",
        position: "relative",
        color: "#3F3D56",      
      }}
    >
      <Box sx={{ margin: "auto" }}>
        {" "}
        <Typography variant="h4" sx={{ marginRight: 3, fontWeight: "bold" }}>
          {isPayment ? orderIDPayment : orderID}
        </Typography>
      </Box>

      <Box sx={{ top: 3, right: 3, position: "absolute" }}>
        <Tooltip
          title="Copied!"
          onClick={() =>
            navigator.clipboard.writeText(isPayment ? orderIDPayment : orderID)
          }
        >
          <IconButton aria-label="upload picture" component="span">
            <FileCopy />
          </IconButton>
        </Tooltip>
      </Box>
    </Box>
  );
};

export default OrderIdCard;
