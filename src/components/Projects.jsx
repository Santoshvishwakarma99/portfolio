// Projects.jsx
// Project cards with title, description, tech stack, and GitHub button.

import React from 'react';

const ProjectCard = ({ title, description, techStack, githubUrl }) => {
  return (
    <article className="project-card">
      <div>
        <h3 className="project-title text-accent">{title}</h3>
        <p className="project-desc">{description}</p>

        <div className="project-tech">
          {techStack.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>
      </div>

      <div className="project-footer">
        <a
          href={githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-outline"
        >
          View on GitHub
        </a>
      </div>
    </article>
  );
};

const Projects = () => {
  // Sample project data (replace URLs with real GitHub links)
  const projects = [
    {
      title: 'Meesho Clone – E-commerce Web Application',
      description:
        'A fully responsive e-commerce platform that enables users to explore products, manage cart functionality, and experience interactive shopping features.',
      techStack: ['JavaScript', 'CSS', 'HTML', 'BOOTSTRAP'],
      githubUrl: 'https://santoshvishwakarma99.github.io/Meesho/',
    },
    {
      title: 'Gordon & Bros',
      description:
        'A responsive fashion retail web application inspired by Gordon & Bros, developed to present product listings with dynamic UI and optimized user experience.',
      techStack: ['React', 'JavaScript', 'CSS','HTML','REST API'],
      githubUrl: 'https://santoshvishwakarma99.github.io/react-ecommerce/',
    },
    {
      title: 'Authentication System',
      description:
        'A secure authentication system with user registration, login, JWT-based auth, and protected routes.',
      techStack: ['Node.js', 'Express.js', 'MongoDB', 'JWT'],
      githubUrl: 'https://github.com/your-username/authentication-system',
    },
  ];

  return (
    <section id="projects" className="section">
      <header className="section-header">
        <p className="section-subtitle">Highlighted work</p>
        <h2 className="section-title">Projects</h2>
      </header>

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;