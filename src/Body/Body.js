import React from "react";
import image from "../Images/react.png"
const Body=()=>{
    return (
        <>
        <div className="container">
            <img src={image} alt="react logo"/>
            <div className="content">
                <p>Learn React</p>
                <button>learn more</button>
            </div>
        </div>
        </>
    )
}

export default Body;