// Packages
import { useLocation, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

// Components
import { FaShoppingBasket } from "react-icons/fa";

// Media
import logo from "../assets/img/logo.png";

const Header = ({ userBasket, userToken, setTokenAndId }) => {
  const basket = JSON.parse(userBasket);
  const location = useLocation();
  const history = useHistory();

  // Logout Handle
  const handleLogout = () => {
    setTokenAndId();
    history.push("/");
  };

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
        {userToken ? (
          <>
            <button onClick={() => handleLogout()} className="logout">
              LOGOUT
            </button>

            <Link
              to="/account"
              className={
                location.pathname === "/account" && "header-menu-clicked"
              }
            >
              ACCOUNT
            </Link>
          </>
        ) : (
          <Link
            to="/login"
            className={
              location.pathname === "/login" || location.pathname === "/signup"
                ? "header-menu-clicked log"
                : "log"
            }
          >
            {location.pathname === "/signup" ? "SIGNUP" : "LOGIN"}
          </Link>
        )}

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
              {basket === null ? "0" : basket.length}
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
