// Components
import { ImCross } from "react-icons/im";

// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Utility/SmallLoader";

const NewArticleModal = ({ onX }) => {
  // States
  const [title, setTitle] = useState();
  const [quantity, setQuantity] = useState();
  const [picture, setPicture] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [categoryList, setCategoryList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState();
  const [subCategory, setSubCategory] = useState("None");
  const [subCategoryId, setSubCategoryId] = useState();
  const [subCategoryList, setSubCategoryList] = useState([]);

  // Get category list
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://golden-crunchy-snacks.herokuapp.com/categories`
        );

        const response2 = await axios.get(
          `https://golden-crunchy-snacks.herokuapp.com/subcategories`
        );
        setCategoryList(response.data);
        setCategoryId(response.data[0]._id);
        setCategory(response.data[0].title);
        setSubCategoryList(response2.data);
        setIsLoading(false);
        console.log(subCategoryList);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // Create Article
  const uploadHandle = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("subCategory", subCategory);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", parseFloat(price).toFixed(2));
      formData.append("category", category);
      formData.append("quantity", parseInt(quantity, 10));
      formData.append("picture", picture);

      const response = await axios.post(
        "https://golden-crunchy-snacks.herokuapp.com/article/create",

        formData
      );
      console.log(response.data);
      setIsLoading(false);
      alert("New article successfully created");
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert(error);
    }
  };

  return (
    <div className="new-article-modal">
      <div className="new-article-modal-container">
        <div className="admin-article">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div>
                <label for="title">
                  <h1>Title</h1>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </label>
                <label for="description">
                  <h1>Description</h1>
                  <textarea
                    name="description"
                    cols="40"
                    rows="5"
                    value={description}
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  ></textarea>
                </label>
                <label for="picture">
                  <h1> Change Picture</h1>
                  <input
                    type="file"
                    name="picture"
                    accept="image/png, image/jpeg"
                    onChange={(e) => {
                      setPicture(e.target.files[0]);
                    }}
                  />
                </label>
              </div>
              <div>
                <label for="category">
                  <h1>Category</h1>
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
                </label>
                <label for="subCategory">
                  <h1>Sub-Category</h1>
                  <select
                    name="subCategory"
                    cols="40"
                    rows="5"
                    onChange={(e) => {
                      setSubCategory(e.target.value);
                    }}
                  >
                    <option value="None">None</option>
                    {subCategoryList.map((subCategory) => {
                      return (
                        subCategory.categoryId === categoryId && (
                          <option value={subCategory.title}>
                            {subCategory.title}
                          </option>
                        )
                      );
                    })}
                  </select>
                </label>
                <label for="quantity">
                  {" "}
                  <h1>Quantity</h1>{" "}
                  <input
                    type="text"
                    value={quantity}
                    onChange={(e) => {
                      setQuantity(e.target.value);
                    }}
                  />
                </label>
                <label for="price">
                  {" "}
                  <h1>Price</h1>{" "}
                  <input
                    type="text"
                    value={price}
                    onChange={(e) => {
                      setPrice(e.target.value);
                    }}
                  />
                </label>
              </div>
              <div>
                <button
                  onClick={() => {
                    uploadHandle();
                  }}
                >
                  Upload New Article
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

export default NewArticleModal;
