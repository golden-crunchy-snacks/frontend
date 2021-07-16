// Packages
import axios from "axios";
import { useState, useEffect } from "react";

// Components
import Loader from "../../components/Utility/Loader";
import Order from "../../components/Account/Order";
import OrderModal from "../../components/Account/OrderModal";

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
        const response = await axios.get(
          `https://golden-crunchy-snacks.herokuapp.com/orders/${userId}`
        );

        setData(response.data);
        console.log(userId);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="account-container">
      <h1>Your orders</h1>
      <Order data={data} modalHandle={modalHandle} />
      {modal && <OrderModal data={modalInfo} onX={() => setModal(false)} />}
    </div>
  );
};

export default Account;
