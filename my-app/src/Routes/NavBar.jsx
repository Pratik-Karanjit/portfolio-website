
// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import '../Project CSS/navbar.css'; // Import the external CSS file

// const NavBar = () => {
//   return (
//     <div>
//       <nav className="navbar">
//         <NavLink to="/home" className="navbar-link">Home</NavLink>
//         <NavLink to="/about" className="navbar-link">About</NavLink>
//         <NavLink to="/resume" className="navbar-link">Resume</NavLink>
//         <NavLink to="/contact" className="navbar-link">Contact</NavLink>
//       </nav>
//     </div>
//   );
// };

// export default NavBar;


import React from 'react';
import '../Project CSS/navbar.css'; // Import the external CSS file

const NavBar = ({ scrollToAbout, scrollToResume, scrollToContact }) => {
  return (
    <div>
      <nav className="navbar">
        <button className="navbar-link" onClick={scrollToAbout}>About</button>
        <button className="navbar-link" onClick={scrollToResume}>Resume</button>
        <button className="navbar-link" onClick={scrollToContact}>Contact</button>
      </nav>
    </div>
  );
};

export default NavBar;

