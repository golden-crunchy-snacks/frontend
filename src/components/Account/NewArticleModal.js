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
  const [picture1, setPicture1] = useState();
  const [picture2, setPicture2] = useState();
  const [picture3, setPicture3] = useState();
  const [picture4, setPicture4] = useState();
  const [price, setPrice] = useState();
  const [wholeSalePrice, setWholeSalePrice] = useState();
  const [description, setDescription] = useState();
  const [category, setCategory] = useState();
  const [categoryList, setCategoryList] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [categoryId, setCategoryId] = useState();
  const [subCategory, setSubCategory] = useState("None");
  const [subCategoryList, setSubCategoryList] = useState([]);
  const [src1, setSrc1] = useState();
  const [alt1, setAlt1] = useState();
  const [src2, setSrc2] = useState();
  const [alt2, setAlt2] = useState();
  const [src3, setSrc3] = useState();
  const [alt3, setAlt3] = useState();
  const [src4, setSrc4] = useState();
  const [alt4, setAlt4] = useState();

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
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

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

  // Create Article
  const uploadHandle = async () => {
    try {
      setIsLoading(true);
      const formData = new FormData();
      formData.append("subCategory", subCategory);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("price", parseFloat(price).toFixed(2));
      formData.append("wholeSalePrice", parseFloat(wholeSalePrice).toFixed(2));
      formData.append("category", category);
      formData.append("quantity", parseInt(quantity, 10));
      formData.append("picture1", picture1);
      formData.append("picture2", picture2);
      formData.append("picture3", picture3);
      formData.append("picture4", picture4);
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
        <div className="admin-article-container">
          {isLoading ? (
            <Loader />
          ) : (
            <>
              <div className="admin-article">
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
                        rows="9"
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value);
                        }}
                      ></textarea>
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
                              <option
                                value={subCategory.title}
                                key={subCategory._id}
                              >
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
                    <label for="wholeSalePrice">
                      {" "}
                      <h1>Wholesale Price</h1>{" "}
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
                      onClick={() => {
                        uploadHandle();
                      }}
                    >
                      Upload New Article
                    </button>
                    <label for="picture 1">
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
                    <label for="picture 2">
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
                    <label for="picture 3">
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
                    <label for="picture 4">
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
              </div>
              <div>
                {" "}
                <div>
                  {" "}
                  <img src={src1} alt={alt1} />
                </div>
                <div>
                  {" "}
                  <img src={src2} alt={alt2} />
                </div>
                <div>
                  {" "}
                  <img src={src3} alt={alt3} />
                </div>
                <div>
                  <img src={src4} alt={alt4} />
                </div>
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
