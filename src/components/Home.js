import { Box, Typography, Button, IconButton, keyframes } from '@mui/material';
import { Fade } from '@mui/material';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { focusInExpand } from '../helpers/transitions';

const Home = () => {

    let shouldFade = true;

    useEffect(() => {
        setTimeout(() => {
            document.getElementById('homeHeading').style.borderBottom = '5px solid #f6ac9f'
        },1000);
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
                color:'#fbe094', 
                textAlign:'center',
                borderBottom:'5px solid rgba(0,0,0,0)',
                borderRadius:'2px',
                transition:'border-bottom 0.5s ease-in',
                animation:`${focusInExpand} 1s ease forwards`
                }} id="homeHeading">

                HELLO, I AM RUSSELL.
            </Typography>
            <Typography variant='body1' sx={{color:'#fbe094', mt:5, maxWidth:'70ch', lineHeight:2, textAlign:'center'}}>
               I am a Full Stack Javascript Web Developer and mainly focus on React applications along side Nodejs.  I enjoy exploring new NPM packages and trying out new technologies.  I also have an interest in crypto currencies.
            </Typography> 
        </Box>)

    return( 
        <Fade in={shouldFade}>{homePage}</Fade>
    )
};

export default Home;

