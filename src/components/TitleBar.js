import React from "react";
import '../App.css';
import { NavLink } from "react-router-dom";
const TitleBar = () => {
    return(
        <>
        <header className="App-header">
            <h1><NavLink to='/' style={{
                color: "white"
            }
            }>Ai Jewellery Design</NavLink></h1>
        </header>
        </>
    )
};

export default TitleBar;