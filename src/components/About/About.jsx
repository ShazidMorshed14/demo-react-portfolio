import React from 'react';
import '../About/About.css';
import MeAbout from "../../img/me_about.jpg";

const About = () => {
    return (
        <div className="a">
            <div className="a-left">
                <div className="a-card bg"></div>
                <div className="a-card">
                    <img src={MeAbout} alt="abour-pic" className="a-img" />
                </div>
            </div>
            <div className="a-right">
                <h1 className="a-title">About Me</h1>
                 <p className="a-sub">I am a Front-end Developer. I like to create websites with React js. Currently learning full-stack Development with MERN.  </p>
                 <div className="a-education">
                     <h2 className="a-title">Education</h2>
                     <p className="a-uni">Ahsanullah University Of Science & Technology,Bangladesh</p>         
                     <p>B.Sc. in Computer Science & Engineering</p>
                 </div>
                 <h2 className="a-title a-skills ">Skills</h2>
                 <div className="a-languages">
                     <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" className="a-language-images" alt="no_img"/>
                     <img src="https://img.icons8.com/color/48/000000/css3.png" className="a-language-images" alt="no_img"/>
                     <img src="https://img.icons8.com/plasticine/48/000000/react.png" className="a-language-images" alt="no_img"/>
                     <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" className="a-language-images" alt="no_img"/>
                     <img src="https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" className="a-language-images" alt="no_img"/>
                     <img src="https://img.icons8.com/color/48/000000/python.png" className="a-language-images" alt="no_img"/>
                 </div>
            </div>
            
        </div>
    );
};

export default About;