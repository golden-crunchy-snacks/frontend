// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Utility/SmallLoader";

// Components
import AdminArticle from "./AdminArticle";
import NewArticleModal from "./NewArticleModal";

const Articles = () => {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [modal, setModal] = useState(false);

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
            setModal(true);
          }}
        >
          Create New Article
        </button>
      </div>
      {modal && (
        <NewArticleModal
          onX={() => {
            setModal(false);
          }}
        />
      )}
    </div>
  );
};

export default Articles;
