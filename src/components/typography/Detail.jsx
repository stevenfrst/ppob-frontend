import { Box, Typography } from "@mui/material"

const Detail = ({label, value})=>{
    return(
        <Box
            sx={{
              display: "flex",
              marginTop: 2,
              width: 400,
              borderBottom: 1,
              borderColor: "rgb(63, 61, 86, 20%)",
              paddingBottom:1,
              alignItems:'center'
            }}
          >
            <Box sx={{ display: "flex", width: 150, alignItems:'center' }}>
              <Typography>{label}</Typography>
              <Typography sx={{ marginLeft: "auto", fontWeight:'bold' }}>:</Typography>
            </Box>
            <Typography sx={{ marginLeft: "auto" }}>
            {value}
            </Typography>
          </Box>
    )
}

export default Detail