// Hero.jsx
// Intro section with name, title, summary, and primary actions.

import React from 'react';

const Hero = () => {
  const scrollToSection = (id) => {
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Opens resume PDF (place resume.pdf inside the public folder)
  const openResume = () => {
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="section hero">
      <div className="hero-col">
        <p className="hero-intro">
          <span className="badge">Full Stack Developer</span>
        </p>
        <h1 className="hero-name">
          Hi, I&apos;m <span className="text-accent">Santosh Vishwakarma</span>
        </h1>
        <h2 className="hero-title">Building modern, scalable web applications.</h2>
        <p className="hero-summary">
          I&apos;m a full stack developer specializing in creating clean, performant, and
          user-friendly experiences on the web. I enjoy turning complex ideas into elegant
          solutions using modern JavaScript, React, and Node.js.
        </p>

        <div className="hero-actions">
          <button
            className="btn btn-primary"
            onClick={() => window.open("/resume.pdf", "_blank")}
          >
            View Resume
          </button>
          <button
            className="btn btn-outline"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </button>
        </div>
      </div>

      <div className="hero-col">
        <div className="hero-highlight">
          <p className="hero-highlight-title">Tech stack snapshot</p>
          <div className="hero-highlight-items">
            <span className="hero-highlight-pill">JavaScript (ES6+)</span>
            <span className="hero-highlight-pill">React.js</span>
            <span className="hero-highlight-pill">Node.js</span>
            <span className="hero-highlight-pill">Express.js</span>
            <span className="hero-highlight-pill">MongoDB</span>
            <span className="hero-highlight-pill">REST APIs</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;