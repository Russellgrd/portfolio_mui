import { Box, Typography } from "@mui/material";

const Contact = () => {

    return(
        <Box>
            <Typography variant='h3' sx={{fontWeight:'bold', color:'common.white'}}>
                CONTACT ME.
            </Typography>
            <Typography variant='body1' sx={{color:'common.white', mt:5, maxWidth:'70ch', lineHeight:2, textAlign:'center'}}>
                email:  russell_driver@ymail.com
            </Typography> 
        </Box>
    )

}

export default Contact;