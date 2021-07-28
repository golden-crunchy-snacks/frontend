// Packages
import axios from "axios";
import { useState, useEffect } from "react";

// Components
import Loader from "../../components/Utility/Loader";
import Order from "../../components/Account/Order";
import OrderModal from "../../components/Account/OrderModal";
import Admin from "../../components/Account/Admin";

const Account = ({ userId }) => {
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

  // Get user orders
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (userId === "60f5654674b2c80015d86e7e") {
          const response = await axios.get(
            `https://golden-crunchy-snacks.herokuapp.com/orders`
          );

          setData(response.data);

          setIsLoading(false);
        } else {
          try {
            const response = await axios.get(
              `https://golden-crunchy-snacks.herokuapp.com/orders/${userId}`
            );
            setData(response.data);

            setIsLoading(false);
          } catch (error) {
            setIsLoading(false);
          }
        }
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  });

  return isLoading ? (
    <Loader data={data} />
  ) : userId === "60f5654674b2c80015d86e7e" ? (
    <Admin />
  ) : (
    <div className="account-container">
      <h1>Your orders</h1>
      {data ? (
        <Order data={data} modalHandle={modalHandle} />
      ) : (
        <h2>You have no orders</h2>
      )}
      {modal && <OrderModal data={modalInfo} onX={() => setModal(false)} />}
    </div>
  );
};

export default Account;
