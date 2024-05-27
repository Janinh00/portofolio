import React from 'react';
import '../../index.scss'; // Import your Sass file

// Import images at the top
import profilePic from '../assets/pp.png';
import linkedInIcon from '../assets/linkedin.png';
import githubIcon from '../assets/github.png';

const Profile = () => {
  return (
    <section id="profile">
      <div className="section__pic-container">
        {/* <img src={profilePic} alt="foto" /> */}
      </div>
      <div className="section__text">
        <p className="section__text__p1">Hello, I am</p>
        <h1 className="title">Prajna Putra</h1>
        <p className="section__text__p2">Frontend Developer</p>
        <div className="btn-container">
          <button
            className="btn btn-color-2"
            // onClick={() => window.open(require('../assets/resume-example.pdf'))}
          >
            Download CV
          </button>
          <button className="btn btn-color-1" onClick={() => window.location.href='./#contact'}>
            Contact Info
          </button>
        </div>
        <div id="socials-container">
          <img
            src={linkedInIcon}
            alt="My LinkedIn profile"
            className="icon"
            onClick={() => window.location.href='https://www.linkedin.com/in/prajna-t-g-putra-6892a01a1'}
          />
          <img
            src={githubIcon}
            alt="My Github profile"
            className="icon"
            onClick={() => window.location.href='https://github.com/janinh00'}
          />
        </div>
      </div>
    </section>
  );
}

export default Profile;
