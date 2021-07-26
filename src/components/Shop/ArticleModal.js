// Components
import { ImCross } from "react-icons/im";

const ArticleModal = ({ data, onX, setBasket, userBasket }) => {
  return (
    <div className="article-modal">
      <div className="article-modal-container">
        <h1>{data.title}</h1>

        <img src={data.picture} alt={data.picture} />

        <h2>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
          corporis eum consequuntur totam dolor, veritatis quisquam! Commodi ea
          voluptatum, fugiat nam laudantium provident, tenetur mollitia ipsam
          dignissimos earum, minima deserunt?
        </h2>

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
