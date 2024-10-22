import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./components/HomePage"
import AboutPage from "./components/AboutPage"
import ShopPage from "./components/ShopPage"
import CoursesPage from "./components/CoursesPage"
import ContactPage from "./components/ContactPage"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Gallery from "./components/Gallery"
import "./App.css"

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App
