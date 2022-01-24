import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";

import { getUserData, isFetchingUser } from "../../redux/userSlice";
import { getUserFailure } from "../../redux/errorSlice";

import TopContent from "../../components/content/TopContent";
import BottomContent from "../../components/content/BottomContent";
import Header from "../../components/navigation/Header";
import BottomBar from "../../components/navigation/BottomBar";

import { Box } from "@mui/material";
const Home = () => {
  const { currentUser } = useSelector((state) => state.login);

  const dispatch = useDispatch();
  
  useEffect(() => {
    if (currentUser?.data?.token) {
      const getUser = async () => {
        dispatch(isFetchingUser(true));
        try {
          const res = await axios.get("https://api.stevenhoyo.co/v1/user", {
            headers: { Authorization: `Bearer ${currentUser?.data?.token}` },
          });
          dispatch(getUserData(res?.data));
          dispatch(isFetchingUser(false));
        } catch (err) {
          dispatch(getUserFailure());
          dispatch(isFetchingUser(false));
        }
      };
      getUser();
    }
  }, [currentUser?.data?.token, dispatch]);

  return (
    <Box>
      <Header />
      <Box
        sx={{
          width: 450,
          margin: "auto",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        <TopContent isHome={true} />
        <BottomContent />
      </Box>
      <BottomBar currentPage={1} />
    </Box>
  );
};

export default Home;
