import React from 'react';
import './careers.css';
import image from '../images/example-scene-1.jpg'


function Careers() {
    
    return (

        <div>
            <img className = "image121" src= {image} alt = "career"/>
            <p className= "paragraph">
                Taking you to the Ultimate Success
            </p>
            <p className = "paragraph1">
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