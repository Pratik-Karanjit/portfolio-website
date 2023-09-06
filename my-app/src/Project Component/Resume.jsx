// import React from 'react';
// import '../Project CSS/page.css'; // Make sure to import your CSS file
// import resumeImg from '../Project CSS/me.png';

// const Resume = () => {
//   return (
//     <section id="resume" className="resume-section py-5">
//       <div className="container">
//         <div className="row">
//           <div className="col-md-3 order-2 order-md-1 bg-light">
//             {/* Left section */}
//             <div className="resume-left-section">
//               <div className="resume-photo">
//                 <img src={resumeImg} alt="Resume" className="img-fluid rounded-circle" />
//                 <h3>Pratik Karanjit</h3>
//               <p>Full Stack Developer</p>
//               <p>Residence: Kathmandu, Nepal</p>
//               </div>
//               <div className="resume-skills">
//                 {/* ReactJS Skill */}
//                 <div className="circular-field">
//                   <div className="progress-circle">
//                     <span className="progress-percentage">80%</span>
//                   </div>
//                   <p>ReactJS</p>
//                 </div>

//                 {/* ExpressJS Skill */}
//                 <div className="circular-field">
//                   <div className="progress-circle">
//                     <span className="progress-percentage">80%</span>
//                   </div>
//                   <p>ExpressJS</p>
//                 </div>

//                 {/* MongoDB Skill */}
//                 <div className="circular-field">
//                   <div className="progress-circle">
//                     <span className="progress-percentage">70%</span>
//                   </div>
//                   <p>MongoDB</p>
//                 </div>
//    {/* CSS Skill */}
//    <div className="circular-field">
//                   <div className="progress-circle">
//                     <span className="progress-percentage">70%</span>
//                   </div>
//                   <p>CSS</p>
//                 </div>
             
//               </div>
//               <div className="resume-download">
//                 <a href="/path-to-your-cv.pdf" className="btn btn-primary">Download CV</a>
//               </div>
//             </div>
//           </div>
//           <div className="col-md-9 order-1 order-md-2">
//             {/* Main content */}
//             <div className="resume-main-content">
//               {/* Main content */}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Resume;



import React from 'react';
import '../Project CSS/page.css'; // Make sure to import your CSS file
import resumeImg from '../Project CSS/me.png';

const Resume = () => {
  return (
    <section id="resume" className="resume-section py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-3 order-2 order-md-1 bg-light">
            {/* Left section */}
            <div className="resume-left-section">
              <div className="resume-photo">
                <img src={resumeImg} alt="Resume" className="img-fluid rounded-circle" />
                <h3>Pratik Karanjit</h3>
                <p>Full Stack Developer</p>
                <p>Residence: Kathmandu, Nepal</p>
              </div>
              <div className="resume-skills">
                {/* Skills */}
                <div className="circular-field">
  <svg width="100" height="100">
    <circle
    className="progress-circle reactjs-progress"
      cx="50"
      cy="50"
      r="40" /* Adjust the radius as needed */
    />
    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="progress-percentage">
      80%
    </text>
  </svg>
  <p>ReactJS</p>
</div>

<div className="circular-field">
  <svg width="100" height="100">
    <circle
     className="progress-circle expressjs-progress"
      cx="50"
      cy="50"
      r="40" /* Adjust the radius as needed */
    />
    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="progress-percentage">
      75%
    </text>
  </svg>
  <p>ExpressJS</p>
</div>
<div className="circular-field">
  <svg width="100" height="100">
    <circle
      className="progress-circle"
      cx="50"
      cy="50"
      r="40" /* Adjust the radius as needed */
    />
    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="progress-percentage">
      70%
    </text>
  </svg>
  <p>MongoDB</p>
</div>
<div className="circular-field">
  <svg width="100" height="100">
    <circle
      className="progress-circle"
      cx="50"
      cy="50"
      r="40" /* Adjust the radius as needed */
    />
    <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" className="progress-percentage">
      70%
    </text>
  </svg>
  <p>CSS</p>
</div>
              </div>
              <div className="resume-download">
                <a href="/path-to-your-cv.pdf" className="btn btn-primary">Download CV</a>
              </div>
            </div>
          </div>


          <div className="container-lg" style={{marginLeft: '10rem'}}>
      <div className="row">
        <div className="col-md-12 order-1 order-md-2" style={{ background: 'rgb(37, 37, 55)', borderRadius: '1rem' }}>
          {/* Right section */}
          <div className="resume-right-div bg-dark">
            <h2 style={{ color: "white", paddingRight: "450px", paddingTop: "30px" }}>Discover my Work Space</h2>
            <p style={{ color: "white" }}>
      <span style={{ paddingRight: "450px" }}>
        <span style={{ color: "yellow" }}>&lt;code&gt;</span> I develop websites. <span style={{ color: "yellow" }}>&lt;/code&gt;</span>
      </span>
    </p>
            <button className="btn" style={{ marginRight: "500px", background: "yellow", fontWeight: 'bold' }}>Explore</button>
            {/* <div className="resume-photo">
              <img src={resumeImg} alt="Resume" className="img-fluid rounded-circle" />
            </div> */}
            {/* Add more content as needed */}
          </div>
        </div>

        
      </div>
      <div className="col-md-12">
          <div style={{ display: "flex", padding: "1.5rem", gap: '1rem', marginLeft: "20px", justifyContent: 'space-around' }}>
            <div style={{ background: '#252531', padding: '1.5rem', borderRadius: '1rem', color: 'white'}}>
              <h3>1</h3> <h5> Year Experience</h5>
            </div>
            <div style={{ background: '#252531', padding: '1.5rem', borderRadius: '1rem', color: 'white'}}>
              <h3>3</h3> <h5> Completed Projects</h5>
            </div>
            <div style={{ background: '#252531', padding: '1.5rem', borderRadius: '1rem', color: 'white'}}>
              <h3>1</h3> <h5> Completed Projects</h5>
            </div>
            <div style={{ background: '#252531', padding: '1.5rem', borderRadius: '1rem', color: 'white'}}>
              <h3>1</h3> <h5> Completed Projects</h5>
            </div>
          </div>
        </div>

      <div className="row justify-content-center" style={{ marginTop: "20px" }}>
        <div className="col-md-4">
          <div class="p-5 text-light" style={{ background: 'rgb(37, 37, 49)', borderRadius: '10px'  }}>
            <p style={{ fontSize: "18px" }}>Login Management System</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisisuscipi</p>
            <button style={{ background: "yellow", borderRadius: '7px', padding: '5px 10px', fontWeight: 'bold', marginTop: '2rem' }}>More</button>
          </div>
        </div>
        <div className="col-md-4">
          <div class="p-5 text-light" style={{ background: 'rgb(37, 37, 49)', borderRadius: '10px' }}>
            <p style={{ fontSize: "18px" }}>Login Management System</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisisuscipi</p>
            <button style={{ background: "yellow", borderRadius: '7px', padding: '5px 10px', fontWeight: 'bold', marginTop: '2rem' }}>More</button>
          </div>
        </div>
        <div className="col-md-4">
          <div class="p-5 text-light" style={{ background: 'rgb(37, 37, 49)', borderRadius: '10px'  }}>
            <p style={{ fontSize: "18px" }}>Login Management System</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisisuscipi</p>
            <button style={{ background: "yellow", borderRadius: '7px', padding: '5px 10px', fontWeight: 'bold', marginTop: '2rem' }}>More</button>
          </div>
        </div>
      </div>
    </div>
        </div>
      </div>
    </section>
  );
};

export default Resume;