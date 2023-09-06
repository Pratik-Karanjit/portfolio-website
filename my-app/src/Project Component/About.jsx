// import React, { useEffect, useState } from 'react';
// // import '../Project CSS/page.css'; // Import the external CSS file
// import fbicon from '../Project CSS/mee.png';
// import logoicon from '../Project CSS/logo.png';

// const About = () => {
//   const [animate, setAnimate] = useState(false);

//   useEffect(() => {
//     setTimeout(() => {
//       setAnimate(true);
//     }, 500);

//     setTimeout(() => {
//       setAnimate(false);
//     }, 2500);
//   }, []);

//   return (
//     <div className='hero'>
     
//       <img src={logoicon} className='logo' alt='logo' /> {/* Logo image */}
//       <div className='description'>
//         <div className={`content ${animate ? 'animated' : ''}`}>
//           <div className='text'>
//           <h1>Hi, <br /> <i>I'm Pratik</i></h1>
//           <h3>Based in Kathmandu, I am pursuing my Bachelors Degree<br></br> at Islington College.
//           My skills lie in developing websites <br></br>and I have expertise in the MERN Stack. 
//           Join me on my <br></br>journey as I create innovative web solutions.</h3>
//           </div>
//           <div className='images'>
//             <img src={fbicon} className='me' alt='me' />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default About;




// About.js
import React, { useEffect, useState } from 'react';
import fbicon from '../Project CSS/mee.png';
import '../Project CSS/page.css';
import backgroundImg from '../Project CSS/black.jpg'; // Update the path and filename accordingly


const About = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section id="intro" style={{ background: 'black', minHeight: '96vh' }}>

      <div className="container-lg">
        <div className="row g-4 justify-content-center align-items-center">
        <div className={`col-md-5 mt-15 text-center text-md-start fade-in ${fadeIn ? 'active' : ''}`}>
  <h1>
    <div className="display-1" style={{ color: 'white' }}>Hi,</div>
    <div className="display-2" style={{ color: 'white' }}><i>I'm Pratik</i></div>
  </h1>
  <h3 className="lead my-4" style={{ color: 'white' }}>
    Based in Kathmandu, I am pursuing my Bachelors Degree at Islington College.
    My skills lie in developing websites and I have expertise in the MERN Stack.
    Join me on my journey as I create innovative web solutions.
  </h3>
</div>
          <div className="col-md-5 text-center d-md-block">
            <img src={fbicon} className="img-fluid me" alt="me" style={{position: 'absolute', right: '300px', bottom: '0', height: '700px'}}/>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;


