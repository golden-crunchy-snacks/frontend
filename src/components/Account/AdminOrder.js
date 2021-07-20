const AdminOrder = ({
  orderRef,
  orderDate,
  onComplete,
  onCompleteText,
  modalHandle,
  order,
}) => {
  return (
    <div className="admin-order">
      <h1>
        Ref : <span>{orderRef}</span>
      </h1>
      <h1>
        Date : <span>{orderDate}</span>
      </h1>
      <button
        onClick={() =>
          modalHandle({
            order: order,
          })
        }
      >
        Details
      </button>
      <button onClick={onComplete}>{onCompleteText}</button>
    </div>
  );
};

export default AdminOrder;
