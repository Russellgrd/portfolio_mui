import React from "react";
import { Box } from '@mui/material';
import './index.css';
import mainBackground from './assets/mainBackground.jpg';
import { red } from "@mui/material/colors";
import Nav from './components/Nav';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

const App = () => {    
    return(
    <Router> 
        <Nav />
        <div className="App">
        <Box sx={{
                    height:'100vh', 
                    width:'100vw', 
                    backgroundImage:`url(${mainBackground})`,
                    backgroundPosition:'cover',
                    }}>
                </Box>
            <Routes>
                {/* <Route path="/" element={<Home />} /> */}
            </Routes>
        </div>
    </Router>
    )
}

export default App;

