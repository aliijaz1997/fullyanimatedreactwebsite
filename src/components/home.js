import React from 'react';
import './home.css';
// import {  Typography} from '@material-ui/core'
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import image from '../images/router.jpg';
import image1 from '../images/thumbnail.png';
import image2 from '../images/floppy-disk.jpg';
import image3 from '../images/hard-drive.jpg';
import image4 from '../images/server.jpg';
import image5 from '../images/laptop-1.jpg';
import image6 from '../images/phone-notch.jpg';
// const theme = createMuiTheme();

// theme.typography.h3 = {
//   fontSize: '500rem',
//   '@media (min-width:600px)': {
//     fontSize: '3rem',
//   },
//   [theme.breakpoints.up('md')]: {
//     fontSize: '2rem',
//   },
// };

function Home() {
    

    return (
    <div>
        <div >
        <img  className= "image22" src={image} alt = "drawkit" />
        <img  className= "image2" src={image2} alt = "drawkit" />
        <img  className= "image3" src={image3} alt = "drawkit" />
        <img  className= "image4" src={image4} alt = "drawkit" />
        <img  className= "image5" src={image5} alt = "drawkit" />
        <img  className= "image6" src={image6} alt = "drawkit" />
            <h3 className = "typo1">
          Have you heard the noise of
        </h3>
        <h3 className = "typo2">
         4th Industrial Revolution? 
        </h3>
        <p  className = "para11">
            The world is changing towards automation. Cloud storage has taken place of hard drives.
            Machines are being developed to work with ability of artificial intelligence. Masses
            have to be happy about the new Era of automation and development. Every Household 
            are being connected to the internet forming it an internet of thing. BlockChain is
            also being emerging rapidly.
        </p>
         </div>

         <div>
             <img className = "image11" src = {image1} alt= "medical" />
             <p className = "para2">
                 This revolution has contributed alot in medical facilities.
                 Health monitoring and tracking devices are collecting real-time
                 data from an individuals and data is being managed by data 
                 scientists. Through a single touch one can get emergency or regular 
                 medical facility.
             </p>
         </div>
         <div className = "details">
             <p>
                 You can survey to learn about our mission in above "About" and "Career" tab.
             </p>
         </div>
         <div className = " footdiv">
            <p className = "foot" >
            Contact us by clicking on Contact Us in above navigation bar. Thank you for visiting us.
            </p>
         </div>
    </div>
    )
}

export default Home;