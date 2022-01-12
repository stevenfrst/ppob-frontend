import { Box, Typography } from "@mui/material";
import Text from "../typography/Text";

const History = () => {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Text text="Terakhir Beli" />

      <Box
        sx={{
          display: "flex",
          width: 450,
          backgroundColor: "white",
          margin: "auto",
          justifyContent: "space-between",
          paddingTop: 1,
        }}
      >
        <Box sx={{ textAlign: "Right", padding: 2, width: 250 }}>
          <Typography
            variant="h5"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            Belum ada transaksi <br />
            Yuk Beli!
          </Typography>
        </Box>

        <Box
          sx={{
            width: 200,
            display: "flex",
            alignItems: "center",
            padding: 1,
            borderRadius: 5,
            marginRight: 1,
          }}
        >
          <img
            src="./assets/undraw_empty_re_opql.svg"
            alt="middle content"
            width="150px"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default History;
