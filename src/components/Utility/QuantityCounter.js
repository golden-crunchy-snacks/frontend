// Packages
import { BiUpArrow, BiDownArrow } from "react-icons/bi";

const QuantityCounter = ({ quantity, upClick, downClick }) => {
  return (
    <div className="quantity-counter-container">
      <h1>{quantity}</h1>
      <div>
        <button>
          <BiUpArrow className="arrow" onClick={upClick} />
        </button>
        <button>
          <BiDownArrow className="arrow" onClick={downClick} />
        </button>
      </div>
    </div>
  );
};

export default QuantityCounter;
