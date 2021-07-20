// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Utility/SmallLoader";

const AdminArticle = ({ article }) => {
  // States
  const [title, setTitle] = useState(article.title);
  const [quantity, setQuantity] = useState(article.quantity);
  const [picture, setPicture] = useState(article.picture);
  const [price, setPrice] = useState(article.price);
  const [description, setDescription] = useState(article.description);
  const [category, setCategory] = useState(article.category);
  const [categoryList, setCategoryList] = useState();
  const [isLoading, setIsLoading] = useState(true);

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

  // Update Article
  const updateHandle = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();

      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", price);
      formData.append("category", category);
      formData.append("quantity", quantity);

      formData.append("picture", picture);

      const response = await axios.post(
        "https://golden-crunchy-snacks.herokuapp.com/article/update",

        formData
      );
      console.log(response.data);
      setIsLoading(false);
      alert("Item succesfully updated");
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert("There was a problem updating this article");
    }
  };

  return (
    <div className="admin-article">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <img
            src={article.picture}
            alt={article.picture}
            className="image-default"
          />

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
          </div>
          <div>
            <label for="picture">
              <h1> Change Picture</h1>
              <input
                type="file"
                name="picture"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  setPicture(e.target.value);
                }}
              />
            </label>
            <label for="category">
              <h1>Category</h1>
              <select
                name="category"
                cols="40"
                rows="5"
                value={category}
                onChange={(e) => {
                  setCategory(e.target.value);
                }}
              >
                {categoryList.map((category) => {
                  return (
                    <option value={category.title}>{category.title}</option>
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
                value={price.toFixed(2)}
                onChange={(e) => {
                  setPrice(e.target.value);
                }}
              />
            </label>
          </div>
          <div>
            <button
              onClick={() => {
                updateHandle();
              }}
            >
              Save Changes
            </button>
            <button>Delete Article</button>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminArticle;
