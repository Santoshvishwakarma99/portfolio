// About.jsx
// Professional introduction, education, and career objective.

import React from 'react';

const About = () => {
  return (
    <section id="about" className="section">
      <header className="section-header">
        <p className="section-subtitle">Get to know me</p>
        <h2 className="section-title">About</h2>
      </header>

      <div className="about-grid">
        {/* Introduction */}
        <div className="about-text">
          <p>
            I am a passionate full stack developer with a strong focus on building
            reliable, maintainable, and user-centric applications. I enjoy working across
            the stack—from crafting responsive UIs to designing robust backend services.
          </p>
          <p>
            My approach is driven by clean code, thoughtful architecture, and continuous
            learning. I like collaborating with teams, mentoring peers, and contributing
            to projects that deliver real impact.
          </p>
        </div>

        {/* Education & Objective */}
        <div className="about-meta">
          <div className="about-card">
            <h3 className="about-card-title text-accent">Education</h3>
            <ul className="about-list">
              <li>
                <strong>Higher Secondary (12th) – Science Stream</strong>
              </li>
              <li>UP Board | 2022 </li><br />
              <hr />
              <br />
              <strong>Full Stack Web Development</strong>
              <li>
              Red & White Multimedia Education</li>
            </ul>
          </div>

          <div className="about-card">
            <h3 className="about-card-title text-accent">Career Objective</h3>
            <p className="about-list">
              To work as a full stack developer where I can leverage modern technologies
              to build scalable web applications, grow as an engineer, and contribute to
              a collaborative team focused on quality and innovation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;