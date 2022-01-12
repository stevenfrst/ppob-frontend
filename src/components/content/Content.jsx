import { Box } from "@mui/material";
import BottomContent from "./BottomContent";
import TopContent from "./TopContent";

const Content = (props) => {
  const { isHome } = props;
  return (
    <Box>
      <TopContent isHome={isHome} />
      <BottomContent />
    </Box>
  );
};

export default Content;
