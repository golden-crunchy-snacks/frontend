// Media
import hero from "../../assets/img/hero.png";

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
          <button className="hero__button">Shop Now</button>
        </div>
        <div className="hero__image">
          <img
            src="https://i.ibb.co/F6StBn0/tumblr-mj5u8ftf-KD1s7umblo1-400.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
