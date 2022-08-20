import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header=()=>{
    const [state,setState]= useState(false)
    const toggle=()=>{
        setState(!state)
    }
    return(
        <>
            <nav className="header_container"> 
                <span>
                    Navigation Bar
                </span>
                <ul className={state?"nav":"nav hide"}>
                    <li><Link to="/">Home</Link></li>
                    <li>About</li>
                    <li>Services</li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
                <h1 onClick={toggle} className="toggler-btn"><span class="material-symbols-outlined">
menu
</span></h1>
            </nav>
        </>
    )
}

export default Header