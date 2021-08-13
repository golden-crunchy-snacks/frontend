// Packages
import { useLocation, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";

// Components
import { FaShoppingBasket } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiLeftArrowAlt } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";

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
    <div className="header-home">
      {/* Desktop Header */}
      <div className="header-container">
        <div className="header-menu">
          <img
            src={logo}
            alt={logo}
            className="header-logo"
            onClick={() => {
              history.push("/");
            }}
          />
          <Link
            to="/"
            className={
              location.pathname === "/"
                ? "header-menu-clicked"
                : "underline-grow"
            }
          >
            Home
          </Link>
          <Link
            to="/shop"
            className={
              location.pathname === "/shop"
                ? "header-menu-clicked"
                : "underline-grow"
            }
          >
            Shop
          </Link>
          <Link
            to="/trade"
            className={
              location.pathname === "/trade"
                ? "header-menu-clicked"
                : "underline-grow"
            }
          >
            Trade
          </Link>
          <Link
            to="/contact"
            className={
              location.pathname === "/contact"
                ? "header-menu-clicked"
                : "underline-grow"
            }
          >
            Contact
          </Link>
          <Link
            to="/about"
            className={
              location.pathname === "/about"
                ? "header-menu-clicked"
                : "underline-grow"
            }
          >
            About Us
          </Link>
        </div>

        <div className="header-user">
          {userToken ? (
            <>
              <button onClick={() => handleLogout()} className="log">
                Logout
              </button>

              <Link
                to="/account"
                className={
                  location.pathname === "/account"
                    ? "header-menu-clicked2"
                    : undefined
                }
              >
                <div
                  className={
                    location.pathname === "/account"
                      ? "header-menu-clicked2 header-basket"
                      : "header-basket"
                  }
                >
                  {" "}
                  <VscAccount />
                </div>
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
            className={
              location.pathname === "/basket"
                ? "header-menu-clicked2"
                : undefined
            }
          >
            <div
              className={
                location.pathname === "/basket"
                  ? "header-basket header-menu-clicked2 "
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
          className={
            location.pathname === "/basket" ? "header-menu-clicked" : undefined
          }
        >
          <div
            className={
              location.pathname === "/basket"
                ? "header-basket2"
                : "header-basket2"
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
              className={
                location.pathname === "/" ? "header-menu-clicked" : undefined
              }
              onClick={() => setBurgerHandle(false)}
            >
              Home
            </Link>
            <Link
              onClick={() => setBurgerHandle(false)}
              to="/shop"
              className={
                location.pathname === "/shop"
                  ? "header-menu-clicked"
                  : undefined
              }
            >
              Shop
            </Link>
            <Link
              onClick={() => setBurgerHandle(false)}
              to="/trade"
              className={
                location.pathname === "/trade"
                  ? "header-menu-clicked"
                  : undefined
              }
            >
              Trade
            </Link>
            <Link
              onClick={() => setBurgerHandle(false)}
              to="/contact"
              className={
                location.pathname === "/contact"
                  ? "header-menu-clicked"
                  : undefined
              }
            >
              Contact
            </Link>
            <Link
              onClick={() => setBurgerHandle(false)}
              to="/about"
              className={
                location.pathname === "/about"
                  ? "header-menu-clicked"
                  : undefined
              }
            >
              About Us
            </Link>
            <Link
              onClick={() => setBurgerHandle(false)}
              to="/basket"
              className={
                location.pathname === "/basket"
                  ? "header-menu-clicked"
                  : undefined
              }
            >
              Basket
            </Link>
            {userToken ? (
              <>
                <a onClick={() => handleLogout()}>Logout</a>

                <Link
                  onClick={() => setBurgerHandle(false)}
                  to="/account"
                  className={
                    location.pathname === "/account"
                      ? "header-menu-clicked"
                      : undefined
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
                    ? "header-menu-clicked "
                    : "header-menu-clicked"
                }
              >
                {location.pathname === "/signup" ? "Sign Up" : "Login"}
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
