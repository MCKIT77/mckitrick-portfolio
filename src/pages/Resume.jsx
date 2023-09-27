import Resume1 from '../assets/Resume_p1.jpg'
import Resume2 from '../assets/Resume_p2.jpg'
import Resume3 from '../assets/Resume_p3.jpg'
import '../styles/Resume.css'

export default function Contact() {

    return (
        <resume id="resume">
            <h3>Resume</h3>
            <figure><img src={Resume1} alt="resume" /></figure>
            <figure><img src={Resume2} alt="resume" /></figure>
            <figure><img src={Resume3} alt="resume" /></figure>
        </resume>
    );
}