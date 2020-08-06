import React from 'react';
import  './navigation.css';
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from '../components/home';
import About from '../components/about';

function NavigationBar() {
  
  return  (
    <Router>
    <nav className = "navbar">
   <div className = "text">
       4Tech

       <div >
          <Link to = "/ContactUs">
            <button className = "subtextnavbar">
            Contact Us
            </button>
            </Link>
            <Link to = "/Careers">
            <button className = "subtextnavbar">
            Careers
            </button>
            </Link>
            <Link to = "/About">
            <button className = "subtextnavbar">
               About
            </button>
            </Link>
            <Link to = "/">
            <button className = "subtextnavbar">
               Home
            </button>
            </Link>
       </div>
    </div>
  </nav>
              <Routes>
                 <Route path = "/" element = {<Home/>}/>
                 <Route path = "About" element = {<About/>}/>
              </Routes>
  </Router>
  )
}


export default NavigationBar;