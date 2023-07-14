import React from "react";
import { NavLink } from "react-router-dom";

const Generate = () => {
    return(
        <div className="d-block row align-items-center" style={{minHeight: "100vh"}}>
            <p>To Generate images click here</p>
            <button type="button" class="btn btn-outline-success"><NavLink to="/display">
                Generate
            </NavLink></button>
        </div>
    )
}

export default Generate;