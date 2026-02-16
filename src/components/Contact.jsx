// Contact.jsx
// Contact details and a simple contact form.

import React, { useState } from 'react';

const Contact = () => {
  // Basic controlled form state (no backend, just demo behavior)
  const [formValues, setFormValues] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // In a real app, you would send this data to your backend or an email service.
    // For this portfolio, we just show a simple alert and reset the form.
    alert('Thank you for reaching out! (Demo form)');
    setFormValues({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="section">
      <header className="section-header">
        <p className="section-subtitle">Let&apos;s build something together</p>
        <h2 className="section-title">Contact</h2>
      </header>

      <div className="contact-grid">
        {/* Contact info */}
        <div className="contact-info-list">
          <div className="contact-info-item">
            <span className="contact-label">Email</span>
            <a
              href="sv381739@gmail.com"
              className="contact-link"
            >
              sv381739@gmail.com
            </a>
          </div>

          <div className="contact-info-item">
            <span className="contact-label">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/santosh-vishwakarma-231272345/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              linkedin.com/in/your-linkedin
            </a>
          </div>

          <div className="contact-info-item">
            <span className="contact-label">GitHub</span>
            <a
              href="https://github.com/Santoshvishwakarma99"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
            >
              github.com/Santoshvishwakarma99
            </a>
          </div>
        </div>

        {/* Contact form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-row">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              className="form-input"
              placeholder="Your full name"
              value={formValues.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="form-input"
              placeholder="you@example.com"
              value={formValues.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-row">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="form-textarea"
              placeholder="Tell me a bit about your project or opportunity..."
              value={formValues.message}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;