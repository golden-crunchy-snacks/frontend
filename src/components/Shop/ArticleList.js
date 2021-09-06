// Packages
import { useState, useEffect } from "react";

const ArticleList = ({
  data,
  filter,
  modalHandle,
  setBasket,
  filter2,

  dataLimit,
}) => {
  // Pagination
  // useEffect(() => {
  //   window.scrollTo({ behavior: "smooth", top: "0px" });
  // }, [currentPage]);
  const [pageLimit, setPageLimit] = useState(5);
  useEffect(() => {
    getPaginatedData();
    setPageLimit(Math.ceil(data.length / dataLimit));
  }, []);

  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;
    return data.slice(startIndex, endIndex);
  };

  const getPaginationGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, index) => start + index + 1);
  };

  return (
    <div className="article-list-container">
      <div
        className="article-list-sub-container
  "
      >
        {data.map((article, index) => {
          return filter.length === 0 ? (
            <div className="article-list" key={index}>
              <img
                src={
                  article.pictures ? article.pictures.picture1 : article.picture
                }
                alt={
                  article.pictures ? article.pictures.picture1 : article.picture
                }
                onClick={() =>
                  modalHandle({
                    article: article,
                  })
                }
              />
              <h1>{article.title}</h1>
              <div className="article-body">
                <h2 className="article-price">£ {article.price.toFixed(2)}</h2>
                <button
                  className="article-button"
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
          ) : filter.indexOf(article.category) !== -1 &&
            filter2.length === 0 ? (
            <div className="article-list" key={index}>
              <img
                src={
                  article.pictures ? article.pictures.picture1 : article.picture
                }
                alt={
                  article.pictures ? article.pictures.picture1 : article.picture
                }
                onClick={() =>
                  modalHandle({
                    article: article,
                  })
                }
              />
              <h1>{article.title}</h1>
              <div className="article-body">
                <h2 className="article-price">£ {article.price.toFixed(2)}</h2>
                <button
                  className="article-button"
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
          ) : (
            filter.indexOf(article.category) !== -1 &&
            filter2.indexOf(article.subCategory) !== -1 && (
              <div className="article-list" key={index}>
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
                  onClick={() =>
                    modalHandle({
                      article: article,
                    })
                  }
                />
                <h1>{article.title}</h1>
                <div className="article-body">
                  <h2 className="article-price">
                    £ {article.price.toFixed(2)}
                  </h2>
                  <button
                    className="article-button"
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
            )
          );
        })}
      </div>
      {/* <div className="pagination">
    
        <button
          onClick={goToPreviousPage}
          className={`prev ${currentPage === 1 ? "disabled" : ""}`}
        >
          prev
        </button>


        {getPaginationGroup().map((item, index) => (
          <button
            key={index}
            onClick={changePage}
            className={`paginationItem ${
              currentPage === item ? "active" : null
            }`}
          >
            <span>{item}</span>
          </button>
        ))}

      
        <button
          onClick={goToNextPage}
          className={`next ${currentPage === pages ? "disabled" : ""}`}
        >
          next
        </button>
      </div> */}
    </div>
  );
};

export default ArticleList;
