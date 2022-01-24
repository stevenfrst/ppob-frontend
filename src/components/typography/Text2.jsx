import { Box } from "@mui/material";

const Text2 = (props) => {
  const { text, unpaid } = props;
  return (
    <Box
      component="span"
      sx={
        unpaid
          ? {
              padding: 0.5,
              border: 1,
              borderRadius: 2,
              borderColor: "#FF2929",
              borderStyle: "solid",
              backgroundColor: "#FF2929",
              color: "white",
              fontSize: 15,
            }
          : {
              border: 1,
              padding: 0.5,
              borderColor: "#113CFC",
              borderStyle: "solid",
              backgroundColor: "#113CFC",
              color: "white",
              borderRadius: 2,
              fontSize: 15,
            }
      }
    >
      {text}
    </Box>
  );
};

export default Text2;
