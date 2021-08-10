// Components
import { ImCross } from "react-icons/im";

// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Utility/SmallLoader";

const ManageSubCategoriesModal = ({ onX }) => {
  // States

  const [categoryList, setCategoryList] = useState();
  const [subCategoryList, setSubCategoryList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [title, setTitle] = useState();
  const [categoryId, setCategoryId] = useState();
  const [category, setCategory] = useState();
  console.log(subCategoryList);

  // Get category and sub-category lists
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://golden-crunchy-snacks.herokuapp.com/categories`
        );
        const response2 = await axios.get(
          `https://golden-crunchy-snacks.herokuapp.com/subcategories`
        );

        setCategoryList(response.data);
        setSubCategoryList(response2.data);
        setCategoryId(response.data[0]._id);
        setCategory(response.data[0].title);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // Create Sub-Category
  const createHandle = async () => {
    if (title) {
      try {
        setIsLoading(true);

        const response = await axios.post(
          "https://golden-crunchy-snacks.herokuapp.com/subcategory/create",

          { title, categoryId, category }
        );
        console.log(response.data);

        setIsLoading(false);
        alert("New Sub-Category Added");
        window.location.reload(false);
      } catch (error) {
        console.log(error);
        setIsLoading(false);
        alert(error);
      }
    } else {
      alert("Input can't be blank");
    }
  };

  // Delete Sub-Category

  const deleteHandle = async (id) => {
    try {
      setIsLoading(true);
      const response = await axios.delete(
        `https://golden-crunchy-snacks.herokuapp.com/subcategory/delete/${id}`
      );

      if (response.data.message === "SubCategory removed") {
        setIsLoading(false);
        alert("Sub-Category succesfully deleted");
        window.location.reload(false);
      } else {
        alert("There's been a problem deleting this Sub-Category");
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
        <div className="admin-sub-categories">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div>
                {" "}
                <h1>All Sub-Categories</h1>
                {subCategoryList.map((subCategory) => {
                  return (
                    <h1>
                      {subCategory.title}
                      <button
                        onClick={() => {
                          deleteHandle(subCategory._id);
                        }}
                      >
                        Delete
                      </button>
                    </h1>
                  );
                })}
              </div>
              <div>
                <label for="category">
                  <h1>Select a Category</h1>
                  <select
                    name="category"
                    cols="40"
                    rows="5"
                    onChange={(e) => {
                      setCategory(JSON.parse(e.target.value).title);
                      setCategoryId(JSON.parse(e.target.value).id);
                    }}
                  >
                    {categoryList.map((category) => {
                      return (
                        <option
                          value={`{"title": "${category.title}", "id": "${category._id}"}`}
                        >
                          {category.title}
                        </option>
                      );
                    })}
                  </select>
                  <h1>Input new Sub-Category</h1>
                </label>
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
                  Add New Sub-Category
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

export default ManageSubCategoriesModal;
