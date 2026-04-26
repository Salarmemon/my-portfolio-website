import ProjectStyles from './project.module.css';
import { motion } from 'framer-motion'; 
import solarSystenImage from '../assets/SOLAR.PNG';
import landingPageImg from '../assets/Landing page.PNG';
import cipherToolImg from '../assets/Cipher.PNG'
import starFishImg from '../assets/starfishImg.PNG'
import weatherAppImg from '../assets/weatherAPP1.PNG'

function Projects() {

  const projects = [
    { 
      title: "Weather App— Built with React.js",
      description: "This is a web-based weather application that fetches and displays weather data using an open-source API, built with React and Tailwind. The app provides users with real-time weather information for any city, along with a responsive design and dark mode support. It features separate sections for current daily and hourly forecasts, as well as an intuitive search field to find weather information for any location.",
      features: [
        "Real-time weather of any city.",
        "Responsive design, compatible with all major screen sizes.",
        "Dark mode support with persistent state.",
        "Separate section for current daily and hourly forecasts.",
        "Intuitive search field for finding weather information for any location."
      ],
      liveDemo: "https://salarmemon.github.io/Weather-App/",
      github: "https://github.com/Salarmemon/Weather-App"
    },
    {
      title: "Interactive 3D Solar System — Built with Three.js",
      description: "Explore the wonders of our universe through this stunning 3D Solar System simulation powered by Three.js.",
      features: [
        "Realistic 3D planets with high-quality textures",
        "Accurate orbital animations and natural lighting",
        "Dynamic sunlight and shadows",
        "Optimized performance for desktop and mobile"
      ],
      liveDemo: "https://salarmemon.github.io/Solar-System-/",
      github: "https://github.com/Salarmemon/Solar-System-"
    }, 
    {
      title: "Responsive Landing Page for AI Writing Assistant",
      description: "This is a personal project in which I developed a responsive landing page for an AI-powered writing assistant using HTML, CSS, and JavaScript. This project showcases my front-end development skills, including responsive design, user interface creation, and interactive features.",
      features: [
        "Fully responsive design that adapts to all screen sizes",
        "Clean and modern UI/UX design",
        "Interactive elements such as hover effects and smooth scrolling",
        "Optimized for fast loading and performance",
        "Built with semantic HTML, CSS, and vanilla JavaScript"
      ],
      liveDemo: "https://fantastic-cannoli-d714b4.netlify.app/",
      github: "https://github.com/Salarmemon/Landing-Page-AI-Writing-Assistant"
    },
    {
      title: "Cipher Tool", 
      description: "A lightweight JavaScript app for encrypting and decrypting text using Vigenère and Caesar ciphers.",
      features: [
        "Supports Vigenère and Caesar ciphers",
        "Real-time encryption and decryption",
        "Smart key detection & validation",
        "Dark mode with persistent state",
        "Copy to clipboard",
        "Download encrypted/decrypted text",
        "Generate QR codes",
        "Fully responsive design",
        "Clean HTML, CSS, and JavaScript"
      ],
      liveDemo: "https://lighthearted-cassata-888e2e.netlify.app/",
      github: "https://github.com/Salarmemon/Cipher-Tool"
    },
    {
      title: "Starfish HTML5 Game",
      description: "This is a browser-based game built using HTML5, CSS, and JavaScript. Your goal is to collect fish to help your starfish grow. The more fish you collect, the larger your starfish becomes.",
      features: [
        "Completly responsive all screen sizes", 
        "Intuitive controls",
        "loads quickly in any browser"
      ],
      liveDemo: "https://gentle-tiramisu-043f3a.netlify.app/",
      github: "https://github.com/Salarmemon/Starfish-Game"
    }
  ];

  return (
    <motion.section id="projects" className={ProjectStyles.projects} initial={{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 0.8, ease: "easeIn"}} viewport={{once: true}}>
      <h2>Projects</h2>

       <div className={ProjectStyles.projectsContainer}>

        {projects.map((project, index) => (
          <motion.div key={index} className={ProjectStyles.project} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: index * 0.2 }} viewport={{ once: true }}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.features.map((feature, i) => (
                <li key={i}>{feature}</li>
              ))}
            </ul>
            <div >
              <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                Live Demo
              </a> ||   <a href={project.github} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Projects;
