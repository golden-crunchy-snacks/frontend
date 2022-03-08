// Packages
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Media
import logo from "../assets/img/logo.png";

const Footer = () => {
  const history = useHistory();
  return (
    <div className="footer">
      <div className="footer__container">
        {/* <img
          src={logo}
          alt={logo}
          className="footer__logo"
          onClick={() => {
            history.push("/");
          }}
        /> */}
        <h1
          onClick={() => {
            history.push("/");
          }}
          className="footer__logo"
        >
          GCS
        </h1>
        <div className="footer__companyinfo">
          <h2 className="footer__about">ABOUT</h2>
          <p className="footer__description">
            The Golden Crunchy brand is becoming very popular and growing
            stronger year by year reaching customers nationally. The company
            products are all 100% Vegetarian, Halal and manufactured in UK and
            Europe. The products have the finest ingredients creating superior
            and rich taste with high quality.
          </p>
        </div>
        <div className="footer__links">
          <h2>LINKS</h2>
          <ul>
            <li>
              <Link to="/shop">Shop</Link>
            </li>

            <li>
              <Link to="/trade">Trade</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
            <li>
              <Link to="/login">Sign in / Register</Link>
            </li>
            <li>
              <Link to="/about">About Us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
