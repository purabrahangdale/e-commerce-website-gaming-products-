import "./Hero.css";

function Hero() {

  return (
    <section className="hero">

      <div className="hero-overlay"></div>

      <div className="hero-content">

        <p className="small-text">
          BEST GAMING ACCESSORIES
        </p>

        <h1>
          Build Your
          Ultimate Gaming Setup
        </h1>

        <p className="hero-description">

          Explore premium gaming keyboards,
          mice, headsets, monitors and
          esports accessories designed
          for serious gamers.

        </p>

        <div className="hero-buttons">

          <button className="shop-btn">
            Shop Now
          </button>

          <button className="explore-btn">
            Explore Products
          </button>

        </div>

      </div>

    </section>
  );
}

export default Hero;