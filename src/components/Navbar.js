import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { FaHome, FaShoppingCart, FaBook, FaPhoneAlt } from "react-icons/fa"
import "./Navbar.css"
import logo from "../logo.jpg"

const Navbar = () => {
  const { ref, inView } = useInView({ triggerOnce: true })

  return (
    <motion.nav ref={ref} className="navbar" initial={{ y: -100, opacity: 0 }} animate={inView ? { y: 0, opacity: 1 } : {}} transition={{ type: "spring", stiffness: 50, duration: 0.8 }}>
      <div className="navbar-logo">
        <a href="/">
          <motion.img src={logo} alt="Henna & Organic Care Logo" className="navbar-logo-img" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }} />
        </a>
      </div>
      <ul className="navbar-links">
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
    </motion.nav>
  )
}

export default Navbar
