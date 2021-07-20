// Components
import { ImCross } from "react-icons/im";

const OrderModal = ({ data, onX }) => {
  // Function to calculate article  total
  const articleTotal = (price, quantity) => {
    const total = (price * quantity).toFixed(2);
    return total;
  };
  return (
    <div className="order-modal">
      <div className="order-modal-container">
        <div className="order-modal-info">
          <h1>
            Order Reference : <span>{data.orderRef}</span>
          </h1>
          <h1>
            Order Date :{" "}
            <span>
              {data.orderDate.substring(0, data.orderDate.indexOf("@"))}
            </span>
          </h1>
          <h1>
            To :{" "}
            <span>
              {data.customer.firstName} {data.customer.lastName}
            </span>
          </h1>
          <h1>
            Total : <span>£ {data.amount.toFixed(2)}</span>
          </h1>
          <h1>
            Email : <span>{data.customer.email}</span>
          </h1>
          <h1>
            Delivery Address :{" "}
            <span>
              {data.delivery.address}, {data.delivery.postcode} -{" "}
              {data.delivery.city}, {data.delivery.country},{" "}
              {data.delivery.state}
            </span>
          </h1>
        </div>

        <div className="order-list-container">
          <h1>Order Recap</h1>
          {data &&
            data.order.map((article) => {
              return (
                <div key={article.title} className="order-list">
                  <img src={article.picture} alt={article.picture} />
                  <h1>{article.title}</h1>
                  <h1>Quantity: {article.quantity}</h1>
                  <h3>
                    £ {articleTotal(article.price, article.quantity)}
                    <span>
                      {" "}
                      ({article.quantity} x {article.price})
                    </span>
                  </h3>
                </div>
              );
            })}
        </div>
        <ImCross className="x-icon" onClick={onX} />
      </div>
    </div>
  );
};
export default OrderModal;
