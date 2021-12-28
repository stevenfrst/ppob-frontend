import { Box, Typography } from "@mui/material";

const MidContent = () => {
  return (
    <Box
      sx={(theme) => ({
        display: "flex",
        width: 450,
        backgroundColor: "white",
        margin: "auto",
        justifyContent: "space-between",
        paddingTop: 3,
        [theme.breakpoints.down("sm")]: {
          width: "100vw",
        },
      })}
    >
      <Box sx={{ textAlign: "center", padding: 2, borderRight: 1 }}>
        <Typography
          variant="h3"
          sx={(theme) => ({
            [theme.breakpoints.down("sm")]: {
              fontSize: "30px",
            },
          })}
        >
          History
        </Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: "#69DADB",
          width: 200,
          display: "flex",
          alignItems: "center",
          padding: 1,
          borderRadius: 5,
          marginRight: 1,
        }}
      >
        <Box sx={{ textAlign: "center", marginLeft: 1 }}>
          <Typography variant="h5">Yuk Beli</Typography>
        </Box>
        <img
          src="./assets/undraw_empty_re_opql.svg"
          alt="middle content"
          width="100px"
        />
      </Box>
    </Box>
  );
};

export default MidContent;
