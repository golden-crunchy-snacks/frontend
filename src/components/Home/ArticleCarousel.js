// Components
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ArticleCarousel = ({
  data,
  carouselTitle,
  modalHandle,
  setBasket,
  userBasket,
  filter,
  userType,
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 5,
      slidesToSlide: 1, // optional, default to 1.
    },
    desktop2: {
      breakpoint: { max: 1355, min: 1085 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1085, min: 815 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 815, min: 545 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile2: {
      breakpoint: { max: 545, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="carousel">
      <div>
        <h1>{carouselTitle}</h1>
      </div>

      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3500}
        containerClass="carousel-container"
      >
        {data.map((article) => {
          return (
            article.category === filter && (
              <div className="carousel-article-container">
                <div className="carousel-article">
                  {" "}
                  <div
                    onClick={() =>
                      modalHandle({
                        article: article,
                      })
                    }
                  >
                    <img
                      src={
                        article.pictures
                          ? article.pictures.picture1
                          : article.picture
                      }
                      alt={
                        article.pictures
                          ? article.pictures.picture1
                          : article.picture
                      }
                    />
                  </div>
                  <h1>{article.title}</h1>
                  <div className="carousel-article-body">
                    <h2 className="carousel-article-price">
                      £{" "}
                      {userType === "wholesaler"
                        ? article.wholeSalePrice.toFixed(2)
                        : article.price.toFixed(2)}
                    </h2>
                    <button
                      className="carousel-article-button"
                      onClick={() =>
                        setBasket({
                          id: article._id,
                          picture: article.pictures
                            ? article.pictures.picture1
                            : article.picture,
                          title: article.title,
                          price:
                            userType === "wholesaler"
                              ? article.wholeSalePrice.toFixed(2)
                              : article.price.toFixed(2),
                          quantity: 1,
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </Carousel>
    </div>
  );
};

export default ArticleCarousel;
