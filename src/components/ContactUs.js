import React from 'react';
import './ContactUs.css';
import image12121 from '../images/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg'
import image2222 from '../images/telephone-call-icon-vector-21638903.jpg'
import image3333 from '../images/fax-icon-in-black-and-white-vector-19244024.jpg'
function ContactUs() {
    return (
        <div>
            <p className = "title1">Feel free to contact us to the following given sources</p>
            <img className = "image12121" src= {image12121} alt = "career"/>
            <p className = "email">Email us on xyz123@abcmail.com</p>
            <img className = "image2222" src= {image2222} alt = "career"/>
            <p className = "number">03********6</p>
            <img className = "image2222" src= {image3333} alt = "career"/>
            <p className = "number">1-***-***-**34</p>
        </div>
    )
}
export default ContactUs;