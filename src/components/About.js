import { Box, Typography } from "@mui/material";
import { Fade, keyframes } from '@mui/material';
import { textShadowPopTop } from '../helpers/transitions';


const About = () => {

    const shouldFade = true;

    const aboutPage = (<Box sx={{
        height:"60%", 
        width:'80%', 
        display:'flex',
        flexDirection:'column',
        alignItems:'center'
        }} id="about" >
        <Typography variant='h3' sx={{fontWeight:'bold', color:'common.white',textAlign:'center', animation:`${textShadowPopTop} .5s ease forwards`}}>
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