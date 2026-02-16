// App.js
// Root component that composes all sections of the portfolio.

import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="app">
      {/* Sticky navigation bar */}
      <Navbar />

      {/* Main content sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Simple footer */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} Santosh Vishwakarma. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default App;