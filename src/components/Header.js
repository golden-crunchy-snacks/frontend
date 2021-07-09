// Packages
import { useLocation, Link } from "react-router-dom";

// Components
import SearchBar from "./Utility/SearchBar";
import { FaShoppingBasket } from "react-icons/fa";

// Media
import logo from "../assets/img/logo.png";

const Header = () => {
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
          ABOUT US
        </Link>
      </div>
      <SearchBar placeholder="Search for articles..." />
      <div className="header-user">
        <Link
          to="/login"
          className={location.pathname === "/login" && "header-menu-clicked"}
        >
          LOGIN
        </Link>
        <Link>
          <FaShoppingBasket />
        </Link>
      </div>
    </div>
  );
};

export default Header;
