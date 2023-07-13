import { Box, Button } from "@mui/material";
import React from "react";
import '../App.css'
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="bl-bg">
            <Box sx={{
                width: 800,
                height: 300,
                backgroundColor: 'grey',
                }}>
            <center><h1>
                Explore
            </h1>
            <div>
            <Button variant="contained" color="primary" ><Link to='/Display'>
                Click Me!</Link>
            </Button></div></center></Box>
        </div>
    )
};

export default Home;