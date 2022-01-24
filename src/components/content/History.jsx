import { Box, Typography } from "@mui/material";
import Text from "../typography/Text";

const History = () => {
  return (
    <Box sx={{ marginTop: 3 }}>
      <Text text="Terakhir Beli" />

      <Box
        sx={{
          width: 450,
          margin: "auto",
          paddingTop: 1,
          backgroundColor: "white",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ padding: 2, width: 250, textAlign: "Right" }}>
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
            marginRight: 1,
            padding: 1,
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
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
