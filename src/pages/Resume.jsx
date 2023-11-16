import Resume1 from '../assets/Resume_p1.jpg'
import Resume2 from '../assets/Resume_p2.jpg'
import Resume3 from '../assets/Resume_p3.jpg'
import osucert from '../assets/osu-cert.jpg'
import resumefile from '../assets/files/Jacob-McKitrick-Resume.pdf'
import '../styles/Resume.css'

export default function Contact() {

    return (
        <resume id="resume">
            <h3>Full Stack Certificate</h3>
            <figure><img src={osucert} alt="osu certificate" /></figure>
            <h3>Resume</h3>

            <figure><img src={Resume1} alt="resume" /></figure>
            <figure><img src={Resume2} alt="resume" /></figure>
            <figure><img src={Resume3} alt="resume" /></figure>
            <div className="resume-download">
                <h4>Download Resume</h4>
                <a className='file' href={resumefile} download="Jacob-McKitrick-Resume.pdf">
                    <button>Download PDF</button>
                </a>
            </div>
        </resume>
    );
}