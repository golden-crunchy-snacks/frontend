// Components
import { FaSearch } from "react-icons/fa";

const SearchBar = ({
  placeholder,
  data,
  onChange,
  value,
  onClick,
  searchVisibility,
}) => {
  return (
    <div className="search-bar-container">
      <input
        type="text"
        placeholder={placeholder}
        className="search-bar"
        onChange={onChange}
        value={value}
      />
      <FaSearch className="search-icon" />
      {data === undefined || value === "" || searchVisibility === false ? (
        <div></div>
      ) : (
        <div className="search-bar-list">
          {data.map((article) => {
            return (
              article.title.toLowerCase().search(value.toLowerCase()) !==
                -1 && <div onClick={onClick}>{article.title}</div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
