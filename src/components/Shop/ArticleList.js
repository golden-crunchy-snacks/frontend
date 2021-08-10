const ArticleList = ({
  data,
  filter,
  modalHandle,
  setBasket,
  filter2,
  userBasket,
}) => {
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
                src={article.picture}
                alt={article.picture}
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
                src={article.picture}
                alt={article.picture}
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
                  src={article.picture}
                  alt={article.picture}
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
    </div>
  );
};

export default ArticleList;
