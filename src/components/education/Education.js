// Experience.js
import React from 'react';
import '../../index.scss'; // Import your Sass file


const Education = () => {
  return (
    <section id="education">
      <h1 className="title">Educations</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <div className="article-container">
              <article>
                <div>
                <img
                src={require('../assets/education.png')}
                alt="Education icon"
                class="icon"
              />
                  <h3>Bakrie University</h3>
                  <p>2019 - 2023</p>
                </div>
              </article>
              <article>
                <div>
                <img
                src={require('../assets/education.png')}
                alt="Education icon"
                class="icon"
              />
                  <h3>SMK Diponegoro 1</h3>
                  <p>2016 - 2019</p>
                </div>
              </article>

            </div>
          </div>
        </div>
      </div>
      {/* <img
        src={require('../assets/arrow.png')}
        alt="Arrow icon"
        className="icon arrow"
        onClick={() => window.location.href='./#projects'}
      /> */}
    </section>
  );
}

export default Education;
