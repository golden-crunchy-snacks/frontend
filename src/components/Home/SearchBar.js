// Components
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ placeholder }) => {
  return (
    <div className="search-bar-container">
      <input type="text" placeholder={placeholder} className="search-bar" />
      <FaSearch className="search-icon" />
    </div>
  );
};

export default SearchBar;
