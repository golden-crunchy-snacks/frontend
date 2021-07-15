// Packages
import { useHistory } from "react-router-dom";

// Components
import QuantityCounter from "../components/Utility/QuantityCounter";

const Basket = ({
  setBasket,
  userBasket,
  removeBasketQuantity,
  removeBasketItem,
  userId,
}) => {
  const basket = JSON.parse(userBasket);
  const history = useHistory();

  // Function to calculate article  total
  const articleTotal = (price, quantity) => {
    const total = (price * quantity).toFixed(2);
    return total;
  };

  // Function to calculate total
  const orderTotal = () => {
    let sum = 0;
    basket.forEach(function (basket) {
      let calculation = basket.price * basket.quantity;
      sum += calculation;
    });
    return sum.toFixed(2);
  };

  return basket === null ? (
    <div className="basket-container">
      <div className="basket-sub-container">
        <h1>BASKET</h1>
        <h2>Your basket contains 0 items</h2>
      </div>
    </div>
  ) : (
    <div className="basket-container">
      <div className="basket-sub-container">
        <h1>BASKET</h1>
        <h2>Your basket contains {basket.length} items</h2>

        <div className="basket-list-container">
          {basket &&
            basket.map((article) => {
              return (
                <div key={article.title} className="basket-list">
                  <img src={article.picture} alt={article.picture} />
                  <h1>{article.title}</h1>
                  <h2>
                    <QuantityCounter
                      quantity={article.quantity}
                      basket={basket}
                      upClick={() =>
                        setBasket({
                          picture: article.picture,
                          title: article.title,
                          price: article.price,
                          quantity: 1,
                        })
                      }
                      downClick={() =>
                        removeBasketQuantity({
                          title: article.title,
                        })
                      }
                    />
                  </h2>
                  <h3>
                    £ {articleTotal(article.price, article.quantity)}
                    <span>
                      {" "}
                      ({article.quantity} x {article.price})
                    </span>
                  </h3>
                  <button
                    className="default-button"
                    onClick={() =>
                      removeBasketItem({
                        title: article.title,
                      })
                    }
                  >
                    Remove
                  </button>
                </div>
              );
            })}
        </div>
      </div>
      {basket.length > 0 && (
        <div className="total-container">
          <h1>Your order</h1>
          {basket &&
            basket.map((article) => {
              return (
                <h2>
                  <span>
                    {article.quantity} x {article.title}{" "}
                  </span>{" "}
                  <span>
                    {" "}
                    £ {articleTotal(article.price, article.quantity)}
                  </span>
                </h2>
              );
            })}
          <div className="line"></div>
          <h3>
            <span>Total :</span>
            <span>£ {orderTotal()}</span>
          </h3>
          {userId ? (
            <button
              className="default-button"
              onClick={() => history.push("/payment")}
            >
              Checkout
            </button>
          ) : (
            <>
              <button
                className="default-button"
                onClick={() => history.push("/payment")}
              >
                Guest Checkout
              </button>
              <button
                className="default-button"
                onClick={() => history.push("/login")}
              >
                Login
              </button>{" "}
            </>
          )}
        </div>
      )}
    </div>
  );
};

export default Basket;
