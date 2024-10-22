import React from "react"
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import logo from "../logo.jpg"
import "./Footer.css"

const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <motion.footer ref={ref} className="footer" initial={{ opacity: 0, y: 100 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.8 }}>
      <div className="footer-container">
        {/* Logo Section */}
        <div className="footer-logo-section">
          <a href="/">
            <motion.img src={logo} alt="Henna & Organic Care Logo" className="footer-logo" initial={{ scale: 0.9, opacity: 0 }} animate={inView ? { scale: 1, opacity: 1 } : {}} transition={{ duration: 0.6 }} />
          </a>
          <p className="footer-tagline">Embrace the beauty of nature with organic henna and natural care.</p>
        </div>

        {/* Other Sections */}
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
        {/* Social Icons Section */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <motion.a href="https://www.facebook.com/hennaandorganiccare" className="icon" whileHover={{ scale: 1.1 }}>
              <FaFacebookF />
            </motion.a>
            <motion.a href="https://www.instagram.com/hennaandorganiccare/" className="icon" whileHover={{ scale: 1.1 }}>
              <FaInstagram />
            </motion.a>
            <motion.a href="https://www.youtube.com/@Hennaandorganiccare" className="icon" whileHover={{ scale: 1.1 }}>
              <FaYoutube />
            </motion.a>
            <motion.a href="mailto:esratjahanjyoti66@gmail.com" className="icon" whileHover={{ scale: 1.1 }}>
              <FaEnvelope />
            </motion.a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Henna & Organic Care. All rights reserved.</p>
      </div>
    </motion.footer>
  )
}

export default Footer
