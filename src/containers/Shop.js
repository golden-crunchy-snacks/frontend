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
  const [filter2, setFilter2] = useState([]);
  const [modalInfo, setModalInfo] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState();
  const [categoriesButtonMessage, setCategoriesButtonMessage] =
    useState("Show Categories");
  const [categoriesModal, setCategoriesModal] = useState(false);

  console.log(filter);

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

  // Get categories & sub-categories
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://golden-crunchy-snacks.herokuapp.com/categories`
        );

        const response2 = await axios.get(
          `https://golden-crunchy-snacks.herokuapp.com/subcategories`
        );

        setSubCategories(response2.data);
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

  // Sub-Category filter function
  const filter2Handle = (e) => {
    const filterCategory = [...filter2];
    console.log(e.target.name);
    if (filterCategory.indexOf(e.target.name) === -1) {
      filterCategory.push(e.target.name);
    } else {
      filterCategory.splice(filterCategory.indexOf(e.target.name), 1);
    }
    setFilter2(filterCategory);
  };

  // Modal Info Handle
  const modalHandle = (props) => {
    setModal(true);
    setModalInfo(props.article);
  };

  // categoryHandle

  const categoryHandle = () => {
    setCategoriesModal(!categoriesModal);
    if (categoriesButtonMessage === "Show Categories") {
      setCategoriesButtonMessage("Hide Categories");
    } else {
      setCategoriesButtonMessage("Show Categories");
    }
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="shop">
      <div>
        <h1>What snack are you looking for ?</h1>
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

      <div className="shop__categoriesandlist">
        <div>
          {" "}
          <div className="shop-search-container">
            <button onClick={() => categoryHandle()}>
              {categoriesButtonMessage}
            </button>
            {categoriesModal && (
              <div className="categories-modal-container">
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
            )}
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
          {filter.length !== 0 && (
            <div className="shop-categories-container">
              <h1>SUB-CATEGORIES</h1>
              <form className="shop-categories">
                {subCategories.map((subCategory) => {
                  return (
                    filter.indexOf(subCategory.category) !== -1 && (
                      <label key={subCategory.title}>
                        <input
                          type="checkbox"
                          name={subCategory.title}
                          onClick={(e) => {
                            filter2Handle(e);
                          }}
                        />
                        <span>{subCategory.title}</span>
                      </label>
                    )
                  );
                })}
              </form>
            </div>
          )}
        </div>
        <div>
          {/* <h1>Showing {filteredData.length} Results</h1> */}
          <ArticleList
            data={filteredData}
            filter={filter}
            filter2={filter2}
            modalHandle={modalHandle}
            setBasket={setBasket}
            userBasket={userBasket}
          />
        </div>
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
