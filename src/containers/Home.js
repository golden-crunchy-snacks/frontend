// Packages
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import ArticleCarousel from "../components/Home/ArticleCarousel";
import Hero from "../components/Home/Hero";
import ArticleModal from "../components/Shop/ArticleModal";
import Loader from "../components/Utility/Loader";

const Home = ({ setBasket, userBasket }) => {
  // States
  const [modalInfo, setModalInfo] = useState();
  const [modal, setModal] = useState(false);
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  // Get articles
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://golden-crunchy-snacks.herokuapp.com/articles`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  });

  // Modal Info Handle
  const modalHandle = (props) => {
    setModal(true);
    setModalInfo(props.article);
  };

  return isLoading ? (
    <Loader />
  ) : (
    <div className="home">
      <Hero />
      <ArticleCarousel
        data={data}
        carouselTitle="Best sellers"
        modalHandle={modalHandle}
        setBasket={setBasket}
        userBasket={userBasket}
      />
      <ArticleCarousel
        data={data}
        carouselTitle="Our Selection of Nut Bars"
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
