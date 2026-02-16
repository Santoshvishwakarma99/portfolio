// Skills.jsx
// Clean card layout for frontend, backend, and database skills.

import React from 'react';

const SkillCard = ({ title, skills }) => {
  return (
    <article className="skill-card">
      <h3 className="skill-card-title text-accent">{title}</h3>
      <div className="skill-tags">
        {skills.map((skill) => (
          <span key={skill} className="skill-tag">
            {skill}
          </span>
        ))}
      </div>
    </article>
  );
};

const Skills = () => {
  const frontendSkills = ['HTML', 'CSS', 'JavaScript', 'React'];
  const backendSkills = ['Node.js', 'Express.js'];
  const databaseSkills = ['MongoDB'];

  return (
    <section id="skills" className="section">
      <header className="section-header">
        <p className="section-subtitle">Technologies I work with</p>
        <h2 className="section-title">Skills</h2>
      </header>

      <div className="skills-grid">
        <div className="skills-row">
          <SkillCard title="Frontend" skills={frontendSkills} />
          <SkillCard title="Backend" skills={backendSkills} />
          <SkillCard title="Database" skills={databaseSkills} />
        </div>
      </div>
    </section>
  );
};

export default Skills;