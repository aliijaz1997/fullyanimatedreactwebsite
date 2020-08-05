import React from 'react';
import './home.css';
import {  Typography} from '@material-ui/core'

import image from '../images/2975507.jpg';


function Home() {
    

    return (
    <div>
        <div >
            <img  className= "image1" src={image} alt = "drawkit" />
            <Typography varient = 'h2' className = "typo1">
          The noise of 4th Industrial Revolution has been taken placed.
      </Typography>
        </div>

    </div>
    )
}

export default Home;