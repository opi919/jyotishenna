import React from "react"
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa"
import "./Footer.css"
import logo from "../logo.jpg" // Assuming you have saved your logo here

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo-section">
          <img src={logo} alt="Henna & Organic Care Logo" className="footer-logo" />
          <p className="footer-tagline">Embrace the beauty of nature with organic henna and natural care. Join our community today!</p>
        </div>

        <div className="footer-links">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#shop">Shop</a>
            </li>
            <li>
              <a href="#courses">Courses</a>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>

        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://facebook.com" className="icon">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" className="icon">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" className="icon">
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Henna & Organic Care. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default Footer
