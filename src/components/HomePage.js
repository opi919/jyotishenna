import React from "react"
import { motion } from "framer-motion"
import "./HomePage.css" // Ensure this CSS file is created for styles

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section shop-title">
        <motion.h1 className="" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }}>
          Welcome to Henna & Organic Care
        </motion.h1>
        <motion.p className="hero-subtitle" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}>
          Discover the beauty of organic henna
        </motion.p>
        <div className="cta-buttons">
          <motion.a href="/shop" className="cta-button" whileHover={{ scale: 1.1, backgroundColor: "#68b96a", transition: { duration: 0.3 } }}>
            Shop Now
          </motion.a>
          <motion.a href="/courses" className="cta-button" whileHover={{ scale: 1.1, backgroundColor: "#68b96a", transition: { duration: 0.3 } }}>
            Learn Henna Art
          </motion.a>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products py-5">
        <h2 className="hero-title">Our Organic Henna Products</h2>
        <div className="products-grid">
          <motion.div className="product-card" whileHover={{ scale: 1.05 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img src="/assets/henna-art.jpg" alt="Henna Kit" />
            <h3>Henna Kit</h3>
            <p>$25</p>
            <motion.button whileHover={{ scale: 1.1, backgroundColor: "#68b96a", transition: { duration: 0.3 } }} className="buy-button">
              Buy Now
            </motion.button>
          </motion.div>
          <motion.div className="product-card" whileHover={{ scale: 1.05 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img src="/assets/henna-art.jpg" alt="Henna Kit" />
            <h3>Henna Kit</h3>
            <p>$25</p>
            <motion.button whileHover={{ scale: 1.1, backgroundColor: "#68b96a", transition: { duration: 0.3 } }} className="buy-button">
              Buy Now
            </motion.button>
          </motion.div>
          <motion.div className="product-card" whileHover={{ scale: 1.05 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img src="/assets/henna-art.jpg" alt="Henna Kit" />
            <h3>Henna Kit</h3>
            <p>$25</p>
            <motion.button whileHover={{ scale: 1.1, backgroundColor: "#68b96a", transition: { duration: 0.3 } }} className="buy-button">
              Buy Now
            </motion.button>
          </motion.div>
          <motion.div className="product-card" whileHover={{ scale: 1.05 }} initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <img src="/assets/henna-art.jpg" alt="Henna Kit" />
            <h3>Henna Kit</h3>
            <p>$25</p>
            <motion.button whileHover={{ scale: 1.1, backgroundColor: "#68b96a", transition: { duration: 0.3 } }} className="buy-button">
              Buy Now
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Latest Henna Videos */}
      <section className="latest-videos py-5">
        <h2 className="hero-title">Watch Our Latest Henna Tutorials</h2>
        <div className="videos-grid">
          <motion.div className="video-card" whileHover={{ scale: 1.05 }}>
            <iframe src="https://www.youtube.com/embed/example1" title="Bridal Henna Tutorial"></iframe>
            <h3>Bridal Henna Tutorial</h3>
          </motion.div>
          <motion.div className="video-card" whileHover={{ scale: 1.05 }}>
            <iframe src="https://www.youtube.com/embed/example2" title="Festive Henna Tutorial"></iframe>
            <h3>Festive Henna Tutorial</h3>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
