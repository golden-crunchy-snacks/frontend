// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Utility/SmallLoader";

// Components
import AdminArticle from "./AdminArticle";
import NewArticleModal from "./NewArticleModal";
import ManageCategoriesModal from "./ManageCategoriesModal";

const Articles = () => {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [articleModal, setArticleModal] = useState(false);
  const [categoriesModal, setCategoriesModal] = useState(false);

  // Get orders
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://golden-crunchy-snacks.herokuapp.com/articles`
        );

        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="admin-articles">
      <div>
        {data.map((article) => {
          return <AdminArticle article={article} />;
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
            setArticleModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Articles;
