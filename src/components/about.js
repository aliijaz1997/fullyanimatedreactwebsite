import React from 'react';
import image from '../images/2975507.jpg';
import './about.css';
import useWebAnimations from "@wellyshen/use-web-animations"


function About() {


    const key1 =   [
        {transform: ' translateX(380px) '},
        { transform: ' translateX(0px)  '},];
    const time1 =   {duration: 800, easing: 'ease-in-out', playbackRate:0.1};
    const content1 = useWebAnimations({keyframes : key1, timing: time1}); 

    const key2 =   [
        {transform: ' translateX(-380px) '},
        { transform: ' translateX(0px)  '},];
    const time2 =   {duration: 800, easing: 'ease-in-out', playbackRate:0.1};
    const content2 = useWebAnimations({keyframes : key2, timing: time2}); 


 return (
     <div>
         <div >
         <h2 className = "text1" >
             Our aim is to 
         </h2>
         </div>
        <div >
         <h3 ref = {content2.ref} className = "aim" >
             teach four major components of 4th industrial revolution.
             <ul>
                 <li>Artificial Intelligence</li>
                 <li>Cloud Computing</li>
                 <li>Internet of Things</li>
                 <li>Block Chain</li>
             </ul>
         </h3>
         </div>
         <img ref= {content1.ref} className= "image1" src={image} alt = "drawkit" />
     </div>
 )   
}

export default About;