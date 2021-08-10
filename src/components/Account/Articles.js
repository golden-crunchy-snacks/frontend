// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Utility/SmallLoader";

// Components
import AdminArticle from "./AdminArticle";
import NewArticleModal from "./NewArticleModal";
import ManageCategoriesModal from "./ManageCategoriesModal";
import ManageSubCategoriesModal from "./ManageSubCategoriesModal";
import SearchBar from "../Utility/SearchBar";

const Articles = () => {
  // States
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [searchValue, setSearchValue] = useState("");
  const [searchVisibility, setSearchVisibility] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [articleModal, setArticleModal] = useState(false);
  const [categoriesModal, setCategoriesModal] = useState(false);
  const [subCategoriesModal, setSubCategoriesModal] = useState(false);

  // Get orders
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

  return isLoading ? (
    <Loader />
  ) : (
    <div className="admin-articles">
      <div>
        <h1>Search by Title</h1>
        <div>
          {" "}
          <SearchBar
            placeholder="Search for order ..."
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
      </div>
      <div>
        <div>
          {filteredData.map((article) => {
            return <AdminArticle article={article} key={article._id} />;
          })}
        </div>

        <div>
          <button
            onClick={() => {
              setArticleModal(true);
            }}
          >
            Create New Article
          </button>
          <button
            onClick={() => {
              setCategoriesModal(true);
            }}
          >
            Manage Categories
          </button>
          <button
            onClick={() => {
              setSubCategoriesModal(true);
            }}
          >
            Manage Sub-Categories
          </button>
        </div>
      </div>

      {articleModal && (
        <NewArticleModal
          onX={() => {
            setArticleModal(false);
          }}
        />
      )}
      {categoriesModal && (
        <ManageCategoriesModal
          onX={() => {
            setCategoriesModal(false);
          }}
        />
      )}
      {subCategoriesModal && (
        <ManageSubCategoriesModal
          onX={() => {
            setSubCategoriesModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Articles;
