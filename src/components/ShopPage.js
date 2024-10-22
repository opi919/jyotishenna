import React from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import "./ShopPage.css"

const ShopPage = () => {
  const { ref: shopRef, inView: shopInView } = useInView({ triggerOnce: true })

  // Animation configuration
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeInOut" } },
  }

  return (
    <div className="shop-page" ref={shopRef}>
      <motion.h1 className="shop-title" initial={{ opacity: 0, y: -50 }} animate={shopInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.7, ease: "easeOut" }}>
        Our Organic Henna Products
      </motion.h1>

      <div className="products-grid">
        <motion.div className="product-card" variants={cardVariants} initial="hidden" animate={shopInView ? "visible" : "hidden"} whileHover="hover">
          <img src="/assets/henna-art.jpg" alt="Henna Powder" />
          <h3>Henna Powder</h3>
          <p>100% organic henna powder for hair and body art.</p>
          <motion.button className="buy-button" whileHover={{ scale: 1.1, backgroundColor: "#68b96a", transition: { duration: 0.3 } }}>
            Buy Now
          </motion.button>
        </motion.div>

        <motion.div className="product-card" variants={cardVariants} initial="hidden" animate={shopInView ? "visible" : "hidden"} whileHover="hover">
          <img src="/assets/henna-art.jpg" alt="Henna Powder" />
          <h3>Henna Powder</h3>
          <p>100% organic henna powder for hair and body art.</p>
          <motion.button className="buy-button" whileHover={{ scale: 1.1, backgroundColor: "#68b96a", transition: { duration: 0.3 } }}>
            Buy Now
          </motion.button>
        </motion.div>
      </div>
    </div>
  )
}

export default ShopPage
