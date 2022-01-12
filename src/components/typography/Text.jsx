import { Box } from "@mui/material";

const Text = (props) => {
  const { text } = props;
  return (
    <Box
      component="span"
      sx={{
        border: 1,
        borderColor: "#113CFC",
        padding: 0.5,
        borderStyle: "solid",
        backgroundColor: "#113CFC",
        color: "white",
        borderRadius: 2,
        fontWeight: "bold",
      }}
    >
      {text}
    </Box>
  );
};

export default Text;
