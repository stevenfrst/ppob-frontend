import BottomContent from "./contents/BottomContent";
import TopContent from "./contents/TopContent";

const Content = (props) => {
  const {isHome} = props
  return (
    <div>
      <TopContent isHome={isHome}/>
      <BottomContent />
    </div>
  );
};

export default Content;
