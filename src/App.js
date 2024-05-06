// App.js
import React from 'react';
import Navbar from './components/navbar/Navbar';
import Profile from './components/profile/Profile';
import Experience from './components/experience/Experience';
import Education from './components/education/Education';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import About from './components/about/About';


const App = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <Profile />
      <About />
      <Experience />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
