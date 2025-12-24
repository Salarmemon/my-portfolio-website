import ProjectStyles from './project.module.css';

import solarSystenImage from '../assets/SOLAR.PNG';
import landingPageImg from '../assets/Landing page.PNG';
import cipherToolImg from '../assets/Cipher.PNG'
import starFishImg from '../assets/starfishImg.PNG'
function Projects() {
  return (
    <section id="projects" className={ProjectStyles.projects}>
      <h2>Projects</h2>

       <div className={ProjectStyles.projectsContainer}>
      {/* Project 1 */}
      <div className={ProjectStyles.project}>
        <h3>Interactive 3D Solar System — Built with Three.js</h3>

        <p>
          Explore the wonders of our universe through this stunning 3D Solar
          System simulation powered by Three.js.
        </p>

        <h3>Key Features</h3>
        <ul>
          <li>Realistic 3D planets with high-quality textures</li>
          <li>Accurate orbital animations and natural lighting</li>
          <li>Dynamic sunlight and shadows</li>
          <li>Optimized performance for desktop and mobile</li>
        </ul>

        <a
          href="https://salarmemon.github.io/Solar-System-/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/Salarmemon/Solar-System-"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <br/>
        <img src={solarSystenImage} alt='solar-system image' className={ProjectStyles.image} />
      </div>

      
        
      {/* Project 3 */}
      <div className={ProjectStyles.project}      >
        <h3>Responsive Landing Page for AI Writing Assistant</h3>
        <p>
          This is a personal project in which I developed a responsive landing page for an AI-powered writing assistant using HTML, CSS, and JavaScript. This project showcases my front-end development skills, including responsive design, user interface creation, and interactive features.
        </p>

        <a
          href="https://fantastic-cannoli-d714b4.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/Salarmemon/AI-Writing-Tool-"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>

        <img src={landingPageImg} alt='landing page image' className={ProjectStyles.image}/>
      </div>

      {/* Project 4 */} 
      <div className={ProjectStyles.project}>
        <h3>Cipher Tool</h3>

        <p>
          A lightweight JavaScript app for encrypting and decrypting text using
          Vigenère and Caesar ciphers.
        </p>

        <h3>Features</h3>
        <ol>
          <li>Supports Vigenère and Caesar ciphers</li>
          <li>Real-time encryption and decryption</li>
          <li>Smart key detection & validation</li>
          <li>Dark mode with persistent state</li>
          <li>Copy to clipboard</li>
          <li>Download encrypted/decrypted text</li>
          <li>Generate QR codes</li>
          <li>Fully responsive design</li>
          <li>Clean HTML, CSS, and JavaScript</li>
        </ol>

        <a
          href="https://lighthearted-cassata-888e2e.netlify.app/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Demo
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/Salarmemon/Vigen-re-and-Caesar-cipher-Encryptor-And-Decryptor-"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <img src={cipherToolImg} alt='cipher tool image' className={ProjectStyles.image} />
      </div>
      {/* Project 4 */} 
     <div className={ProjectStyles.project}>
        <h3>Starfish HTML5 Game</h3>
        <p>This is a browser-based game built using HTML5, CSS, and JavaScript. Your goal is to collect fish to help your starfish grow. The more fish you collect, the larger your starfish becomes.</p>
        <h3>Features</h3>
        <ol>
          <li>Completly responsive all screen sizes 
          </li>
          <li>Intuitive controls</li>
          <li>loads quickly in any browser</li>
        </ol>
        <a
          href="https://gentle-tiramisu-043f3a.netlify.app/"
          
          target="_blank"
          rel="noopener noreferrer"
        > 
          Live Demo
        </a>{" "}
        |{" "}
        <a
          href="https://github.com/Salarmemon/StarFish-Game"
          target="_blank"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
        <img src={starFishImg} alt='Starfish Game  image' className={ProjectStyles.image} />
     </div> 

     </div>
    </section>
  );
}

export default Projects;
