// Packages
import { useState, useEffect } from "react";

// Components
import Loader from "../Utility/Loader";

const ArticleList = ({
  data,
  filter,
  modalHandle,
  setBasket,
  filter2,
  dataLimit,
  userType,
  isArticlesLoading,
  pageLimit,
  setPageLimit,
  currentPage,
  setCurrentPage,
}) => {
  // Pagination;
  useEffect(() => {
    window.scrollTo({ behavior: "smooth", top: "0px" });
  }, [currentPage]);

  useEffect(() => {
    getPaginatedData();
    setPageLimit(Math.ceil(data.length / dataLimit));
  }, []);

  const [pages] = useState(Math.round(data.length / dataLimit));

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

  return isArticlesLoading ? (
    <Loader />
  ) : (
    <div className="article-list-container">
      <div
        className="article-list-sub-container
  "
      >
        {getPaginatedData().map((article, index) => {
          return (
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
                <h2 className="article-price">
                  £{" "}
                  {userType === "wholesaler"
                    ? article.wholeSalePrice.toFixed(2)
                    : article.price.toFixed(2)}
                </h2>
                <button
                  className="article-button"
                  onClick={() =>
                    setBasket({
                      id: article._id,
                      picture: article.picture
                        ? article.picture
                        : article.pictures.picture1,
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
          );
        })}
      </div>
      <div className="pagination">
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
          className={`next ${currentPage === pages + 1 ? "disabled" : ""}`}
        >
          next
        </button>
      </div>
    </div>
  );
};

export default ArticleList;
