// Media
import logo from "../assets/img/logo.png";
import { FaShoppingBasket } from "react-icons/fa";

const Header = () => {
  return (
    <div className="header-container">
      <img src={logo} alt={logo} className="header-logo" />
      <div className="header-menu">
        <div>SHOP</div>
        <div>CATALOGUE</div>
        <div>ABOUT US</div>
        <div>LEGALS</div>
      </div>
      <div className="header-user">
        <div>LOGIN</div>
        <div>
          <FaShoppingBasket />
        </div>
      </div>
    </div>
  );
};

export default Header;
