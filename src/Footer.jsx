import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div class="footer-content">
        <section class="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li>
              <a href="/">Terms of Service</a>
            </li>
            <li>
              <a href="/">Privacy Policy</a>
            </li>
          </ul>
        </section>
        <section class="footer-section">
          <h4>Contact Us</h4>
          <p>Email: support@kampotjuice.com</p>
          <p>Phone: +855 123 456 789</p>
        </section>
        <section class="footer-section">
          <h4>Follow Us</h4>
          <div class="social-icons">
            <a
              href="https://facebook.com/kampotjuice"
              rel="noreferrer"
              target="_blank"
            >
              Facebook
            </a>
            <a
              href="https://instagram.com/kampotjuice"
              rel="noreferrer"
              target="_blank"
            >
              Instagram
            </a>
          </div>
        </section>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 Kampot Juice. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
