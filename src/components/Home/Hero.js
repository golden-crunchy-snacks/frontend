// Media
import logo from "../../assets/img/logo.png";

import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__text">
          <h1 className="hero__heading">Welcome to Golden Crunchy Snacks</h1>
          <h3 className="hero__subheading">
            We make products we can be proud of. We pour heart and soul into
            everything we do, and every pack that leaves our factory is of the
            highest quality. We make products which our customers love, keeping
            them coming back for more.
          </h3>
          <Link className="hero__button" to="/shop">
            Shop Now
          </Link>
        </div>
        <div className="hero__image">
          <img
            src="https://res.cloudinary.com/golden-crunchy-snacks/image/upload/v1629126236/golden-crunchy-snacks/Website%20images/hero_l5ffvw.png"
            alt="Various Assorted Snacks"
          />
        </div>
        <div className="hero__image__mobile">
          <img src={logo} alt={logo} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
