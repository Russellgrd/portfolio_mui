import { Box, Typography } from '@mui/material';

const Footer = () => {

    return(
        <Box sx={{mt:'auto',bottom:0, right:0, left:0, width:'100%',display:'flex', justifyContent:'center', alignItems:'center', height:60}}>
          <Typography variant="caption" color="common.white" sx={{fontSize:15}}>
           Russell Driver Copyright ©2023
          </Typography>
        </Box>
    )
}

export default Footer;
