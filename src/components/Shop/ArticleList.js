const ArticleList = ({ data, filter, modalHandle, setBasket, userBasket }) => {
  return (
    <div className="article-list-container">
      <div
        className="article-list-sub-container
  "
      >
        {data.map((article, index) => {
          return filter.length === 0 ? (
            <div
              className="article-list"
              key={index}
              onClick={() =>
                modalHandle({
                  article: article,
                })
              }
            >
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
          ) : (
            filter.indexOf(article.category) !== -1 && (
              <div className="article-list" key={index}>
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
            )
          );
        })}
      </div>
    </div>
  );
};

export default ArticleList;
