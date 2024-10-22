import React, { useState } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaHome, FaShoppingCart, FaBook, FaPhoneAlt } from "react-icons/fa"
import "./Navbar.css"
import logo from "../logo.jpg"

const Navbar = () => {
  const { ref, inView } = useInView({ triggerOnce: true })
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <motion.nav ref={ref} className="navbar" initial={{ y: -100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ type: "spring", stiffness: 50, duration: 0.8 }}>
      <div className="navbar-logo">
        <a href="/">
          <motion.img src={logo} alt="Henna & Organic Care Logo" className="navbar-logo-img" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} />
        </a>
      </div>
      <ul className={`navbar-links ${isOpen ? "active" : ""}`}>
        <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <a href="#home">
            <FaHome className="navbar-icon" /> Home
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <a href="/shop">
            <FaShoppingCart className="navbar-icon" /> Shop
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <a href="#courses">
            <FaBook className="navbar-icon" /> Courses
          </a>
        </motion.li>
        <motion.li whileHover={{ scale: 1.1 }} transition={{ duration: 0.2 }}>
          <a href="#contact">
            <FaPhoneAlt className="navbar-icon" /> Contact
          </a>
        </motion.li>
      </ul>
      {/* Show the burger menu only on mobile view */}
      <div className={`burger ${isOpen ? "active" : ""}`} onClick={toggleMenu}>
        <span className="line"></span>
        <span className="line"></span>
        <span className="line"></span>
      </div>
      {/* Overlay Menu */}
      {isOpen && (
        <ul className={`menu ${isOpen ? "active" : ""}`}>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/shop">Shop</a>
          </li>
          <li>
            <a href="/courses">Courses</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      )}
    </motion.nav>
  )
}

export default Navbar
