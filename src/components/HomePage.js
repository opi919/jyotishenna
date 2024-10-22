import React from "react"

const HomePage = () => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <h1>Welcome to Henna Arts</h1>
        <p>Discover the beauty of organic henna</p>
        <div className="cta-buttons">
          <button>Shop Now</button>
          <button>Learn Henna Art</button>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <h2>Our Organic Henna Products</h2>
        <div className="products-grid">
          <div className="product-card">
            <img src="/assets/images/henna-cone.jpg" alt="Henna Cone" />
            <h3>Henna Cone</h3>
            <p>$10</p>
            <button>Buy Now</button>
          </div>
          <div className="product-card">
            <img src="/assets/images/henna-kit.jpg" alt="Henna Kit" />
            <h3>Henna Kit</h3>
            <p>$25</p>
            <button>Buy Now</button>
          </div>
        </div>
      </section>

      {/* Latest Henna Videos */}
      <section className="latest-videos">
        <h2>Watch Our Latest Henna Tutorials</h2>
        <div className="videos-grid">
          <div className="video-card">
            <iframe src="https://www.youtube.com/embed/example1"></iframe>
            <h3>Bridal Henna Tutorial</h3>
          </div>
          <div className="video-card">
            <iframe src="https://www.youtube.com/embed/example2"></iframe>
            <h3>Festive Henna Tutorial</h3>
          </div>
        </div>
      </section>
    </div>
  )
}

export default HomePage
