import { Box } from "@mui/material"
import { useState } from "react"
import BottomBar from "../../components/navigation/BottomBar"
import Header from "../../components/navigation/Header"
import Dashboard from "./Dashboard"
import History from "./History"
import User from "./User"

const Home = ()=>{
  const [tab, setTab] = useState(0)
  const renderView=()=>{
    switch(tab){
      case 0:
        return <Dashboard/>
      case 1:
        return <User/>
      case 2:
        return<History/>
      default:
        return new Error('This view does not exist')
    }
  }
  return (
    <Box>
      <Header></Header>
      {renderView()}
      <BottomBar value={tab} onChange={setTab}></BottomBar>
    </Box>
  )
}

export default Home