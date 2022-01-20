import { Avatar, Box, CardActionArea, Typography } from "@mui/material";

import { useSelector } from "react-redux";
import moment from 'moment'
const HistoryCard = (props) => {
  const { listHistory } = props;
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }
  const totalPrice = numberWithCommas(listHistory?.total);

  const { currentUser } = useSelector((state) => state.login);
  const date =moment(listHistory?.created_at).format('LLLL')

  return (
    <Box
      sx={{
        borderRadius: 3,
        display: "flex",
      }}
    >
      <CardActionArea
        disabled={!currentUser?.data?.token}
        sx={{
          borderRadius: 3,
          padding: 1,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Avatar
            alt={listHistory?.product_name}
            src={listHistory?.image_url}
            sx={{ marginRight: 3, width: 50, height: 50 }}
          ></Avatar>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Rp{totalPrice},00
            </Typography>
            <Typography variant="body">{date}</Typography>
          </Box>
        </Box>
      </CardActionArea>
    </Box>
  );
};

export default HistoryCard;
