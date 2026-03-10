import React from 'react';
import { Link } from "react-router-dom";
import styled from './about.module.css';

function About() {  
    return (
        <>
        <section id="about" className={styled.about}>
            <div id="hero" className={styled.hero}>
        <h2>Hi, I'm Salar Memon</h2>
        <p>I specialize in building functional and responsive  websites, and professional landing pages that deliver results.</p>
        <Link to="/projects" className={styled.btn}>View My Work</Link>
    </div>
        <h2>About Me</h2>
        <div className={styled.hero}>
            <p>I am a passionate web developer skilled in HTML, CSS, JavaScript, React, Python, PostgresSql and Tailwind CSS, with experience in front-end web development, I ensure developing, and structuring modern, responsive web pages.
                My focus is on creating clean layouts, smooth user experiences, and mobile-friendly designs that load fast and work on all devices.
                <br/>
                Whether you need a landing page, a personal website, or a complete front-end structure, I will deliver high quality work.
                <br/>
                Let's Communicate today.
</p>
</div> 
<a href="https://www.fiverr.com/s/Q7KyZKj" target="_blank" rel="noopener noreferrer" className={styled.hireMeBtn}>Hire Me</a>
        </section> 

        <section id="skills" className={styled.skills}>
        <h2>Skills</h2>
        <ul>
            <li>HTML5, CSS3, JavaScript (ES6+)</li>
            <li>React.js, Tailwind CSS</li>
            <li>Python, SQL, PostgresSql</li>
            <li>Responsive Web Design</li>
            <li>Version Control (Git)</li>
            
        </ul>
        </section>

        </>
    )                             
}
export default About;