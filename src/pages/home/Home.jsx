import Header from "../../components/navigation/Header";
import Content from "../../components/content/Content";
import BottomBar from "../../components/navigation/BottomBar";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box>
      <Header></Header>
      <Content isHome={true}></Content>
      <BottomBar></BottomBar>
    </Box>
  );
};

export default Home;
