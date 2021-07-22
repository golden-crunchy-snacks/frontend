// Packages
import { BiUpArrow, BiDownArrow } from "react-icons/bi";
import { useEffect, useState } from "react";
import axios from "axios";

const QuantityCounter = ({ quantity, upClick, downClick, id }) => {
  // States
  const [stockQuantity, setStockQuantity] = useState();

  // Get article stock quantity
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://golden-crunchy-snacks.herokuapp.com/article/${id}`
        );
        setStockQuantity(response.data.quantity);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  });
  return (
    <div className="quantity-counter-container">
      <h1>{quantity}</h1>
      <div>
        {quantity < stockQuantity && (
          <button>
            <BiUpArrow className="arrow" onClick={upClick} />
          </button>
        )}
        <button>
          <BiDownArrow className="arrow" onClick={downClick} />
        </button>
      </div>
    </div>
  );
};

export default QuantityCounter;
