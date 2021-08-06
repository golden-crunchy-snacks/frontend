// Packages
import { useLocation, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";

// Components
import { FaShoppingBasket } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLeftArrowAlt } from "react-icons/bi";

// Media
import logo from "../assets/img/logo.png";

const Header = ({ userBasket, userToken, setTokenAndId }) => {
  const basket = JSON.parse(userBasket);
  const location = useLocation();
  const history = useHistory();

  const [burgerHandle, setBurgerHandle] = useState(false);

  // Logout Handle
  const handleLogout = () => {
    setTokenAndId();
    history.push("/");
  };

  return (
    <>
      {/* Desktop Header */}
      <div className="header-container">
        <div className="header-menu">
          <img src={logo} alt={logo} className="header-logo" />
          <Link
            to="/"
            className={location.pathname === "/" && "header-menu-clicked"}
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={location.pathname === "/shop" && "header-menu-clicked"}
          >
            Shop
          </Link>
          <Link
            to="/trade"
            className={location.pathname === "/trade" && "header-menu-clicked"}
          >
            Trade
          </Link>
          <Link
            to="/contact"
            className={
              location.pathname === "/contact" && "header-menu-clicked"
            }
          >
            Contact
          </Link>
          <Link
            to="/about"
            className={location.pathname === "/about" && "header-menu-clicked"}
          >
            About Us
          </Link>
        </div>

        <div className="header-user">
          {userToken ? (
            <>
              <button onClick={() => handleLogout()} className="logout">
                Logout
              </button>

              <Link
                to="/account"
                className={
                  location.pathname === "/account" && "header-menu-clicked"
                }
              >
                Account
              </Link>
            </>
          ) : (
            <Link
              to="/login"
              className={
                location.pathname === "/login" ||
                location.pathname === "/signup"
                  ? "header-menu-clicked log"
                  : "log"
              }
            >
              {location.pathname === "/signup" ? "Sign Up" : "Login"}
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
      {/* Mobile Header */}
      <div className="mobile-header-container">
        <GiHamburgerMenu
          className="burger-menu-button"
          onClick={() => setBurgerHandle(true)}
        />
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
        {burgerHandle && (
          <div className="burger-menu" data-aos="slide-right">
            <BiLeftArrowAlt
              className="burger-arrow"
              onClick={() => setBurgerHandle(false)}
            />
            <Link
              to="/"
              className={location.pathname === "/" && "header-menu-clicked"}
              onClick={() => setBurgerHandle(false)}
            >
              Home
            </Link>
            <Link
              onClick={() => setBurgerHandle(false)}
              to="/shop"
              className={location.pathname === "/shop" && "header-menu-clicked"}
            >
              Shop
            </Link>
            <Link
              onClick={() => setBurgerHandle(false)}
              to="/trade"
              className={
                location.pathname === "/trade" && "header-menu-clicked"
              }
            >
              Trade
            </Link>
            <Link
              onClick={() => setBurgerHandle(false)}
              to="/contact"
              className={
                location.pathname === "/contact" && "header-menu-clicked"
              }
            >
              Contact
            </Link>
            <Link
              onClick={() => setBurgerHandle(false)}
              to="/about"
              className={
                location.pathname === "/about" && "header-menu-clicked"
              }
            >
              About Us
            </Link>
            <Link
              onClick={() => setBurgerHandle(false)}
              to="/basket"
              className={
                location.pathname === "/basket" && "header-menu-clicked"
              }
            >
              Basket
            </Link>
            {userToken ? (
              <>
                <button onClick={() => handleLogout()} className="logout">
                  Logout
                </button>

                <Link
                  onClick={() => setBurgerHandle(false)}
                  to="/account"
                  className={
                    location.pathname === "/account" && "header-menu-clicked"
                  }
                >
                  Account
                </Link>
              </>
            ) : (
              <Link
                onClick={() => setBurgerHandle(false)}
                to="/login"
                className={
                  location.pathname === "/login" ||
                  location.pathname === "/signup"
                    ? "header-menu-clicked log"
                    : "log"
                }
              >
                {location.pathname === "/signup" ? "Sign Up" : "Login"}
              </Link>
            )}
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
