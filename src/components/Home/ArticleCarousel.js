// Components
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const ArticleCarousel = ({
  data,
  carouselTitle,
  modalHandle,
  setBasket,
  userBasket,
}) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1200 },
      items: 4,
      slidesToSlide: 1, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1200, min: 750 },
      items: 3,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
    mobile2: {
      breakpoint: { max: 650, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <div className="carousel">
      <h1>{carouselTitle}</h1>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={3500}
        containerClass="carousel-container"
      >
        {data.map((article) => {
          return (
            <div className="carousel-article-container">
              <div className="carousel-article">
                <img
                  src={article.picture}
                  alt={article.picture}
                  onClick={() =>
                    modalHandle({
                      article: article,
                    })
                  }
                />
                <h1>{article.title}</h1>
                <div className="carousel-article-body">
                  <h2 className="carousel-article-price">
                    £ {article.price.toFixed(2)}
                  </h2>
                  <button
                    className="carousel-article-button"
                    onClick={() =>
                      setBasket({
                        id: article._id,
                        picture: article.picture,
                        title: article.title,
                        price: article.price.toFixed(2),
                        quantity: 1,
                      })
                    }
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ArticleCarousel;
