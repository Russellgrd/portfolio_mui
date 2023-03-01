import { Box, Typography } from "@mui/material";
import { Fade, keyframes } from '@mui/material';


const About = () => {

    const shouldFade = true;

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

    const aboutPage = (<Box sx={{
        height:"60%", 
        width:'80%', 
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
        }} >
        <Typography variant='h3' sx={{fontWeight:'bold', color:'common.white',animation:`${slitInVertical} .5s ease`}}>
            ABOUT ME.
        </Typography>
        <Typography variant='body1' sx={{color:'common.white', mt:5, maxWidth:'70ch', lineHeight:2, textAlign:'center'}}>
            I currenly work as a Payroll Specialist, however I do web development on evenings and weekends on a freelance basis.  I am now looking to move into Web development on a full time basis and change careers completely.  
        </Typography> 
    </Box>)

    return(
        <Fade in={shouldFade}>{aboutPage}</Fade>
    )


}

export default About;