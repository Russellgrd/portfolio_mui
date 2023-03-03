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
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Resume from "./components/Resume";

const App = () => {    
    return(
    <Router> 
        <Box className="App"
            sx={{
                minHeight:'100vh', 
                minWidth:'100vw', 
                //backgroundImage:`url(${mainBackground})`,
                backgroundColor:'#0f0d0d',
                display:'flex',
                backgroundSize:'cover',
                backgroundPosition:'left',
                flexDirection:'column',
                alignItems:'center'
                }}>
            <Nav />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
            <Footer />
        </Box>
    </Router>
    )
}

export default App;

