import { AppBar, Toolbar, Button,Box, styled, IconButton } from "@mui/material";
import { Link } from "react-router-dom";

const Nav = () => {

    const MyButton = styled(Button)(({ theme }) => ({
        color: '#fbe094', 
        display:'inline-block !important',
        fontWeight: theme.typography.fontWeightBold,
        letterSpacing:'2px',
        '&:hover': {
            color: theme.palette.error.main,
         }
      }));

    return(
        <AppBar color="transparent" elevation={0} sx={{position:'relative'}}>
            <Box component='div' sx={{
                mt:5,
                display:'flex',
                alignItems:'center', 
                justifyContent:'center',
                 position:'relative'
                 }}>
                {/* <Box
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
                /> */}
                <Box component='div' sx={{ width:'100vw', display:'flex',justifyContent:'center', mr:{xs:0,md:'auto'}}}>   
                    <Link to="/" >
                        <MyButton variant="text" sx={{fontSize:{xs:11,md:15}}}>HOME</MyButton>
                    </Link>
                    <Link to="/about">
                        <MyButton variant="text" sx={{fontSize:{xs:11,md:15}}}>ABOUT</MyButton>
                    </Link>
                    <Link to="/projects">
                        <MyButton variant="text" sx={{fontSize:{xs:11,md:15}}}>PROJECTS</MyButton>
                    </Link>
                    <Link to="/resume">
                        <MyButton variant="text" sx={{fontSize:{xs:11,md:15}}}>RESUME</MyButton>
                    </Link>
                    <Link to="contact">
                        <MyButton variant="text" sx={{fontSize:{xs:11,md:15}}}>CONTACT</MyButton>
                    </Link>
                </Box>

            </Box>
            <Toolbar>

            </Toolbar>
        </AppBar>
    )
}

export default Nav;