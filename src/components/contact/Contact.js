// Contact.js
import React from 'react';
import '../../index.scss'; // Import your Sass file


const Contact = () => {
  return (
    <section id="contact">
      <h1 className="title">Contact Me</h1>
      <div className="contact-info-upper-container">
        <div className="contact-info-container">
          <img
            src={require('../assets/email.png')}
            alt="Email icon"
            className="icon contact-icon email-icon"
          />
          <p><a href="mailto:prajnaptr2312@gmail.com">prajnaptr2312@gmail.com</a></p>
        </div>
        <div className="contact-info-container">
          <img
            src={require('../assets/linkedin.png')}
            alt="LinkedIn icon"
            className="icon contact-icon"
          />
          <p><a href="https://www.linkedin.com/in/prajna-t-g-putra-6892a01a1/">LinkedIn</a></p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
