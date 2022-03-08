import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="about">
      <div className="trade__hero__container">
        <div className="trade__hero__text">
          <h1 className="trade__hero__heading">About Us</h1>
          <h3 className="trade__hero__subheading">
            The Golden Crunchy brand is becoming very popular and growing
            stronger year by year reaching customers nationally. The company
            products are all 100% Vegetarian, Halal and manufactured in UK and
            Europe. The products have the finest ingredients creating superior
            and rich taste with high quality.
          </h3>
        </div>

        <div className="trade__hero__text">
          <h1 className="trade__hero__heading">What Matters To Us</h1>
          <h3 className="trade__hero__subheading">
            We make products we can be proud of. We pour heart and soul into
            everything we do, and every pack that leaves our factory is of the
            highest quality. We make products which our customers love, keeping
            them coming back for more.
          </h3>
        </div>
        <Link className="trade__hero__button" to="/shop">
          Start Shopping
        </Link>
      </div>

      {/* <div>
        <h1>About Us</h1>
        <p>
          The Golden Crunchy brand is becoming very popular and growing stronger
          year by year reaching customers nationally. The company products are
          all 100% Vegetarian, Halal and manufactured in UK and Europe. The
          products have the finest ingredients creating superior and rich taste
          with high quality.
        </p>
        <h1>What Matters To Us</h1>
        <p>
          We make products we can be proud of. We pour heart and soul into
          everything we do, and every pack that leaves our factory is of the
          highest quality. We make products which our customers love, keeping
          them coming back for more.
        </p>
      </div> */}
    </div>
  );
};

export default About;
