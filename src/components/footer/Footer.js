// Footer.js
import React from 'react';
import '../../index.scss'; // Import your Sass file


const Footer = () => {
  return (
    <footer>
      {/* <nav>
        <div className="nav-links-container">
          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#experience">Experience</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </nav> */}
      <p>Copyright &#169; {new Date().getFullYear()} Prajna Putra. All Rights Reserved.</p>
    </footer>
  );
}

export default Footer;
