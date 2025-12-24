import { Link } from "react-router-dom";
import headerStyles from "./header.module.css";
function Header() {
    
    return ( 
    <header className={headerStyles.header}      >           
        <h1>Salar Memon</h1>
        <p>Frontend Developer | Full stack Development enthusiast</p>
        <nav className={headerStyles.nav}>
            <ul>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/projects">Projects</Link></li>
                <li><Link to="/certifications">Certification</Link></li>
            </ul>
        </nav>
    </header>

    )
}

export default Header; 