import { Avatar, Box, CardActionArea, Typography } from "@mui/material"

const PulsaCard = ()=>{
    return(
        <Box sx={{borderStyle:"solid", borderColor:"#113CFC",margin:0.5, borderRadius:3, display:'flex' }}>
        <CardActionArea sx={{width:180, borderStyle:'solid', borderColor:'#113CFC', borderRadius:3, padding:1}}>
            <Box sx={{display:'flex'}}>
            <Box>
            <Box sx={{marginBottom:1}}>
            <Typography variant='h5' sx={{fontWeight:'bold'}}>25.000</Typography>
            </Box>
            <Box sx={{paddingTop:1, borderTop:1, width:130, color:'#113CFC'}}>
            <Typography variant='h5' sx={{fontWeight:'bold'}}>Rp. 27.000</Typography>
            </Box>
            </Box>
            <Box>
                <Avatar alt="xl.png" src="./assets/xl.png" sx={{}}></Avatar>
            </Box>
            </Box>
            
        </CardActionArea>
       
        </Box>
      
    )
}

export default PulsaCard