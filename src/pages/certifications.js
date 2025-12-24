import React from 'react';
import FCCWebDesignCert from '../assets/FCCWebdesignCert.jpg';
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
import certStyles from './cert.module.css'
function Certifications() {
  return (
    
<section id="certifications" className={certStyles.certifications}>
  <h2>Certifications</h2>

  <div className={certStyles.container}>

  <div className={certStyles.certification}>

    <h3>Responsive Web Design – freeCodeCamp</h3>
    <a href="https://freecodecamp.org/certification/salarahmedmemon/responsive-web-design" target="_blank"rel="noopener noreferrer">
      <img src={FCCWebDesignCert} width="300"/>
    </a> 
  </div>

  <div className={certStyles.certification}>
  <h3>JavaScript Algorithms And Data Structures Certification - FreeCodeCamp</h3>
  <a href="https://freecodecamp.org/certification/salarahmedmemon/javascript-algorithms-and-data-structures-v8" target="_blank" rel="noopener noreferrer">
      <img src={FCCJavascriptCert} width="300"/>
  </a>
  </div>

  <div className={certStyles.certification}>
  <h3>Front-End Development Libraries Certification- FreeCodeCamp</h3>
  <a href="https://freecodecamp.org/certification/salarahmedmemon/front-end-development-libraries" target="_blank" rel="noopener noreferrer">
      <img src={FCCfrontendLibrariesCert} width="300"/>
  </a>
  </div>

  <div className={certStyles.certification}>
  <h3>Game Development Certification - Sololearn</h3>
  <a href="https://api2.sololearn.com/v2/certificates/CT-XFGCZ7JZ/image/png?t=638570604215801100" target="_blank" rel="noopener noreferrer">
      <img src={GameDevCert} width="300"/>
  </a>
  </div>

<div className={certStyles.certification}>
 <h3>Tech For Everyone Certification - Sololearn</h3>
  <a href="https://api2.sololearn.com/v2/certificates/CC-UDTIVCMZ/image/png?t=638815152046904950" target="_blank" rel="noopener noreferrer">
      <img src={TechForEveryoneCert} width="300"/>
  </a>
  </div>
<div className={certStyles.certification}>
   <h3>Responsive Web Design Certification - Sololearn</h3>
  <a href="https://api2.sololearn.com/v2/certificates/CT-0UT64KJI/image/png?t=0" target="_blank" rel="noopener noreferrer">
      <img src={ResponsiveWebDesignCert} width="300"/>
  </a>
  </div>

<div className={certStyles.certification}>
   <h3>Python Intermediate Certification - Sololearn</h3>
  <a href="https://api2.sololearn.com/v2/certificates/CC-USILKFOO/image/png?t=638845405585445420" target="_blank" rel="noopener noreferrer">
      <img src={PythonIntermediateCert} width="300"/>
  </a>
  </div>

  <div className={certStyles.certification}>
   <h3>PHP Certification - Sololearn</h3>
  <a href="https://api2.sololearn.com/v2/certificates/CT-GY2KBN9H/image/png?t=0" target="_blank" rel="noopener noreferrer">
      <img src={PHPCert} width="300"/>
  </a>
  </div>

  <div className={certStyles.certification}>
   <h3>ML For Beginners Certification - Sololearn</h3>
  <a href="https://api2.sololearn.com/v2/certificates/CC-KVOBJK5L/image/png?t=638757292651780550" target="_blank" rel="noopener noreferrer">
      <img src={MLForBeginnersCert} width="300"/>
    </a>
    </div>

    <div className={certStyles.certification}>
     <h3>JavaScript Intermediate Certification - Sololearn</h3>
  <a href="https://api2.sololearn.com/v2/certificates/CC-TU39Z2TL/image/png?t=638699388887855820" target="_blank" rel="noopener noreferrer">
      <img src={JavaScriptIntermediateCert} width="300"/>
  </a>
  </div>

<div className={certStyles.certification}>
     <h3>Introduction To Python Certification - Sololearn</h3>
  <a href="https://api2.sololearn.com/v2/certificates/CC-IAQIT4ZI/image/png?t=638722968513711730" target="_blank" rel="noopener noreferrer">
      <img src={IntroToPythonCert} width="300"/>
  </a>
  </div>

<div className={certStyles.certification}>
     <h3>Introduction To JavaScript Certification - Sololearn</h3>
  <a href="https://api2.sololearn.com/v2/certificates/CC-LZCWML2J/image/png?t=0" target="_blank" rel="noopener noreferrer">
      <img src={IntroToJavaScriptCert} width="300"/>
  </a>
  </div>

 <div className={certStyles.certification}>
       <h3>Introduction To HTML Certification - Sololearn</h3>
  <a href="https://api2.sololearn.com/v2/certificates/CC-CESSH8DB/image/png?t=0" target="_blank" rel="noopener noreferrer">
      <img src={IntroToHTMLCert} width="300"/>
  </a>
  </div>

     <div className={certStyles.certification}>
       <h3>Introduction To CSS Certification - Sololearn</h3>
  <a href="https://api2.sololearn.com/v2/certificates/CC-TIWQOXVJ/image/png?t=0" target="_blank" rel="noopener noreferrer">
      <img src={IntroToCSSCert} width="300"/>
  </a>
  </div>
  
  </div>

</section>
)  
}
export default Certifications;