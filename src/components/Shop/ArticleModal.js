// Components
import { ImCross } from "react-icons/im";

const ArticleModal = ({ data, onX }) => {
  return (
    <div className="article-modal">
      <div className="article-modal-container">
        <div>
          <img src={data.picture} alt={data.picture} />
        </div>
        <div>
          <h1>{data.title}</h1>
          <h2>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta
            corporis eum consequuntur totam dolor, veritatis quisquam! Commodi
            ea voluptatum, fugiat nam laudantium provident, tenetur mollitia
            ipsam dignissimos earum, minima deserunt?
          </h2>
          <h3>£ {data.price.toFixed(2)}</h3>
          <button className="">ADD TO CART</button>
        </div>
        <ImCross className="x-icon" onClick={onX} />
      </div>
    </div>
  );
};
export default ArticleModal;
