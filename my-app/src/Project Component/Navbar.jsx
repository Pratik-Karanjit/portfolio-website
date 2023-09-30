import React from 'react';
import meicon from '../Project CSS/logo.png';

const Navbar = ({ scrollToAbout, scrollToResume, scrollToContact }) => {
  return (
    <nav className='navbar navbar-expand-md navbar-light' style={{ background: 'black' }}>
      <div className='container-xxl d-flex justify-content-between align-items-center'>
        <a href="/" style={{ textDecoration: 'none' }}>
          <img src={meicon} alt="me" style={{ height: '50px' }} />
        </a>

        <button
          className="navbar-toggler bg-light"
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
