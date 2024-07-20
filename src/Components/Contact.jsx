// src/components/Footer.js

import React from 'react';
import '../index.css'; // Import the CSS file for styling

const Contact = () => {
  return (
    <footer className="footer" id='Contact'>
      <div className="footer-content">
        <img
          src="/assets/photo.jpg" // Replace with the path to your photo
          alt="Profile"
          className="footer-photo"
        />
        <div className="footer-details">
          <h2 className="footer-name">Your Name</h2>
          <p className="footer-email">your.email@example.com</p>
          <div className="footer-socials">
            <a
              href="https://www.instagram.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <img
                src="/assets/instagram-icon.png" // Replace with the path to the Instagram icon
                alt="Instagram"
                className="footer-social-icon"
              />
            </a>
            <a
              href="https://www.facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <img
                src="/assets/facebook-icon.png" // Replace with the path to the Facebook icon
                alt="Facebook"
                className="footer-social-icon"
              />
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <img
                src="/assets/github-icon.png" // Replace with the path to the GitHub icon
                alt="GitHub"
                className="footer-social-icon"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
