import { Box, Typography, Button, IconButton, keyframes } from '@mui/material';
import { Fade } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';

const Home = () => {

    let shouldFade = true;

    const slitInVertical = keyframes`
        0% {
            -webkit-transform: translateZ(-800px) rotateY(90deg);
                    transform: translateZ(-800px) rotateY(90deg);
            opacity: 0;
        }
        54% {
            -webkit-transform: translateZ(-160px) rotateY(87deg);
                    transform: translateZ(-160px) rotateY(87deg);
            opacity: 1;
        }
        100% {
            -webkit-transform: translateZ(0) rotateY(0);
                    transform: translateZ(0) rotateY(0);
        }
    `

    

    const homePage = (<Box sx={{
            height:"60%", 
            width:'80%', 
            display:'flex',
            flexDirection:'column',
            alignItems:'center',
            }} >
            <Typography variant='h3' sx={
                {fontWeight:'bold', 
                color:'common.white', 
                textAlign:'center',
                animation:`${slitInVertical} .5s ease`
                }}>

                HELLO, I AM RUSSELL.
            </Typography>
            <Typography variant='body1' sx={{color:'common.white', mt:5, maxWidth:'70ch', lineHeight:2, textAlign:'center'}}>
               I am a Front-End and Back-End Javascript developer and mainly focus on React applications and Nodejs.  I enjoy exploring new NPM packages and trying out new technologies.  I also have an interest in crypto currencies.
            </Typography> 
                <Button href='https://github.com/Russellgrd' target="_blank">
                    <GitHubIcon sx={{color:'common.white', fontSize:30, mt:5}}/>
                </Button>

        </Box>)

    return( 
        <Fade in={shouldFade}>{homePage}</Fade>
    )
};

export default Home;

