import React from "react";
import { Box } from '@mui/material';
import './index.css';
import mainBackground from './assets/mainBackground.jpg';
import { red } from "@mui/material/colors";
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './components/Home';
import Footer from './components/Footer';
import About from "./components/About";

const App = () => {    
    return(
    <Router> 
        <Box className="App"
            sx={{
                height:'100vh', 
                width:'100vw', 
                backgroundImage:`url(${mainBackground})`,
                backgroundPosition:'cover',
                display:'flex',
                flexDirection:'column',
                alignItems:'center',
                justifyContent:'center'
                }}>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
            <Footer />
        </Box>
    </Router>
    )
}

export default App;

