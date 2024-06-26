// Navbar.js
import React from 'react';
import '../../index.scss'; // Import your Sass file

const Navbar = () => {
  return (
    <nav id="desktop-nav">
      <div className="logo">John Doe</div>
      <div>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
