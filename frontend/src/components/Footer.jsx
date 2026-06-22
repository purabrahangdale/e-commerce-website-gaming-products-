import "./Footer.css";

function Footer() {

  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-section">

          <h2>
            🎮 Gaming Store
          </h2>

          <p>
            Premium gaming accessories
            and esports setup products
            for professional gamers.
          </p>

        </div>

        <div className="footer-section">

          <h3>
            Shop
          </h3>

          <ul>

            <li>Gaming Mouse</li>
            <li>Mechanical Keyboard</li>
            <li>Gaming Headset</li>
            <li>Gaming Monitor</li>

          </ul>

        </div>

        <div className="footer-section">

          <h3>
            Quick Links
          </h3>

          <ul>

            <li>Home</li>
            <li>Products</li>
            <li>About</li>
            <li>Contact</li>

          </ul>

        </div>

        <div className="footer-section">

          <h3>
            Contact
          </h3>

          <p>
            Email:
            gamingstore@gmail.com
          </p>

          <p>
            Phone:
            +91 9876543210
          </p>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Gaming Store.
          All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;