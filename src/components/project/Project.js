import React from 'react';
import pahalaaqiqahImage from '../assets/pahalaaqiqah1.png'; // Import the image using require or import
import syshabImage from '../assets/syshab.png'; // Import the image using require or import
import codeassesmentImage from '../assets/codeassesment.png'; // Import the image using require or import

const projectsData = [
  {
    title: 'Project One',
    image: pahalaaqiqahImage,
    githubLink: 'https://github.com/',
    liveDemoLink: 'https://pahalaaqiqah.com/order/'
  },
  {
    title: 'Project Two',
    image: syshabImage,
    githubLink: 'https://github.com/',
    liveDemoLink: '#'
  },
 {
    title: 'Project Three',
    image: codeassesmentImage,
    githubLink: 'https://github.com/',
    liveDemoLink: 'https://janinh00.github.io/code-assessment/'
  }
];

const Project = ({ title, image, githubLink, liveDemoLink }) => (
  <div className="details-container color-container">
    <div className="article-container">
      <a href={liveDemoLink} target="_blank" rel="noopener noreferrer">
        <img src={image} alt={title} className="project-img" />
      </a>
    </div>
    <h2 className="experience-sub-title project-title">{title}</h2>
    {/* <div className="btn-container">
      <button className="btn btn-color-2 project-btn" onClick={() => window.open(githubLink, '_blank')}>
        Github
      </button>
      <button className="btn btn-color-2 project-btn" onClick={() => window.open(liveDemoLink, '_blank')}>
        Live Demo
      </button>
    </div> */}
  </div>
);

const Projects = () => (
  <section id="projects">
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
  </section>
);

export default Projects;
