import { Box, Typography } from "@mui/material";

const MidContent = () => {
  return (
    <Box sx={{margin:'auto', width:450, paddingTop: 4,}}>
      <Box component='span' sx={{ border:1, borderColor:'#113CFC',padding:0.5, borderStyle:'solid', backgroundColor:"#113CFC", color:'white',  borderRadius:2, fontWeight:'bold'}}>Terakhir beli</Box>
      
    <Box
      sx={(theme) => ({
        display: "flex",
        width: 450,
        backgroundColor: "white",
        margin: "auto",
        justifyContent: "space-between",
        paddingTop:1,
        [theme.breakpoints.down("sm")]: {
          width: "100vw",
        },
      })}
    >
      <Box sx={{ textAlign: "Right", padding: 2, width:250 }}>
        <Typography
          variant="h5"
          sx={(theme) => ({
            display: "flex",
          alignItems: "center",
            [theme.breakpoints.down("sm")]: {
              fontSize: "30px",
            },
          })}
        >
          Belum ada transaksi <br/>
          Yuk Beli!
        </Typography>
      </Box>

      <Box
        sx={{
          
          width: 200,
          display: "flex",
          alignItems: "center",
          padding: 1,
          borderRadius: 5,
          marginRight: 1,
        }}
      >
        
        <img
          src="./assets/undraw_empty_re_opql.svg"
          alt="middle content"
          width="150px"
        />
      </Box>
    </Box>
    </Box>
  );
};

export default MidContent;
