import React from "react"
import Body from "./Body/Body"
import Footer from "./Footer/Footer"
import Header from "./Header/Header"
import {Route, Routes,} from "react-router-dom"
import Contact from "./Contact/Contact"


const App=()=>{
  return (
    <>
  
      <Header/>
      <Routes>
        <Route path="/" element={<Body/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>

    </>
  )
}

export default App