import React, { useEffect, useState } from 'react';
import fbicon from '../Project CSS/mee.png';
import '../Project CSS/page.css';

const About = ({ scrollToContact }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setFadeIn(true);
  }, []);

  return (
    <section id="intro" style={{ background: 'black', minHeight: '96vh', position: 'relative' }}>
      <div className="container-lg">
      <div className="row g-4 justify-content-center align-items-center custom-margin-top">
          <div className={`col-md-5 mt-15 text-center text-md-start fade-in ${fadeIn ? 'active' : ''}`} style={{ marginLeft: 'auto' }}>
            <h1>
              <div className="display-1" style={{ color: 'white' }}>Hi,</div>
              <div className="display-2" style={{ color: 'white' }}><i>I'm Pratik</i></div>
            </h1>
            <h3 className="lead my-4" style={{ color: 'white' }}>
              Based in Kathmandu, I am pursuing my Bachelors Degree at Islington College.
              My skills lie in developing websites, and I have expertise in the MERN Stack.
              Join me on my journey as I create innovative web solutions.
            </h3>
            <button className='btn d-block d-md-inline-block' style={{ background: 'yellow', fontWeight: 'bold', marginBottom: '15px' }} onClick={scrollToContact}>
              Let's Connect!
            </button>
          </div>
          <div className="col-md-5 text-center d-md-block position-absolute bottom-0 start-0" style={{ left: 'auto', zIndex: '1' }}>
            <img src={fbicon} className="img-fluid me" alt="me" style={{ height: 'auto', maxWidth: '78%', maxHeight: '650px', width: '100%' }} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;







// import React, { useEffect, useState } from 'react';
// import fbicon from '../Project CSS/mee.png';
// import '../Project CSS/page.css';
// import backgroundImg from '../Project CSS/black.jpg'; // Update the path and filename accordingly

// const About = ({ scrollToContact }) => {
//   const [fadeIn, setFadeIn] = useState(false);

//   useEffect(() => {
//     setFadeIn(true);
//   }, []);

//   return (
//     <section id="intro" style={{ background: 'black', minHeight: '96vh', position: 'relative' }}>
//       <div className="container-lg">
//         <div className="row g-4 justify-content-center align-items-center">
//           <div className={`col-md-5 mt-15 text-center text-md-start fade-in ${fadeIn ? 'active' : ''}`}>
//             <h1>
//               <div className="display-1" style={{ color: 'white' }}>Hi,</div>
//               <div className="display-2" style={{ color: 'white' }}><i>I'm Pratik</i></div>
//             </h1>
//             <h3 className="lead my-4" style={{ color: 'white' }}>
//               Based in Kathmandu, I am pursuing my Bachelors Degree at Islington College.
//               My skills lie in developing websites, and I have expertise in the MERN Stack.
//               Join me on my journey as I create innovative web solutions.
//             </h3>
//             <button className='btn' style={{ background: 'yellow', fontWeight: 'bold' }} onClick={scrollToContact}>
//               Let's Connect!
//             </button>
//           </div>
//           <div className="col-md-5 text-center d-md-block position-absolute bottom-0 end-0">
//             <img src={fbicon} className="img-fluid me" alt="me" style={{ height: 'auto', maxWidth: '100%', maxHeight: '700px' }} />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default About;


