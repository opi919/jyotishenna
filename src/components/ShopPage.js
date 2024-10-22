import React from "react"
import { motion } from "framer-motion"
import "./ShopPage.css"

const ShopPage = () => {
  // Animation configuration for product cards
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    hover: { scale: 1.05, transition: { duration: 0.3 } },
  }

  return (
    <div className="shop-page">
      <motion.h1 className="shop-title" initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0, transition: { duration: 0.7 } }}>
        Our Organic Henna Products
      </motion.h1>

      <div className="products-grid">
        {/* Product Card 1 */}
        <motion.div className="product-card" variants={cardVariants} initial="hidden" animate="visible" whileHover="hover">
          <img src="/assets/images/product1.jpg" alt="Henna Powder" />
          <h3>Henna Powder</h3>
          <p>100% organic henna powder for hair and body art.</p>
          <motion.button className="buy-button" whileHover={{ scale: 1.1, backgroundColor: "#68b96a", transition: { duration: 0.3 } }}>
            Buy Now
          </motion.button>
        </motion.div>

        {/* Product Card 2 */}
        <motion.div className="product-card" variants={cardVariants} initial="hidden" animate="visible" whileHover="hover">
          <img src="/assets/images/product2.jpg" alt="Henna Oil" />
          <h3>Henna Oil</h3>
          <p>Natural henna oil for enhancing color.</p>
          <motion.button className="buy-button" whileHover={{ scale: 1.1, backgroundColor: "#68b96a", transition: { duration: 0.3 } }}>
            Buy Now
          </motion.button>
        </motion.div>

        {/* More products can be added here */}
      </div>
    </div>
  )
}

export default ShopPage
