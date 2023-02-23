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
        <AppBar color="transparent">
            <Box component='div' sx={{mt:5,display:'flex', alignItems:'center', justifyContent:'center'}}>
                <Box
                    component="img"
                    sx={{
                    display:'inline-block',
                    border:'1px solid white',
                    mr:'auto',
                    ml:'10px',
                    justifySelf:'start',
                    height: 40,
                    width:40,
                    borderRadius:'50%',
                    }}
                    alt="face of a man"
                    src={face}
                />
                <Box component='div' sx={{display:'flex', justifyContent:'center', mr:'auto'}}>   
                    <Link to="/">
                        <MyButton variant="text" size="large">HOME</MyButton>
                    </Link>
                    <Link to="/about">
                        <MyButton variant="text" size="large">ABOUT</MyButton>
                    </Link>
                    <Link to="/projects">
                        <MyButton variant="text" size="large">Projects</MyButton>
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