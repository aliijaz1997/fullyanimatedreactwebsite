import React from 'react';
import './ContactUs.css';
import image12121 from '../images/mail-icon-in-flat-style-email-symbol-in-flat-style-vector-28061204.jpg'
import image2222 from '../images/telephone-call-icon-vector-21638903.jpg'
import image3333 from '../images/fax-icon-in-black-and-white-vector-19244024.jpg'
import useWebAnimations from "@wellyshen/use-web-animations";
function ContactUs() {

    const key7 = [
        {transform: 'translateX(-750px) '},
        { transform: 'translateX(0px)'},];
    const time7 =   {duration: 800, easing: "ease-in-out", playbackRate:0.1};
    const content7 = useWebAnimations({keyframes : key7, timing: time7}); 

    const key8 = [
        {transform: 'translateX(750px) '},
        { transform: 'translateX(0px)'},];
    const time8 =   {duration: 800, easing: "ease-in-out", playbackRate:0.1};
    const content8 = useWebAnimations({keyframes : key8, timing: time8});

    const key9 = [
        {transform: 'translateX(750px) '},
        { transform: 'translateX(0px)'},];
    const time9 =   {duration: 800, easing: "ease-in-out", playbackRate:0.1};
    const content9 = useWebAnimations({keyframes : key9, timing: time9});

    const key10 = [
        {transform: 'translateX(750px) '},
        { transform: 'translateX(0px)'},];
    const time10 =   {duration: 800, easing: "ease-in-out", playbackRate:0.1};
    const content10 = useWebAnimations({keyframes : key10, timing: time10});

    return (
        <div>
            <p ref = {content7.ref} className = "title1">Feel free to contact us to the following given sources</p>
            <img className = "image12121" src= {image12121} alt = "career"/>
            <p ref = {content8.ref} className = "email">Email us on xyz123@abcmail.com</p>
            <img  className = "image2222" src= {image2222} alt = "career"/>
            <p ref = {content9.ref} className = "number">03********6</p>
            <img className = "image2222" src= {image3333} alt = "career"/>
            <p ref = {content10.ref} className = "number">1-***-***-**34</p>
        </div>
    )
}
export default ContactUs;