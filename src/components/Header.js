// Packages
import { useLocation, Link } from "react-router-dom";

// Components
import { FaShoppingBasket } from "react-icons/fa";

// Media
import logo from "../assets/img/logo.png";

const Header = ({ userBasket }) => {
  const basket = JSON.parse(userBasket);
  const location = useLocation();

  return (
    <div className="header-container">
      <div className="header-menu">
        <img src={logo} alt={logo} className="header-logo" />
        <Link
          to="/"
          className={location.pathname === "/" && "header-menu-clicked"}
        >
          HOME
        </Link>
        <Link
          to="/shop"
          className={location.pathname === "/shop" && "header-menu-clicked"}
        >
          SHOP
        </Link>
        <Link
          to="/about"
          className={location.pathname === "/about" && "header-menu-clicked"}
        >
          ABOUT
        </Link>
      </div>

      <div className="header-user">
        <Link
          to="/login"
          className={
            (location.pathname === "/login" ||
              location.pathname === "/signup") &&
            "header-menu-clicked"
          }
        >
          {location.pathname === "/signup" ? "SIGNUP" : "LOGIN"}
        </Link>
        <Link
          to="/basket"
          className={location.pathname === "/basket" && "header-menu-clicked"}
        >
          <div
            className={
              location.pathname === "/basket"
                ? "header-menu-clicked header-basket"
                : "header-basket"
            }
          >
            <FaShoppingBasket />
            <div className="header-basket-counter">
              {basket ? basket.length : "0"}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
