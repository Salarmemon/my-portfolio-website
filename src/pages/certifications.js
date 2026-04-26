import React from 'react';
import { motion } from 'framer-motion';

import FCCWebDesignCert from '../assets/FCCWebdesignCert.PNG';
import FCCfrontendLibrariesCert from '../assets/FCCFront-endLibrariesCert.jpg';
import FCCJavascriptCert from '../assets/FCCJavascriptCert.jpg';
import GameDevCert from '../assets/Game Development with JS_certificate.jpg';       
import TechForEveryoneCert from '../assets/Tech for Everyone_certificate (1).jpg';  
import ResponsiveWebDesignCert from '../assets/Responsive Web Design_certificate.jpg';
import PythonIntermediateCert from '../assets/Python Intermediate_certificate (1).jpg';
import PHPCert from '../assets/PHP_certificate.jpg';
import MLForBeginnersCert from '../assets/ML for Beginners_certificate (1).jpg';
import JavaScriptIntermediateCert from '../assets/JavaScript Intermediate_certificate (2).jpg';
import IntroToPythonCert from '../assets/Introduction to Python_certificate (1).jpg';
import IntroToJavaScriptCert from '../assets/Introduction to JavaScript_certificate.jpg';
import IntroToHTMLCert from '../assets/Introduction to HTML_certificate.jpg';
import IntroToCSSCert from '../assets/Introduction to CSS_certificate.jpg';
import FccPythonCert from '../assets/FCC-PYTHON-CERT.PNG';
import FccDatabaseCert from '../assets/FCC-DATABASE-CERT.PNG';
import certStyles from './cert.module.css';

function Certifications() {
    const certifications = [
        { title: "Relational Database – freeCodeCamp", image: FccDatabaseCert, link: "https://freecodecamp.org/certification/salarahmedmemon/relational-databases-v9" },
        { title: "Python – freeCodeCamp", image: FccPythonCert, link: "https://freecodecamp.org/certification/salarahmedmemon/python-v9" },
        { title: "Responsive Web Design – freeCodeCamp", image: FCCWebDesignCert, link: "https://freecodecamp.org/certification/salarahmedmemon/responsive-web-design-v9" },
        { title: "JavaScript Algorithms And Data Structures Certification - FreeCodeCamp", image: FCCJavascriptCert, link: "https://freecodecamp.org/certification/salarahmedmemon/javascript-v9" },
        { title: "Front-End Development Libraries Certification- FreeCodeCamp", image: FCCfrontendLibrariesCert, link: "https://freecodecamp.org/certification/salarahmedmemon/front-end-development-libraries" },
        { title: "Game Development Certification - Sololearn", image: GameDevCert, link: "https://api2.sololearn.com/v2/certificates/CT-XFGCZ7JZ/image/png?t=638570604215801100" },
        { title: "Tech For Everyone Certification - Sololearn", image: TechForEveryoneCert, link: "https://api2.sololearn.com/v2/certificates/CC-UDTIVCMZ/image/png?t=638815152046904950" },
        { title: "Responsive Web Design Certification - Sololearn", image: ResponsiveWebDesignCert, link: "https://api2.sololearn.com/v2/certificates/CT-0UT64KJI/image/png?t=0" },
        { title: "Python Intermediate Certification - Sololearn", image: PythonIntermediateCert, link: "https://api2.sololearn.com/v2/certificates   /CC-USILKFOO/image/png?t=638845405585445420" },
        { title: "PHP Certification - Sololearn", image: PHPCert, link: "https://api2.sololearn.com/v2/certificates/CT-GY2KBN9H/image/png?t=0" },
        { title: "ML For Beginners Certification - Sololearn", image: MLForBeginnersCert, link: "https://api2.sololearn.com/v2/certificates/CC-KVOBJK5L/image/png?t=638757292651780550" },
        { title: "JavaScript Intermediate Certification - Sololearn", image: JavaScriptIntermediateCert, link: "https://api2.sololearn.com/v2/certificates/CC-TU39Z2TL/image/png?t=638699388887855820" },
        { title: "Introduction To Python Certification - Sololearn", image: IntroToPythonCert, link: "https://api2.sololearn.com/v2/certificates/CC-UDTIVCMZ/image/png?t=638815152046904950" },
        { title: "Introduction To JavaScript Certification - Sololearn", image: IntroToJavaScriptCert, link: "https://api2.sololearn.com/v2/certificates/CC-TU39Z2TL/image/png?t=638699388887855820" },
        { title: "Introduction To HTML Certification - Sololearn", image: IntroToHTMLCert, link: "https://api2.sololearn.com/v2/certificates/CC-UDTIVCMZ/image/png?t=638815152046904950" },
        { title: "Introduction To CSS Certification - Sololearn", image: IntroToCSSCert, link: "https://api2.sololearn.com/v2/certificates/CC-UDTIVCMZ/image/png?t=638815152046904950" },

    ];

  return (
    
      <motion.section id="certifications" className={certStyles.certifications} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 0.8, ease: "easeIn" }} viewport={{ once: true }}>
  <h2>Certifications</h2>

  <div className={certStyles.container}>

    {certifications.map((cert, index) => (
      <motion.div key={index} className={certStyles.certification} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: (index % 3) * 0.2 }} viewport={{ once: true }}>
        <h3>{cert.title}</h3>
        <a href={cert.link} target="_blank" rel="noopener noreferrer">
          <img src={cert.image} width="300" alt={`${cert.title} certificate`} />
        </a>
      </motion.div>
    ))}
    </div>
</motion.section>
)  
}
export default Certifications;