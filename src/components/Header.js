// Packages
import { useLocation, Link } from "react-router-dom";

// Components
import SearchBar from "../components/Home/SearchBar";
import { FaShoppingBasket } from "react-icons/fa";

// Media
import logo from "../assets/img/logo.png";

const Header = () => {
  const location = useLocation();

  return (
    <div className="header-container">
      <img src={logo} alt={logo} className="header-logo" />

      <div className="header-menu">
        <Link
          to="/"
          className={location.pathname === "/" && "header-menu-clicked"}
        >
          HOME
        </Link>
        <Link>SHOP</Link>
        <Link
          to="/about"
          className={location.pathname === "/about" && "header-menu-clicked"}
        >
          ABOUT US
        </Link>
      </div>
      <SearchBar placeholder="Search for articles..." />
      <div className="header-user">
        <Link>LOGIN</Link>
        <Link>
          <FaShoppingBasket />
        </Link>
      </div>
    </div>
  );
};

export default Header;
