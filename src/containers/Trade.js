import { Link } from "react-router-dom";
import trade from "../assets/img/trade.png";
import question from "../assets/img/question.png";
import trades from "../assets/trade.json";

const Trade = () => {
  return (
    <div className="trade">
      <section className="trade__hero">
        <div className="trade__hero__container">
          <img src={trade} alt={trade} className="trade__hero__img" />
          <div className="trade__hero__text">
            <h1 className="trade__hero__heading">
              {" "}
              Trade with Golden Crunchy Snacks{" "}
            </h1>
            <h3 className="trade__hero__subheading">
              Interested in direct deliveries or drop shipments, export
              deliveries overseas, deliveries to your corner shop, purchasing
              small quantities or to wholesales conditions? As well interested
              in promotions and access to new products and who we are and what
              we do?
            </h3>
            <Link className="trade__hero__button" to="/contact">
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
      <section className="trade__info__container">
        <div className="trade__info">
          {trades.map((trade) => {
            return (
              <div className="trade__card">
                <img src={trade.image} alt={trade.image} />
                <h1>{trade.title}</h1>
                <p>{trade.description}</p>
              </div>
            );
          })}
        </div>
      </section>
      <section className="trade__hero">
        <div className="trade__hero__container">
          <div className="trade__hero__text">
            <h1 className="trade__hero__heading">Need more information ?</h1>
            <h3 className="trade__hero__subheading">
              Whether you're wondering about prices or specific delivery time,
              do not hesitate to contact us. Our team is ready to answer any
              question you might have. Don't be shy !
            </h3>
            <Link className="trade__hero__button" to="/contact">
              Contact Us Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Trade;
