import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home'
import Skills from './Components/Skills'
import About from './Components/About'
import Contact from './Components/Contact'
import Signup from './Components/Signup'
import Navbar from "./Components/Navbar/Navbar";


const App = () => {
  return (
    <div>
      <Navbar />
   
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Skills' element={<Skills />} />
        <Route path='/About' element={<About />} />
        <Route path='/Contact' element={<Contact />} />
        <Route path='/Signup' element={<Signup />} />
      </Routes>

   
    </div >
  )
};

export default App