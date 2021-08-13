// Packages
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import ArticleCarousel from "../components/Home/ArticleCarousel";
import Hero from "../components/Home/Hero";
import Info from "../components/Home/Info";
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
  }, []);

  // Modal Info Handle
  const modalHandle = (props) => {
    console.log("yo");
    setModal(true);
    setModalInfo(props.article);
  };

  // Filters for carousel
  const haribo = "Haribo Range";
  const biscuits = "Biscuits, Cookies & Wafers";
  const lollipops = "Lollipops";
  const travel = "Travel Sweets";

  return isLoading ? (
    <Loader />
  ) : (
    <div className="home">
      <Hero />
      <ArticleCarousel
        data={data}
        filter={haribo}
        carouselTitle="Your favorite Haribo treats"
        modalHandle={modalHandle}
        setBasket={setBasket}
        userBasket={userBasket}
      />
      <ArticleCarousel
        data={data}
        filter={biscuits}
        carouselTitle="Biscuits, Cookies & Wafers"
        modalHandle={modalHandle}
        setBasket={setBasket}
        userBasket={userBasket}
      />
      <ArticleCarousel
        data={data}
        filter={lollipops}
        carouselTitle="Best-selling Lollipops"
        modalHandle={modalHandle}
        setBasket={setBasket}
        userBasket={userBasket}
      />
      <ArticleCarousel
        data={data}
        filter={travel}
        carouselTitle="Sweets for when you travel"
        modalHandle={modalHandle}
        setBasket={setBasket}
        userBasket={userBasket}
      />
      <Info />
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
