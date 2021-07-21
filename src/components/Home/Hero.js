// Media
import hero from "../../assets/img/hero.png";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero__container">
        <div className="hero__text">
          <h1 className="hero__heading">Welcome to Golden Crunchy Snacks</h1>
          <h3 className="hero__subheading">
            Your one stop shop for delicious snacks.
          </h3>
          <button className="hero__button">Shop Now</button>
        </div>
        <div className="hero__image">
          <img src={hero} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
