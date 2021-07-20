// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import SmallLoader from "../Utility/SmallLoader";

// Components
import AdminOrder from "./AdminOrder";
import OrderModal from "./OrderModal";

const Orders = () => {
  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [modalInfo, setModalInfo] = useState();
  const [modal, setModal] = useState(false);

  // Modal Info Handle
  const modalHandle = (props) => {
    setModalInfo(props.order);
    setModal(true);
  };

  // Get orders
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://golden-crunchy-snacks.herokuapp.com/orders`
        );

        setData(response.data);

        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  //   Complete and un-complete function

  const completeHandle = async (order) => {
    console.log(order.deliveryStatus);
    console.log(order);
    if (order.deliveryStatus === "pending") {
      try {
        const response = await axios.put(
          `https://golden-crunchy-snacks.herokuapp.com/orders/status`,
          { id: order._id, deliveryStatus: "completed" }
        );
        window.location.reload(false);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        const response = await axios.put(
          `https://golden-crunchy-snacks.herokuapp.com/orders/status`,
          { id: order._id, deliveryStatus: "pending" }
        );
        window.location.reload(false);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <div>
      {isLoading ? (
        <SmallLoader />
      ) : (
        <div className="admin-orders">
          <div>
            <h1>Pending</h1>
            {data.map((order) => {
              return (
                order.deliveryStatus === "pending" && (
                  <AdminOrder
                    orderRef={order.orderRef}
                    orderDate={order.orderDate}
                    onComplete={() => completeHandle(order)}
                    onCompleteText="Complete"
                    modalHandle={modalHandle}
                    order={order}
                  />
                )
              );
            })}
          </div>
          <div>
            <h1>Completed</h1>

            {data.map((order) => {
              return (
                order.deliveryStatus === "completed" && (
                  <AdminOrder
                    orderRef={order.orderRef}
                    orderDate={order.orderDate}
                    onComplete={() => completeHandle(order)}
                    onCompleteText="Uncomplete"
                    modalHandle={modalHandle}
                    order={order}
                  />
                )
              );
            })}
          </div>
        </div>
      )}
      {modal && <OrderModal data={modalInfo} onX={() => setModal(false)} />}
    </div>
  );
};

export default Orders;
