import React from "react";
import { NavLink } from "react-router-dom";

const Generate = () => {
    return(
        <div className="d-block " style={{minHeight: "100vh"}}>
            <div className="d-flex" style={{minHeight: "40vh"}}><div className="vr"></div></div>
            <center>
            <p>To Generate images click here</p>
            <button type="button" class="btn btn-outline-success"><NavLink reloadDocument to="/display">
                Generate
            </NavLink></button></center>
        </div>
    )
}

export default Generate;