// Packages
import { useState } from "react";

// Components
import ArticleCarousel from "../components/Home/ArticleCarousel";
import Hero from "../components/Home/Hero";
import ArticleModal from "../components/Shop/ArticleModal";

// Temporary Catalogue
import temporaryCatalogue from "../assets/temporary-catalogue.json";

const Home = ({ setBasket, userBasket }) => {
  // States
  const [modalInfo, setModalInfo] = useState();
  const [modal, setModal] = useState(false);

  // Catalogue data source
  const data = temporaryCatalogue.catalogue;

  // Modal Info Handle
  const modalHandle = (props) => {
    setModal(true);
    setModalInfo(props.article);
  };

  return (
    <div className="home">
      <Hero />
      <ArticleCarousel
        data={data}
        carouselTitle="BESTSELLERS"
        modalHandle={modalHandle}
        setBasket={setBasket}
        userBasket={userBasket}
      />
      <ArticleCarousel
        data={data}
        carouselTitle="OUR SELECTION OF NUT BARS"
        modalHandle={modalHandle}
        setBasket={setBasket}
        userBasket={userBasket}
      />
      {modal && (
        <ArticleModal
          data={modalInfo}
          onX={() => setModal(false)}
          setBasket={setBasket}
          userBasket={userBasket}
        />
      )}
    </div>
  );
};

export default Home;
