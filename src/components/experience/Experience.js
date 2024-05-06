// Experience.js
import React from 'react';
import '../../index.scss'; // Import your Sass file


const Experience = () => {
  return (
    <section id="experience">
      <h1 className="title">Experience</h1>
      <div className="experience-details-container">
        <div className="about-containers">
          <div className="details-container">
            <div className="article-container">
              <article>
                <div>
                <img
                src={require('../assets/checkmark.png')}
                alt="Education icon"
                class="icon"
              />
                  <h3>Front End Developer - PT. Indovest Global Pratama</h3>
                  <p>October 2023 - February 2024</p>
                </div>
              </article>
              <article>
              <div>
              <img
                src={require('../assets/checkmark.png')}
                alt="Education icon"
                class="icon"
              />
                  <h3>Front End Engineering (Intern) - Ruangguru</h3>
                  <hp>February 2022 - July 2022</hp>
                </div>
              </article>
              <article>
              <div>
              <img
                src={require('../assets/checkmark.png')}
                alt="Education icon"
                class="icon"
              />
                  <h3>Front End Developer - PT. Mega Utama Pertiwi</h3>
                  <p>October 2022 - January 2023</p>
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

export default Experience;
