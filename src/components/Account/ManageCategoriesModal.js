// Components
import { ImCross } from "react-icons/im";

// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Utility/SmallLoader";

const ManageCategoriesModal = ({ onX }) => {
  // States

  const [categoryList, setCategoryList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState();

  // Get category list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://golden-crunchy-snacks.herokuapp.com/categories`
        );

        setCategoryList(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // Create Category
  const createHandle = async () => {
    if (title) {
      try {
        setIsLoading(true);

        const response = await axios.post(
          "https://golden-crunchy-snacks.herokuapp.com/category/create",

          { title }
        );
        console.log(response.data);
        setIsLoading(false);
        alert("New Category Added");
        window.location.reload(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        alert(error);
      }
    } else {
      alert("Category can't be blank");
    }
  };

  // Delete Category

  const deleteHandle = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.delete(
        `https://golden-crunchy-snacks.herokuapp.com/category/delete/${id}`
      );

      if (response.data.message === "Category removed") {
        setIsLoading(false);
        alert("Item succesfully deleted");
        window.location.reload(false);
      } else {
        alert("There's been a problem deleting this article");
        window.location.reload(false);
      }
    } catch (error) {
      alert(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="new-article-modal">
      <div className="new-article-modal-container">
        <div className="admin-categories">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div>
                {categoryList.map((category) => {
                  return (
                    <h1>
                      {category.title}{" "}
                      <button
                        onClick={() => {
                          deleteHandle(category._id);
                        }}
                      >
                        Delete
                      </button>
                    </h1>
                  );
                })}
              </div>
              <div>
                <input
                  value={title}
                  type="text"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />{" "}
                <button
                  onClick={() => {
                    createHandle();
                  }}
                >
                  Add New Category
                </button>
              </div>
            </>
          )}
        </div>
        <ImCross className="x-icon" onClick={onX} />
      </div>
    </div>
  );
};

export default ManageCategoriesModal;
