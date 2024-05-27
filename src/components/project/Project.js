import React from 'react';
import pahalaaqiqahImage from '../assets/pahalaaqiqah1.png'; // Import the image using require or import
import syshabImage from '../assets/syshab.png'; // Import the image using require or import
import codeassesmentImage from '../assets/codeassesment.png'; // Import the image using require or import


const projectsData = [
  {
    title: 'Project One',
    image: pahalaaqiqahImage,
    githubLink: 'https://github.com/',
    liveDemoLink: 'https://github.com/'
  },
  {
    title: 'Project Two',
    image: syshabImage,
    githubLink: 'https://github.com/',
    liveDemoLink: 'https://github.com/'
  },
 {
    title: 'Project Three',
    image: codeassesmentImage,
    githubLink: 'https://github.com/',
    liveDemoLink: 'https://github.com/'
  }
];

const Project = ({ title, image, githubLink, liveDemoLink }) => (
  <div className="details-container color-container">
    <div className="article-container">
      <img src={image} alt={title} className="project-img" />
    </div>
    <h2 className="experience-sub-title project-title">{title}</h2>
    <div className="btn-container">
      {/* <button className="btn btn-color-2 project-btn" onClick={() => window.open(githubLink)}>
        Github
      </button>
      <button className="btn btn-color-2 project-btn" onClick={() => window.open(liveDemoLink)}>
        Live Demo
      </button> */}
    </div>
  </div>
);

const Projects = () => (
  <section id="projects">
    {/* <p className="section__text__p1">Browse My Recent</p> */}
    <h1 className="title">Projects</h1>
    <div className="experience-details-container">
      <div className="about-containers">
        {projectsData.map((project, index) => (
          <Project
            key={index}
            title={project.title}
            image={project.image}
            githubLink={project.githubLink}
            liveDemoLink={project.liveDemoLink}
          />
        ))}
      </div>
    </div>
    {/* <img
      src="./assets/arrow.png"
      alt="Arrow icon"
      className="icon arrow"
      onClick={() => window.location.href = './#contact'}
    /> */}
  </section>
);

export default Projects;
