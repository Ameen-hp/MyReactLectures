import {BrowserRouter,Routes,Route} from "react-router-dom"
import React from "react"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from "./Components/Header"
import Footer from "./Components/Footer"
import User from "./pages/User"
let App = () => {
  return (
      <BrowserRouter>
       {/* Header */}
        <Header />
        <Routes>
         
          <Route path="/" element={<Home/>} ></Route>
           <Route path="/about" element={<About/>} ></Route>
            <Route path="/contact" element={<Contact/>} ></Route>
            <Route path="/user/:name" element={<User/>}></Route>
        </Routes>
          <Footer />
        {/* Footer */}
      
      </BrowserRouter>
  )
}

export default App