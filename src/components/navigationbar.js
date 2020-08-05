import React from 'react';
import  './navigation.css';

function NavigationBar() {
  
  return  (
  
    <nav className = "navbar">
   <div className = "text">
       4Tech

       <div >
            <button className = "subtextnavbar">
            Contact Us
            </button>
            <button className = "subtextnavbar">
            Careers
            </button>
            <button className = "subtextnavbar">
               About
            </button>
            <button className = "subtextnavbar">
               Home
            </button>
       </div>


   </div>
  </nav>
  )
}


export default NavigationBar;