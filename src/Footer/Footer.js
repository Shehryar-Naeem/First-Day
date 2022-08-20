import React from "react";


const date= new Date().getFullYear()
const Footer=()=>{
    return (
        <>
        {/* this is the embedding expression */}
            <p className="footer">© copyright {date}</p>
        </>
    )
}

export default Footer