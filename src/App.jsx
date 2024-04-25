import React from "react"
import Navbar from "./components/Navbar"
import BigImage from "./components/BigImage"
import Body from "./components/Body"
import Footer from "./components/Footer"

function App() {



  return (
    <div className=" max-w-[1366px] md:px-[60px] font-poppins ">
      <Navbar />
      <BigImage />
      <Body />
      <Footer />
    </div>
  )
}
  export default App
