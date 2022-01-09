import Header from "../components/Header";
import Content from "../components/Content";
import NewBottombar from "../components/NewBottombar";


const Home = () => {
  return (
    <div>
      <Header></Header>
      <Content isHome={true}></Content>
      <NewBottombar></NewBottombar>
    </div>
  );
};

export default Home;
