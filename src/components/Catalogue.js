// Temporary Catalogue
import temporaryCatalogue from "../assets/temporary-catalogue.json";

const Catalogue = () => {
  return (
    <div className="catalogue-container">
      {temporaryCatalogue.catalogue.map((article) => {
        return (
          <div className="catalogue-article">
            <img src={article.picture} alt={article.picture} />
            <h1>{article.title}</h1>
            <h1>£ {article.price.toFixed(2)}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default Catalogue;
