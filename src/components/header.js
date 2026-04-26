import { Link } from "react-router-dom";
import headerStyles from "./header.module.css";
import { easeInOut, motion } from "framer-motion";

const Navbar = () => {


    return <nav className={headerStyles.nav}>
        <motion.ul initial={{
            x: "100vw",
            
        }} animate={{
            x:0,
            
        }}  transition={{
            delay:0.2,
            duration: 0.5,
            ease: "easeInOut",
            stiffness: 200

        }}>
            <li><Link to="/">About</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/certifications">Certification</Link></li>
        </motion.ul>
    </nav>
}
function Header() {
    
    return ( 
    <>
        <Navbar/>
        <motion.header className={headerStyles.header}initial={{
            opacity:0
        }}  animate={{
            opacity:1
        }} transition={{
            delay:0.3,
            duration:1,
            
        }} >           

            <h1>Salar Memon</h1>
            <p>Frontend Developer | Full stack Development enthusiast</p>

        </motion.header>
        </>
        )
}

export default Header; 