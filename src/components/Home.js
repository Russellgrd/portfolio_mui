import { Box, Typography, Button, IconButton, keyframes } from '@mui/material';
import { Fade } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { textShadowPopTop, focusInContract } from '../helpers/transitions';

const Home = () => {

    let shouldFade = true;

    useEffect(() => {
        setTimeout(() => {
            document.getElementById('homeHeading').style.borderBottom = '5px solid #fbe094'
        },500);
    },[])

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
                borderBottom:'5px solid rgba(0,0,0,0)',
                borderRadius:'2px',
                transition:'border-bottom 0.5s ease-in',
                animation:`${textShadowPopTop} .5s ease forwards`
                }} id="homeHeading">

                HELLO, I AM RUSSELL.
            </Typography>
            <Typography variant='body1' sx={{color:'common.white', mt:5, maxWidth:'70ch', lineHeight:2, textAlign:'center'}}>
               I am a Front-End and Back-End Javascript Web Developer and mainly focus on React applications and Nodejs.  I enjoy exploring new NPM packages and trying out new technologies.  I also have an interest in crypto currencies.
            </Typography> 
        </Box>)

    return( 
        <Fade in={shouldFade}>{homePage}</Fade>
    )
};

export default Home;

