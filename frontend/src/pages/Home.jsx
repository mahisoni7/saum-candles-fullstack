function Home() {
  return (
    <div className="home">

      <section className="hero">
        <div className="hero-text">
          <p className="small-title">HANDCRAFTED WITH LOVE</p>

          <h1>
            Light Up Your
            <br />
            <span>Beautiful Moments</span>
          </h1>

          <p>
            Discover beautifully scented candles designed
            to make your home warm, peaceful and luxurious.
          </p>

          <button>Shop Collection</button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1603006905003-be475563bc59"
            alt="Luxury candle"
          />
        </div>
      </section>

      <section className="featured">
        <h2>Our Best Sellers</h2>

        <div className="products">

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1608181831718-c9c1e8d4a8b8"
              alt="Vanilla candle"
            />

            <h3>Vanilla Dream</h3>

            <p>₹499</p>

            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1605651202774-7d573fd2f12c"
              alt="Rose candle"
            />

            <h3>Rose Petal</h3>

            <p>₹549</p>

            <button>Add to Cart</button>
          </div>

          <div className="product-card">
            <img
              src="https://images.unsplash.com/photo-1602874801006-e26f7f5d7f65"
              alt="Sandalwood candle"
            />

            <h3>Sandalwood Glow</h3>

            <p>₹599</p>

            <button>Add to Cart</button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default Home;