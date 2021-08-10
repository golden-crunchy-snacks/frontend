// Packages
import { useState, useEffect } from "react";
import axios from "axios";
import SmallLoader from "../Utility/SmallLoader";

// Components
import AdminOrder from "./AdminOrder";
import OrderModal from "./OrderModal";
import SearchBar from "../Utility/SearchBar";

const Orders = () => {
  // States
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState(data);
  const [isLoading, setIsLoading] = useState(true);
  const [modalInfo, setModalInfo] = useState();
  const [modal, setModal] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [searchVisibility, setSearchVisibility] = useState(false);

  // Get orders
  useEffect(() => {
    const resetSearch = async () => {
      setFilteredData(data);
    };
    resetSearch();
  }, [data]);

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
    if (order.deliveryStatus === "pending") {
      try {
        await axios.put(
          `https://golden-crunchy-snacks.herokuapp.com/orders/status`,
          { id: order._id, deliveryStatus: "completed" }
        );

        window.location.reload(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      try {
        await axios.put(
          `https://golden-crunchy-snacks.herokuapp.com/orders/status`,
          { id: order._id, deliveryStatus: "pending" }
        );
        window.location.reload(false);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // Search Handle
  const searchHandle = (e) => {
    setSearchVisibility(true);
    setSearchValue(e.target.value);
    let value = e.target.value.toLowerCase();
    let result = [];
    result = data.filter((data) => {
      return data.orderRef.toLowerCase().search(value) !== -1;
    });
    setFilteredData(result);
  };

  // Search Click Handle
  const searchClickHandle = (e) => {
    setSearchValue(e.target.innerText);
    setSearchVisibility(false);
    let value = e.target.innerText.toLowerCase();
    let result = [];
    result = data.filter((data) => {
      return data.orderRef.toLowerCase().search(value) !== -1;
    });
    setFilteredData(result);
  };

  return (
    <div className="admin-orders-container">
      <div>
        <h1>Search by Reference Number</h1>
        <div>
          {" "}
          <SearchBar
            placeholder="Search for order ..."
            data={filteredData}
            onChange={(e) => {
              searchHandle(e);
            }}
            value={searchValue}
            onClick={(e) => {
              searchClickHandle(e);
            }}
            searchVisibility={searchVisibility}
          />
        </div>
      </div>

      {isLoading ? (
        <SmallLoader />
      ) : (
        <div className="admin-orders">
          <div>
            <h1>Pending</h1>
            {filteredData.map((order) => {
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

            {filteredData.map((order) => {
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
