import React from 'react';
import { projectsList } from '../data/project';
import  imageMap  from '../projectImages/projectImage';

function ProjectList() {
  return (
    <div className='projects-container'>
      {projectsList.map((project, i) => (
        <ProjectItem key={i} project={project} />
      ))}
    </div>
  );
}

function ProjectItem({ project }) {
  const { name, description, image, codeUrl, demoUrl, tools } = project;

  return (
    <div className='project' id={name}>
      <div className='project-container'>
        <a href={demoUrl} target='_blank' rel='noopener noreferrer'>
          <picture>
            <img src={imageMap[image]} alt={name} className='project-image' />
          </picture>
        </a>
        <div className='project-info'>
          <a href={demoUrl} target='_blank' rel='noopener noreferrer'>
            <h2>{name}</h2>
          </a>
          {description.split('\n').map((line, i) => (
            <p key={i}>{line}</p>
          ))}
          <h3>Tools used:</h3>
          <ul className='tools-list'>
            {tools.map((tool, i) => (
              <li key={i}>{tool}</li>
            ))}
          </ul>
          <div className='project-btns'>
            {demoUrl != null && (
              <a
                href={demoUrl}
                target='_blank'
                rel='noopener noreferrer'
                title={`Open ${name} site`}
                className='project-btn'
              >
                Open Site
              </a>
            )}
            {codeUrl != null && (
              <a
                href={codeUrl}
                target='_blank'
                rel='noopener noreferrer'
                title={`View ${name} code`}
                className='project-btn'
              >
                View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectList;
