import contactStyles from './contact.module.css';
import React from 'react';
import {FaFacebook, FaGithub,FaLinkedin} from 'react-icons/fa';
import { motion } from 'framer-motion';
function Contact() {
return (
<motion.section id="contact" className={contactStyles.footer} initial={{ y: 200}} whileInView={{ y: 0 }} transition={{ duration: 1, ease: "easeInOut" }} viewport={{once: true}}>  
        <h2>Contact Me</h2>
        <p>My Email: salarahmed91919@gmail.com</p>
        <div className={contactStyles.socials}>
        <a href="https://github.com/Salarmemon" target="_blank" rel='noopener noreferrer'>
        <FaGithub/>
        </a>
        <a href="https://www.linkedin.com/in/salar-memon-603074291?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer">
        <FaLinkedin/>
        </a>
        <a href="https://www.facebook.com/people/Salar-Memon/pfbid025NBNndnzCirSPZ4CYqpd4UHpqNcjJJChTErbXgGjss4ShAL7NoNrUcRqKZ2xSvCMl/" rel="noopener noreferrer" target="_blank">
        <FaFacebook/>
        </a>
    </div>

    <footer className={contactStyles.copyRight}>
        <p>&copy; 2026. Salar Memon.
        <br/>
        All rights reserved.</p>
    </footer>
</motion.section>
)
}          
export default Contact;            