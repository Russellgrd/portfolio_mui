import { AppBar, Toolbar, Button,Box, styled, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import face from '../assets/face.jpg';

const Nav = () => {

    const MyButton = styled(Button)(({ theme }) => ({
        color: theme.palette.common.white, 
        fontWeight: theme.typography.fontWeightBold,
        letterSpacing:'2px',
        '&:hover': {
            color: theme.palette.error.main,
         }
      }));

    return(
        <AppBar color="transparent" sx={{position:'relative'}}>
            <Box component='div' sx={{mt:5,display:'flex', alignItems:'center', justifyContent:'center', position:'relative'}}>
                <Box
                    component="img"
                    sx={{
                    display:{xs:'none', md:'inline-block'},
                    border:'2px solid white',
                    ml:'auto',
                    justifySelf:'start',
                    height: 40,
                    width:40,
                    borderRadius:'50%',
                    }}
                    alt="face of a man"
                    src={face}
                />
                <Box component='div' sx={{display:'flex', flexDirection:{xs:'column',md:'row'}, justifyContent:'center', mr:{xs:0,md:'auto'}}}>   
                    <Link to="/">
                        <MyButton variant="text" size="large">HOME</MyButton>
                    </Link>
                    <Link to="/about">
                        <MyButton variant="text" size="large">ABOUT</MyButton>
                    </Link>
                    <Link to="/projects">
                        <MyButton variant="text" size="large">PROJECTS</MyButton>
                    </Link>
                    <Link to="/resume">
                        <MyButton variant="text" size="large">RESUME</MyButton>
                    </Link>
                    <Link to="contact">
                        <MyButton variant="text" size="large">CONTACT</MyButton>
                    </Link>
                </Box>

            </Box>
            <Toolbar>

            </Toolbar>
        </AppBar>
    )
}

export default Nav;