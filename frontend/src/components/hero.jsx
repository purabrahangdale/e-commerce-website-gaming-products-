import "./Hero.css";
import { Link } from "react-router-dom";

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

          <Link to="/products" className="shop-btn">
            Shop Now
          </Link>

          <Link to="/products" className="explore-btn">
            Explore Products
          </Link>

        </div>

      </div>

    </section>
  );
}

export default Hero;