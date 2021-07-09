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
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
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
            <div
              className="carousel-article-container"
              onClick={() =>
                modalHandle({
                  article: article,
                })
              }
            >
              <div className="carousel-article">
                <img src={article.picture} alt={article.picture} />
                <h1>{article.title}</h1>
                <h2>£ {article.price.toFixed(2)}</h2>
                <button
                  onClick={() =>
                    setBasket({
                      picture: article.picture,
                      title: article.title,
                      price: article.price.toFixed(2),
                      quantity: 1,
                    })
                  }
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          );
        })}
      </Carousel>
    </div>
  );
};

export default ArticleCarousel;
