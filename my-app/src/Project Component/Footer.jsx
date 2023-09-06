import React from 'react';
import '../Project CSS/page.css';

const Footer = () => {
  return (
    <footer className="footer-section bg-white text-dark py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="social-icons d-flex mt-5">
              <a href="https://www.facebook.com/Pratik.Karanjit/" target='_blank'><i className="fab fa-facebook"></i></a>
              <a href="https://www.linkedin.com/in/pratik-karanjit/" target='_blank'><i className="fab fa-linkedin"></i></a>
              <a href="https://www.instagram.com/pratik_karanjit/" target='_blank'><i className="fab fa-instagram"></i></a>
              <a href="https://github.com/Pratik-Karanjit" target='_blank'><i className="fab fa-github"></i></a>
            </div>
          </div>
          <div className="col-md-4 mt-2">
            <p className="mb-5">Want to work together? <br /> Let's talk.</p>
          </div>
          <div className="col-md-4">
            <div className="contact-info">
              <p className="mb-0">pratikkaranjit@gmail.com</p>
              <p>9847346220</p>
              
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
