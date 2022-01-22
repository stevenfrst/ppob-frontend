import { Box } from "@mui/material";

const Text2 = (props) => {
  const { text, unpaid } = props;
  return (
    <Box
      component="span"
      sx={unpaid?{
        border: 1,
        borderColor: "#FF2929",
        padding: 0.5,
        borderStyle: "solid",
        backgroundColor: "#FF2929",
        color: "white",
        borderRadius: 2,
        fontSize:15
      }:{
        border: 1,
        borderColor: "#113CFC",
        padding: 0.5,
        borderStyle: "solid",
        backgroundColor: "#113CFC",
        color: "white",
        borderRadius: 2,
        fontSize:15
      }}
    >
      {text}
    </Box>
  );
};

export default Text2;
