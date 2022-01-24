import { Box } from "@mui/material";

const Text = (props) => {
  const { text } = props;
  return (
    <Box
      component="span"
      sx={{
        padding: 0.5,
        border: 1,
        borderColor: "#113CFC",
        borderStyle: "solid",
        borderRadius: 2,
        backgroundColor: "#113CFC",
        color: "white",
        fontWeight: "bold",
      }}
    >
      {text}
    </Box>
  );
};

export default Text;
