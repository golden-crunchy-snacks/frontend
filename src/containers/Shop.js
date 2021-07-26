// Packages
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import SearchBar from "../components/Utility/SearchBar";
import ArticleList from "../components/Shop/ArticleList";
import ArticleModal from "../components/Shop/ArticleModal";
import Loader from "../components/Utility/Loader";

const Shop = ({ setBasket, userBasket, cookieBasket }) => {
  // States
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [modal, setModal] = useState(false);
  const [filter, setFilter] = useState([]);
  const [modalInfo, setModalInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);

  // Get inital articles
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://golden-crunchy-snacks.herokuapp.com/articles`
        );

        setData(response.data);
        setFilteredData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // Get categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://golden-crunchy-snacks.herokuapp.com/categories`
        );

        setCategories(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // Search Handle
  const searchHandle = (e) => {
    setSearchVisibility(true);
    setSearchValue(e.target.value);
    let value = e.target.value.toLowerCase();
    let result = [];
    result = data.filter((data) => {
      return data.title.toLowerCase().search(value) !== -1;
    });
    setFilteredData(result);
  };

  // Search Click Handle
  const searchClickHandle = (e) => {
    setSearchValue(e.target.innerText);
    setSearchVisibility(false);
    let value = e.target.innerText.toLowerCase();
    let result = [];
    result = data.filter((data) => {
      return data.title.toLowerCase().search(value) !== -1;
    });
    setFilteredData(result);
  };

  // Category filter function
  const filterHandle = (e) => {
    const filterCategory = [...filter];
    console.log(e.target.name);
    if (filterCategory.indexOf(e.target.name) === -1) {
      filterCategory.push(e.target.name);
    } else {
      filterCategory.splice(filterCategory.indexOf(e.target.name), 1);
    }
    setFilter(filterCategory);
  };

  // Modal Info Handle
  const modalHandle = (props) => {
    setModal(true);
    setModalInfo(props.article);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="shop">
      <div className="shop__categoriesandlist">
        <div>
          {" "}
          <div className="shop-search-container">
            <SearchBar
              placeholder="Search..."
              data={filteredData}
              onChange={(e) => {
                searchHandle(e);
              }}
              value={searchValue}
              onClick={(e) => {
                searchClickHandle(e);
              }}
              searchVisibility={searchVisibility}
            />
          </div>
          <div className="shop-categories-container">
            <h1>CATEGORIES</h1>
            <form className="shop-categories">
              {categories.map((category) => {
                return (
                  <label key={category.title}>
                    <input
                      type="checkbox"
                      name={category.title}
                      onClick={(e) => {
                        filterHandle(e);
                      }}
                    />
                    <span>{category.title}</span>
                  </label>
                );
              })}
            </form>
          </div>
        </div>

        <ArticleList
          data={filteredData}
          filter={filter}
          modalHandle={modalHandle}
          setBasket={setBasket}
          userBasket={userBasket}
        />
      </div>
      {modal && (
        <ArticleModal
          data={modalInfo}
          onX={() => setModal(false)}
          setBasket={setBasket}
          userBasket={userBasket}
        />
      )}
    </div>
  );
};

export default Shop;
