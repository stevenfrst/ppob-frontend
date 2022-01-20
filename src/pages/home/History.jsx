import { Box, Grid, Typography } from "@mui/material"
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HistoryCard from "../../components/card/HistoryCard";
import { product } from "../../redux/productApi";
import axios from "axios";

const History = ()=>{
    const { listProduct } = useSelector((state) => state.product);
    const [history, setHistory] = useState("")
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const dispatch= useDispatch()
  const { currentUser } = useSelector((state) => state.login);
    useEffect(()=>{
        const getHistory = async ()=>{
            setLoading(true)
            try {
                const res = await axios.get("https://api.stevenhoyo.co/v1/payment/", {
                  headers: { Authorization: `Bearer ${currentUser?.data?.token}` },
                });
                setHistory(res)
                setLoading(false)
            }catch(err){
                setError(err);
                setLoading(false)
            }
        }
       getHistory()
    },[currentUser?.data?.token])
   console.log(history?.data?.data)
    return(
        <Box
        sx={{
          width: 450,
          margin: "auto",
          marginTop:10,
          marginBottom:10
        }}
      >
          <Typography variant="h4">History</Typography>
        <Box sx={{ width: 450, marginTop: 2 }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3, }}
          >
            
            {history?.data?.data?.map((product) => (
                <Grid key={product?.id} item xs={6}>
                  <HistoryCard
                    key={product?.id}
                    listHistory={product}
                  ></HistoryCard>
                </Grid>
              ))}
          </Grid>
        </Box>
        </Box>
    )
}

export default History