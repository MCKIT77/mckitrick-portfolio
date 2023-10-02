import { React, useState } from 'react';
import profilePicture from '../assets/profile-bc.jpg'
import '../styles/About.css'
export default function About() {
    return (<>
        <div class='center'>
            <img id='prof-img' src={profilePicture} alt="jacob mckitrick" />
        </div>
        <h2 class="about">About Me</h2>
        <p class="aboutText">Hi, I'm Jacob McKitrick! I'm a Web Developer based in Pittsburgh, PA. I'm passionate about
            blockchain, and I really enjoy solving a difficult problem with code. With 1 year of experience in Web Development,
            I've had the opportunity to build a few games with javascript as well as a few applications as you can see in my
            portfolio section. These experiences have helped me develop a unique perspective on web debelopment, which I bring
            to every project or task I work on. When I'm not working, I enjoy Golfing, Fishing, Camping, and spending time with
            my pup. I'm also an avid gamer, and love to learn new things. If you're interested in learning more about me, or
            would like to discuss a potential project or collaboration, please don't hesitate to email me using the contact
            section. I'd love to hear from you!</p></>)
};

