import React from 'react';
import meicon from '../Project CSS/logo.png';

const Navbar = ({ scrollToAbout, scrollToResume, scrollToContact }) => {
  return (
    <nav className='navbar navbar-expand-md navbar-light' style={{background: 'black'}}>
      <img src={meicon} alt="mee" style={{ height: '50px', marginLeft: '6rem' }} />

    <div className='container-xxl'>
      <a href='#intro' className='navbar-brand'>
        {/* <span className='fw-bold text-secondary'>
          My Portfolio Page
        </span> */}
      </a>

      <button
        className="navbar-toggler"
        type='button'
        data-bs-toggle="collapse"
        data-bs-target="#main-nav"
        aria-controls="main-nav"
        aria-expanded="false"
        aria-label='Toggle navigation'
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse justify-content-end align-center" id="main-nav">
        <ul className="navbar-nav" style={{ fontSize: '14px' }}>
          <li className="nav-item">
            <a className="nav-link" href="#about" onClick={scrollToAbout}>
              About Me
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#resume" onClick={scrollToResume}>
              Resume
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#contact" onClick={scrollToContact}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default Navbar;
