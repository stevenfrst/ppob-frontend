import Header from "../../components/navigation/Header";
import Content from "../../components/content/Content";
import BottomBar from "../../components/navigation/BottomBar";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { getUserData, isFetchingUser } from "../../redux/userSlice";
import { getUserFailure } from "../../redux/errorSlice";

const Home = () => {
  const {currentUser} = useSelector((state)=>state.login)
  const {userData} = useSelector((state)=>state.user)
  const dispatch = useDispatch()
  useEffect(()=>{
    if(currentUser?.data?.token){
    const getUser = async ()=>{
      dispatch(isFetchingUser(true))
      try{
        const res = await axios.get("https://api.stevenhoyo.co/v1/user",{headers:{Authorization: `Bearer ${currentUser?.data?.token}` }})
        dispatch(getUserData(res?.data))
        dispatch(isFetchingUser(false))
      } catch(err){
        dispatch(getUserFailure())
        dispatch(isFetchingUser(false))
      }
    }
    getUser()}
  },[currentUser?.data?.token, dispatch])
  console.log(userData)
  
  return (
    <Box>
      <Header></Header>
      <Content isHome={true}></Content>
      <BottomBar></BottomBar>
    </Box>
    
  );
};

export default Home;
