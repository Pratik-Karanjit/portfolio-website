// import React, { useRef } from 'react';
// import NavBar from "./Routes/NavBar.jsx";
// import About from './Project Component/About.jsx';
// import Resume from './Project Component/Resume.jsx';
// import Contact from './Project Component/Contact.jsx';
// import '../src/Project CSS/navbar.css'; // Import the external CSS file
// import Footer from './Project Component/Footer.jsx';

import { useRef } from "react";
import Navbar from "./Project Component/Navbar";
import About from "./Project Component/About";
import Resume from "./Project Component/Resume";
import ContactPage from "./Project Component/Contact";
import Footer from "./Project Component/Footer";

// const WowProject = () => {
//   const aboutRef = useRef(null);
//   const resumeRef = useRef(null);
//   const contactRef = useRef(null);
  

//   const scrollToSection = (ref) => {
//     ref.current.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <div>
      
//       <NavBar
//         scrollToAbout={() => scrollToSection(aboutRef)}
//         scrollToResume={() => scrollToSection(resumeRef)}
//         scrollToContact={() => scrollToSection(contactRef)}
//       />

//       <div ref={aboutRef}>
//         <About />
//       </div>

//       <div ref={resumeRef}>
//         <Resume />
//       </div>

//       <div ref={contactRef}>
//         <Contact />
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default WowProject;


const WowProject = () => {
    const aboutRef = useRef(null);
    const resumeRef = useRef(null);
    const contactRef = useRef(null);
    
    const scrollToSection = (ref) => {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    };
  
    return (
      <div>
        <Navbar
          scrollToAbout={() => scrollToSection(aboutRef)}
          scrollToResume={() => scrollToSection(resumeRef)}
          scrollToContact={() => scrollToSection(contactRef)}
        />
  
        <div ref={aboutRef}>
          <About />
        </div>
  
        <div ref={resumeRef}>
          <Resume />
        </div>
  
        <div ref={contactRef}>
          <ContactPage />
          <Footer />
        </div>
      </div>
    );
  };
  
  export default WowProject;
  