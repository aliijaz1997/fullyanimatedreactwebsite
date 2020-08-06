import React from 'react';
import image from '../images/2975507.jpg';
import './about.css';


function About() {
 return (
     <div>
         <div >
         <h2 className = "text1" >
             Our aim is to 
         </h2>
         </div>
        <div >
         <h3 className = "aim" >
             teach four major components of 4th industrial revolution.
             <ul>
                 <li>Artificial Intelligence</li>
                 <li>Cloud Computing</li>
                 <li>Internet of Things</li>
                 <li>Block Chain</li>
             </ul>
         </h3>
         </div>
         <img  className= "image1" src={image} alt = "drawkit" />
     </div>
 )   
}

export default About;