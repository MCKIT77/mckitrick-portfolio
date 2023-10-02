import git from '../assets/github-mark.png';
import stack from '../assets/stack-overflow-icon.png';
import '../styles/Footer.css'; // Import the CSS file

export default function Footer() {
    return (
        <div className="footer-container">
            <a href='https://github.com/MCKIT77' className="footer-link">
                <img src={git} alt="GitHub" />
            </a>
            <a href='https://stackoverflow.com/users/19001129/mckit77' className="footer-link">
                <img src={stack} alt="Stack Overflow" />
            </a>
        </div>
    );
};