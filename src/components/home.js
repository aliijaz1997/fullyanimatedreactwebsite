import React from 'react';
import './home.css';
// import {  Typography} from '@material-ui/core'
// import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import image from '../images/2975507.jpg';
import image1 from '../images/thumbnail.png';
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
            <img  className= "image1" src={image} alt = "drawkit" />
            <h3 className = "typo1">
          The noise of 4th Industrial 
        </h3>
        <h3 className = "typo2">
        Revolution has been started. 
        </h3>
        <p  className = "para">
            The world is changing towards automation. Cloud storage has taken place of hard drives.
            Machines are being developed to work with ability of artificial intelligence. Masses
            have to be happy about the new Era of automation and development. Every Household 
            are being connected to the internet forming it an internet of thing. BlockChain is
            also being emerging rapidly.
        </p>
         </div>

         <div>
             <img className = "image2" src = {image1} alt= "medical" />
             <p className = "para2">
                 This revolution has contributed alot in medical facilities.
                 Health monitoring and tracking devices are collecting real-time
                 data from an individuals and data is being managed by data 
                 scientists. Through a single touch one can get emergency or regular 
                 medical facility.
             </p>
         </div>
    </div>
    )
}

export default Home;