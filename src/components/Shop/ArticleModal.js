// Components
import { ImCross } from "react-icons/im";

const ArticleModal = ({ data, onX, setBasket, userBasket }) => {
  const description = data.description.split("-");
  console.log(description);
  return (
    <div className="article-modal">
      <div className="article-modal-container">
        <h1>{data.title}</h1>

        <img src={data.picture} alt={data.picture} />

        <ul>
          {description.map((description) => {
            return description !== "" && <li>{description}</li>;
          })}
        </ul>

        <h2>Price</h2>
        <h3>£ {data.price.toFixed(2)}</h3>
        <button
          onClick={() =>
            setBasket({
              id: data._id,
              picture: data.picture,
              title: data.title,
              price: data.price.toFixed(2),
              quantity: 1,
            })
          }
        >
          ADD TO CART
        </button>

        <ImCross className="x-icon" onClick={onX} />
      </div>
    </div>
  );
};
export default ArticleModal;
