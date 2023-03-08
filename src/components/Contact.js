import { Box, Typography, keyframes } from "@mui/material";
import { focusInExpand, slideBottom } from '../helpers/transitions';

const Contact = () => {

    return(
        <Box>
            <Typography variant='h3' sx={{fontWeight:'bold', color:'#fbe094', textAlign:'center', animation:`${focusInExpand} 1s ease forwards`}}>
                CONTACT ME.
            </Typography>
            <Typography variant='h5' sx={{color:'#fbe094', mt:5, maxWidth:'70ch', lineHeight:2, textAlign:'center', animation: `${slideBottom} 1s ease forwards`}}>
                email:  russell_driver@ymail.com
            </Typography> 
        </Box>
    )

}

export default Contact;