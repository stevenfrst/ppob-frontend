import { Container } from "@mui/material";
import Bottombar from "../../../components/users/Bottombar";
import Content from "../../../components/users/Content";
import Header from "../../../components/users/Header";

const Home = () => {
  return (
    <Container>
      <Header></Header>
      <Content></Content>
      <Bottombar></Bottombar>
    </Container>
  );
};

export default Home;
