import React from 'react';
import { Link } from "react-router-dom";
import styled from './about.module.css';
import { motion } from 'framer-motion'; 

const SkillSection = () => {
    const skills = [{ 
        name: "HTML", description: "Build clean, semantic, SEO-friendly page structures", id: 1 }, { name: "CSS", description: "Create responsive layouts with modern design and animations", id: 2 },
         { name: "JavaScript", description: "Add interactivity, handle DOM logic, and work with APIs", id: 3 },
          { name: "React", description: "Build dynamic UI with reusable components and state management", id: 4 },
        {name: "SQL", description: "Design and manage databases for efficient data storage and retrieval", id: 5 },
    {name: "PostgreSQL", description: "Design and manage databases for efficient data storage and retrieval", id: 6 },
    {name: "Tailwind CSS", description: "Build responsive, modern designs with utility-first CSS framework", id: 7 },
    {name: "Git", description: "Version control and collaboration using Git and GitHub", id: 8 },

    ]; 


    return (
        <motion.section className={styled.skills} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1.5, ease: "easeInOut" }} viewport={{once: true}}>

            {skills.map(skill => (
                <div key={skill.id} className={styled.skillCard}>
                    <h3>{skill.name}</h3>
                    <p>{skill.description}</p>
                    <motion.div className={styled.progressBar} initial={{ width: 0 }} whileInView={{ width: skill.name === "HTML" ? "90%" : skill.name === "CSS" ? "85%" : skill.name === "JavaScript" ? "88%"  : skill.name === "React" ? "90%" : skill.name === "SQL" ? "80%" : skill.name === "PostgreSQL" ? "80%" : skill.name === "Tailwind CSS" ? "85%" : skill.name === "Git" ? "85%" : "0%" }} transition={{ duration: 1.5, ease: "easeInOut" }}>
                        
                    </motion.div>
                </div>
            ))}
            
             </motion.section>
    )
}

function About({buttonVariants}) {  
    return (
        
        <main id="about" className={styled.about} >
            <div id="hero" className={styled.hero} >
        <h2>Hi, I'm Salar Memon</h2>
        <p>I specialize in building functional and responsive  websites, and professional landing pages that deliver results.</p>
        <Link to="/projects" >
            <motion.button className={styled.btn} variants={buttonVariants} whileHover="hover">View My Work</motion.button></Link>
    </div>
        <h2>About Me</h2>
        <motion.div className={styled.hero} initial={{ x: -1000}} whileInView={{ x: 0 }} transition={{ duration: 1, ease: "easeInOut" }} viewport={{once: true}}>
            <p>I am a passionate web developer skilled in HTML, CSS, JavaScript, React, Python, PostgresSql and Tailwind CSS, with experience in front-end web development, I ensure developing, and structuring modern, responsive web pages.
                My focus is on creating clean layouts, smooth user experiences, and mobile-friendly designs that load fast and work on all devices.
                <br/>
                Whether you need a landing page, a personal website, or a complete front-end structure, I will deliver high quality work.
                <br/>
                Let's Communicate today.
</p>
</motion.div> 
<motion.a  href="https://www.fiverr.com/s/Q7KyZKj" target="_blank" rel="noopener noreferrer" variants={buttonVariants} className={styled.hireMeBtn} whileHover="hover">Hire Me</motion.a>
        
        <SkillSection/>
        </main>
    )                             
}
export default About;