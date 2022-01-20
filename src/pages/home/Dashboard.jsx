import Content from "../../components/content/Content";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { getUserData, isFetchingUser } from "../../redux/userSlice";
import { getUserFailure } from "../../redux/errorSlice";

const Dashboard = () => {
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

  return <Content isHome={true}></Content>;
};

export default Dashboard;
