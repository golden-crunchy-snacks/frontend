const Basket = ({ setBasket, userBasket }) => {
  const basket = JSON.parse(userBasket);

  // Function to calculate  total
  const articleTotal = (price, quantity) => {
    const total = (price * quantity).toFixed(2);
    return total;
  };

  return (
    <div className="basket-container">
      <div className="basket-sub-container">
        <h1>BASKET</h1>
        <h2>Your basket contains {basket ? basket.length : 0} items</h2>

        <div className="basket-list-container">
          {basket &&
            basket.map((article) => {
              return (
                <div key={article.title} className="article-list">
                  <img src={article.picture} alt={article.picture} />
                  <h1>{article.title}</h1>
                  <h2>Quantity : {article.quantity}</h2>
                </div>
              );
            })}
        </div>
      </div>
      <div className="total-container">
        {basket &&
          basket.map((article) => {
            return (
              <div key={article.title}>
                <h1>{article.title}</h1>
                <h2>Quantity : {article.quantity}</h2>
                <h3>£ {articleTotal(article.price, article.quantity)}</h3>
                <h4>
                  ({article.quantity} x {article.price})
                </h4>
              </div>
            );
          })}
        <h1>TOTAL: </h1>
      </div>
    </div>
  );
};

export default Basket;
