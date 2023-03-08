import { Box, Typography, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {

    return(
        <Box sx={{mt:'auto',bottom:0, right:0, left:0, width:'100%',display:'flex', justifyContent:'center', alignItems:'center', height:60}}>
          <Typography variant="caption" color="#fbe094" sx={{fontSize:15}}>
           Russell Driver Copyright ©2023
           <Button href='https://github.com/Russellgrd' target="_blank">
                    <GitHubIcon sx={{color:'#fbe094', fontSize:30, ml:'auto'}}/>
                </Button>
          </Typography>
        </Box>
    )
}

export default Footer;
