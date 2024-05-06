import React from 'react';

const About = () => {
  return (
    <section id="about">
      <h1 className="title">About Me</h1>
      <div className="section-container">
        <div className="section__pic-container">
        <img src={require('../assets/ppp.png')} alt="foto"
            className="about-pic"
          />
        </div>
        <div className="about-details-container">
          <div className="text-container">
            <p>
            Tech Enthusiast who really loves programming and UX/UI designing, Also proficient in HTML, CSS, Javascript, React.JS, Bootstrap, and C++. Graduated from Bakrie University, majoring in Information Systems. With knowledge of UX/UI Design and Web Programming. I have a proven ability to design a prototype and an application that meet the needs of end-users.
            </p>
          </div>
        </div>
      </div>
      {/* <img
        src="./assets/arrow.png"
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => {}} // Add your onClick functionality here
      /> */}
    </section>
  );
};

export default About;
