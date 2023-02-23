import { Box, Typography } from '@mui/material';

const Footer = () => {

    return(
        <Box sx={{position:'fixed', bottom:'0', width:'100%',display:'flex', justifyContent:'center', alignItems:'center', height:60}}>
          <Typography variant="caption" color="common.white" sx={{fontSize:15}}>
            Copyright ©2023
          </Typography>
        </Box>
    )
}

export default Footer;
