// Navbar.jsx
// Sticky navigation bar with smooth scrolling links.

import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  const handleScrollTo = (sectionId) => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMobileOpen(false);
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-inner">
        {/* Logo */}
        <button
          className="navbar-logo"
          onClick={() => handleScrollTo('home')}
          aria-label="Go to home section"
        >
          <div className="navbar-logo-mark">SV</div>
          <div className="navbar-logo-text">
            <span className="navbar-logo-name">Santosh Vishwakarma</span>
            <span className="navbar-logo-role">Full Stack Developer</span>
          </div>
        </button>

        {/* Desktop nav links */}
        <nav className="nav-links">
          {navItems.map((item) => (
            <button
              key={item.id}
              className="nav-link"
              onClick={() => handleScrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile menu toggle */}
        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setIsMobileOpen((prev) => !prev)}
        >
          <span className="nav-toggle-bar" />
        </button>
      </div>

      {/* Mobile nav links */}
      <nav className={`nav-links-mobile ${isMobileOpen ? 'open' : ''}`}>
        {navItems.map((item) => (
          <button
            key={item.id}
            className="nav-link"
            onClick={() => handleScrollTo(item.id)}
          >
            {item.label}
          </button>
        ))}
      </nav>
    </header>
  );
};

export default Navbar;