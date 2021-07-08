const ArticleList = ({ data, filter, modalHandle }) => {
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
              <button>ADD TO CART</button>
            </div>
          ) : (
            filter.indexOf(article.category) !== -1 && (
              <div className="article-list" key={index}>
                <img src={article.picture} alt={article.picture} />
                <h1>{article.title}</h1>
                <h2>£ {article.price.toFixed(2)}</h2>
                <button>ADD TO CART</button>
              </div>
            )
          );
        })}
      </div>
    </div>
  );
};

export default ArticleList;
