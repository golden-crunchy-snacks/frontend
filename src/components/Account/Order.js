const Order = ({ data, modalHandle }) => {
  return (
    <div>
      {data.map((order) => {
        return (
          <div className="account-order">
            <h1>
              Order Reference : <span>{order.orderRef}</span>
            </h1>
            <h1>
              Order Date :{" "}
              <span>
                {order.orderDate.substring(0, order.orderDate.indexOf("@"))}
              </span>
            </h1>
            <h1>
              To :{" "}
              <span>
                {order.customer.firstName} {order.customer.lastName}
              </span>
            </h1>
            <button
              className="default-button-2"
              onClick={() =>
                modalHandle({
                  order: order,
                })
              }
            >
              See Order Details
            </button>
          </div>
        );
      })}
    </div>
  );
};
export default Order;
