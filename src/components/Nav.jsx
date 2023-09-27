import { Link } from 'react-router-dom';
import Navbar from './UI/Navbar';
import '../styles/Nav.css'

export default function Nav() {

    return (
        <header>
            <h1>Jacob McKitrick - Full Stack Dev</h1>
            <Navbar
                links={[
                    <Link key={1} to="/">
                        About
                    </Link>,
                    <Link key={2} to="/portfolio">
                        Portfolio
                    </Link>,
                    <Link key={3} to="/resume">
                        Resume
                    </Link>,
                    <Link key={4} to="/contact">
                        Contact
                    </Link>,
                ]}
            />
        </header>
    );
}
