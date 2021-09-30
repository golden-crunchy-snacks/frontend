// Packages
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { useState, useEffect } from "react";

// Components
import { ImCross } from "react-icons/im";

const ArticleModal = ({ data, onX, setBasket, userBasket, userType }) => {
  const description = data.description.split("-");
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    const sortPictures = () => {
      const newPictures = [];
      if (data.pictures) {
        if (data.pictures.picture1 && data.pictures.picture1 !== "") {
          newPictures.push(data.pictures.picture1);
        }
        if (data.pictures.picture2 && data.pictures.picture2 !== "") {
          newPictures.push(data.pictures.picture2);
        }
        if (data.pictures.picture3 && data.pictures.picture3 !== "") {
          newPictures.push(data.pictures.picture3);
        }
        if (data.pictures.picture4 && data.pictures.picture4 !== "") {
          newPictures.push(data.pictures.picture4);
        }
      }
      setPictures(newPictures);
    };

    sortPictures();
  }, [data.pictures]);

  console.log(pictures);

  return (
    <div className="article-modal">
      <div className="article-modal-container">
        <h1>{data.title}</h1>
        {data.picture ? (
          <img src={data.picture} alt={data.picture} />
        ) : (
          <div className="newCarousel-container">
            {" "}
            <Carousel autoPlay infiniteLoop>
              {pictures.map((picture) => {
                return (
                  picture !== "" && (
                    <div className="newCarousel">
                      <img src={picture} alt={picture} />
                    </div>
                  )
                );
              })}
            </Carousel>
          </div>
        )}
        <ul>
          {description.map((description) => {
            return description !== "" && <li>{description}</li>;
          })}
        </ul>

        <h2>Price</h2>
        <h3>
          £{" "}
          {userType === "wholesaler"
            ? data.wholeSalePrice.toFixed(2)
            : data.price.toFixed(2)}
        </h3>
        <button
          onClick={() =>
            setBasket({
              id: data._id,
              picture: data.picture,
              title: data.title,
              price:
                userType === "wholesaler"
                  ? data.wholeSalePrice.toFixed(2)
                  : data.price.toFixed(2),
              quantity: 1,
            })
          }
        >
          ADD TO CART
        </button>

        <ImCross className="x-icon" onClick={onX} />
      </div>
    </div>
  );
};
export default ArticleModal;
