import React, { useEffect, useState } from "react"
import "./Navbar.css"
import logo from "../logo.jpg"

const Navbar = () => {
  const [sticky, setSticky] = useState(false)

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setSticky(true)
    } else {
      setSticky(false)
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <nav className={`navbar ${sticky ? "sticky" : ""}`}>
      <div className="navbar-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="navbar-links">
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#shop">Shop</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
        <li>
          <a href="/courses">Courses</a>
        </li>
      </ul>
      <button className="navbar-button">Shop Now</button>
    </nav>
  )
}

export default Navbar
