// Packages
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/Payment/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JDCvgC4EgYy5jbWJEYPZ3Iw32mqAmTV5EMsWkkJBObUnPOWcYy0d8cVXs0olk2jlAuhoDO3G5lDNNIQzgTkzz8v00xpsGPfgB"
);

const Payment = ({ userBasket, setBasket, userId }) => {
  const basket = JSON.parse(userBasket);

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

  return (
    <div className="payment">
      <Elements stripe={stripePromise}>
        <CheckoutForm basket={basket} setBasket={setBasket} userId={userId} />
      </Elements>

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
        </div>
      )}
    </div>
  );
};

export default Payment;
