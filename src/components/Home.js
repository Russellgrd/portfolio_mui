import { Box, Typography } from '@mui/material';
import { Fade } from '@mui/material';

const Home = () => {

    const homePage = (<Box sx={{
            height:"60%", 
            width:'80%', 
            display:'flex',
            flexDirection:'column',
            alignItems:'center'
            }} >
            <Typography variant='h3' sx={{fontWeight:'bold', color:'common.white'}}>
                HELLO, I AM RUSSELL.
            </Typography>
            <Typography variant='body1' sx={{color:'common.white', mt:5, maxWidth:'70ch', lineHeight:2, textAlign:'center'}}>
               I am a Front-End and Back-End Javascript developer and mainly focus on React applications and Nodejs.  I enjoy exploring new NPM packages and trying out new technologies.  I also have an interest in crypto currencies.
            </Typography> 

        </Box>)

    return( 
        <Fade in='true'>{homePage}</Fade>
    )
};

export default Home;

