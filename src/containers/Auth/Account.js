// Packages
import { useHistory } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";

// Components
import Loader from "../../components/Utility/Loader";

const Account = ({ setTokenAndId, userId }) => {
  const history = useHistory();

  // States
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Logout Handle
  const handleLogout = () => {
    setTokenAndId();
    history.push("/");
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
    <div>
      Account
      <div>
        {data
          ? data.map((order) => {
              return <div>{order._id}</div>;
            })
          : "No orders"}
      </div>
      <div>
        <button onClick={() => handleLogout()}>LOGOUT</button>
      </div>
    </div>
  );
};

export default Account;
