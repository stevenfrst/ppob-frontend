import { Box, Typography } from "@mui/material";
import moment from "moment";
const RecentHistory = (props) => {
    const {listHistory} = props
    function numberWithCommas(x) {
        return x?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
      }
      const newDate = moment.utc(listHistory?.created_at);
      const localDate = moment(newDate).local().format("DD MMM YYYY");
   
    return (
    <Box
      sx={{
        width:400,
        display: "flex",
        alignItems: "center",
        marginRight:3
      }}
    >
      <Box
        sx={{
          width: 80,
          height: 80,
          background: `url(${listHistory?.image_url})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "100%",
          marginRight:3
        }}
      ></Box>
      <Box sx={{ display: "block" }}>
          {listHistory?.transaction_status==="pending"?
        <Box
          component="span"
          sx={{
            backgroundColor: "#FF2929",
            color: "white",
            borderRadius: 3,
            paddingLeft: 3,
            paddingRight: 3,
            paddingBottom: 0.3,
            paddingTop: 0.3,
          }}
        >
          Proses
        </Box>:<Box
          component="span"
          sx={{
            backgroundColor: "#113CFC",
            color: "white",
            borderRadius: 3,
            paddingLeft: 3,
            paddingRight: 3,
            paddingBottom: 0.3,
            paddingTop: 0.3,
          }}
        >
          Selesai
        </Box>}
        <Typography sx={{ marginTop: 1 }}>Rp{numberWithCommas(listHistory?.total)},00</Typography>
        <Typography >{localDate}</Typography>
      </Box>
    </Box>
  );
};

export default RecentHistory;
