import React from 'react';
import './careers.css';
import image from '../images/example-scene-1.jpg'
import useWebAnimations from "@wellyshen/use-web-animations"


function Careers() {

    const key4 = [
        {transform: 'translateY(-350px) '},
        { transform: 'translateY(0px)'},];
    const time4 =   {duration: 1200, easing: "ease-in-out", playbackRate:0.1};
    const content4 = useWebAnimations({keyframes : key4, timing: time4}); 
    const key5 = [
        {transform: 'translateY(350px) '},
        { transform: 'translateY(0px)'},];
    const time5 =   {duration: 1200, easing: "ease-in-out", playbackRate:0.1};
    const content5 = useWebAnimations({keyframes : key5, timing: time5});
    
    const key6 = [
        {transform: 'translateY(350px) '},
        { transform: 'translateY(0px)'},];
    const time6 =   {duration: 1200, easing: "ease-in-out", playbackRate:0.1};
    const content6 = useWebAnimations({keyframes : key6, timing: time6});

    return (

        <div>
            <img ref = {content4.ref} className = "image121" src= {image} alt = "career"/>
            <p ref = {content5.ref} className= "paragraph">
                Taking you to the Ultimate Success
            </p>
            <p ref = {content6.ref} className = "paragraph1">
                We are trying to create the job oppurtunities which will shape the Pakistan and other developing countries
                to develop high level economy in order to stabilise the world economic recession. Which has been taken place
                recently due to Covid-19. You have to be passionate about learning new things. That is the
                only way to be a good social person who aids in development.
            </p>
            <hr className = "line"/>
        </div>
    )
}
export default Careers;