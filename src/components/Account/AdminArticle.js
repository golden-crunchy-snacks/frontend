// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "../Utility/SmallLoader";

const AdminArticle = ({ article }) => {
  // States
  const [title, setTitle] = useState(article.title);
  const [quantity, setQuantity] = useState(article.quantity);
  const [picture1, setPicture1] = useState(
    article.picture ? article.picture : article.pictures.picture1
  );
  const [picture2, setPicture2] = useState(
    article.pictures ? article.pictures.picture2 : ""
  );
  const [picture3, setPicture3] = useState(
    article.pictures ? article.pictures.picture3 : ""
  );
  const [picture4, setPicture4] = useState(
    article.pictures ? article.pictures.picture4 : ""
  );

  const [price, setPrice] = useState(article.price);
  const [wholeSalePrice, setWholeSalePrice] = useState(article.wholeSalePrice);
  const [description, setDescription] = useState(article.description);
  const [subCategory, setSubCategory] = useState(article.subCategory);
  const [subCategoryList, setSubCategoryList] = useState();
  const [category, setCategory] = useState(article.category);
  const [categoryList, setCategoryList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [picturesModal, setPicturesModal] = useState(false);
  const [src1, setSrc1] = useState(
    article.picture ? article.picture : article.pictures.picture1
  );
  const [alt1, setAlt1] = useState(
    article.picture ? article.picture : article.pictures.picture1
  );
  const [src2, setSrc2] = useState(
    article.pictures ? article.pictures.picture2 : ""
  );
  const [alt2, setAlt2] = useState(
    article.pictures ? article.pictures.picture2 : ""
  );
  const [src3, setSrc3] = useState(
    article.pictures ? article.pictures.picture3 : ""
  );
  const [alt3, setAlt3] = useState(
    article.pictures ? article.pictures.picture3 : ""
  );
  const [src4, setSrc4] = useState(
    article.pictures ? article.pictures.picture4 : ""
  );
  const [alt4, setAlt4] = useState(
    article.pictures ? article.pictures.picture4 : ""
  );
  const [confirmModal, setConfirmModal] = useState(false);

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
        setSubCategoryList(response2.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  // Update Article
  const updateHandle = async () => {
    console.log(article.pictures);
    try {
      setIsLoading(true);
      if (article.picture) {
        console.log("ya");
        deleteHandle();
        const formData = new FormData();
        formData.append("subCategory", subCategory);
        formData.append(
          "wholeSalePrice",
          parseFloat(wholeSalePrice).toFixed(2)
        );
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", parseFloat(price).toFixed(2));
        formData.append("category", category);
        formData.append("quantity", parseInt(quantity, 10));
        formData.append("picture1", picture1);
        formData.append("picture2", picture2);
        formData.append("picture3", picture3);
        formData.append("picture4", picture4);
        await axios.post(
          "https://golden-crunchy-snacks.herokuapp.com/article/create",
          formData
        );
      } else {
        console.log(
          article._id,
          title,
          description,
          price,
          category,
          subCategory,
          quantity,
          picture1,
          picture2,
          picture3,
          picture4
        );
        const formData = new FormData();
        formData.append("id", article._id);
        formData.append("title", title);
        formData.append("description", description);
        formData.append("price", parseFloat(price).toFixed(2));
        formData.append(
          "wholeSalePrice",
          parseFloat(wholeSalePrice).toFixed(2)
        );
        formData.append("category", category);
        formData.append("subCategory", subCategory);
        formData.append("quantity", parseInt(quantity, 10));
        formData.append("picture1", picture1);
        formData.append("picture2", picture2);
        formData.append("picture3", picture3);
        formData.append("picture4", picture4);

        await axios.put(
          "https://golden-crunchy-snacks.herokuapp.com/article/update",

          formData
        );
      }

      setIsLoading(false);
      alert("Item succesfully updated");
      window.location.reload(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      alert("There was a problem updating this article");
    }
  };

  // Delete Article

  const deleteHandle = async () => {
    try {
      console.log(article._id);
      setIsLoading(true);
      const response = await axios.delete(
        `https://golden-crunchy-snacks.herokuapp.com/article/delete/${article._id}`
      );

      if (response.data.message === "Article removed") {
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

  // Image preview
  const imgHandle = (e) => {
    if (e.target.files[0]) {
      if (e.target.name === "1")
        setSrc1(URL.createObjectURL(e.target.files[0]));
      setAlt1(e.target.files[0].name);
      setPicture1(e.target.files[0]);
    }
    if (e.target.name === "2") {
      setSrc2(URL.createObjectURL(e.target.files[0]));
      setAlt2(e.target.files[0].name);
      setPicture2(e.target.files[0]);
    }
    if (e.target.name === "3") {
      setSrc3(URL.createObjectURL(e.target.files[0]));
      setAlt3(e.target.files[0].name);
      setPicture3(e.target.files[0]);
    }
    if (e.target.name === "4") {
      setSrc4(URL.createObjectURL(e.target.files[0]));
      setAlt4(e.target.files[0].name);
      setPicture4(e.target.files[0]);
    }
  };

  return (
    <div className="admin-article-container">
      <div className="admin-article">
        {isLoading ? (
          <Loader />
        ) : (
          <>
            {confirmModal && (
              <div className="confirm-modal">
                <h1>Are you sure you want to delete this article ?</h1>
                <div>
                  <button
                    onClick={() => {
                      setConfirmModal(false);
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      deleteHandle();
                    }}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            )}
            <img
              src={
                article.picture ? article.picture : article.pictures.picture1
              }
              alt={
                article.picture ? article.picture : article.pictures.picture1
              }
              className="image-default"
            />

            <div>
              <label htmlFor="title">
                <h1>Title</h1>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="description">
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
              <label htmlFor="picture">
                <button
                  className="default-button"
                  onClick={() => setPicturesModal(!picturesModal)}
                >
                  {picturesModal ? "Hide Pictures" : "Change Pictures"}
                </button>
              </label>
            </div>
            <div>
              <label htmlFor="category">
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
                      <option value={category.title} key={category._id}>
                        {category.title}
                      </option>
                    );
                  })}
                </select>
              </label>
              <label htmlFor="sub-Category">
                <h1>Sub-Category</h1>
                <select
                  name="subCategory"
                  cols="40"
                  rows="5"
                  value={subCategory}
                  onChange={(e) => {
                    setSubCategory(e.target.value);
                  }}
                >
                  {subCategory === undefined || "" || "None" ? (
                    <option value="None">None</option>
                  ) : (
                    <></>
                  )}
                  {subCategoryList.map((subCategory) => {
                    return (
                      subCategory.category === category && (
                        <option value={subCategory.title} key={subCategory._id}>
                          {subCategory.title}
                        </option>
                      )
                    );
                  })}
                </select>
              </label>
              <label htmlFor="quantity">
                <h1>Quantity</h1>
                <input
                  type="text"
                  value={quantity}
                  onChange={(e) => {
                    setQuantity(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="price">
                <h1>Price</h1>
                <input
                  type="text"
                  value={price}
                  onChange={(e) => {
                    setPrice(e.target.value);
                  }}
                />
              </label>
              <label htmlFor="wholeSalePrice">
                <h1>wholeSalePrice</h1>
                <input
                  type="text"
                  value={wholeSalePrice}
                  onChange={(e) => {
                    setWholeSalePrice(e.target.value);
                  }}
                />
              </label>
            </div>
            <div>
              <button
                className="default-button"
                onClick={() => {
                  updateHandle();
                }}
              >
                Save Changes
              </button>
              <button
                className="default-button"
                onClick={() => {
                  setConfirmModal(true);
                }}
              >
                Delete Article
              </button>
            </div>
          </>
        )}
      </div>
      {picturesModal && (
        <>
          <div>
            <div>
              <img src={src1} alt={alt1} />
            </div>
            <div>
              <img src={src2} alt={alt2} />
            </div>
            <div>
              <img src={src3} alt={alt3} />
            </div>
            <div>
              <img src={src4} alt={alt4} />
            </div>
          </div>
          <div>
            <label htmlFor="picture 1">
              <h1>Picture 1</h1>
              <input
                type="file"
                name="1"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  imgHandle(e);
                }}
              />
            </label>
            <label htmlFor="picture 2">
              <h1>Picture 2</h1>
              <input
                type="file"
                name="2"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  imgHandle(e);
                }}
              />
            </label>
            <label htmlFor="picture 3">
              <h1>Picture 3</h1>
              <input
                type="file"
                name="3"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  imgHandle(e);
                }}
              />
            </label>
            <label htmlFor="picture 4">
              <h1>Picture 4</h1>
              <input
                type="file"
                name="4"
                accept="image/png, image/jpeg"
                onChange={(e) => {
                  imgHandle(e);
                }}
              />
            </label>
          </div>
        </>
      )}
    </div>
  );
};

export default AdminArticle;
