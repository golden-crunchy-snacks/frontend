// Packages
import { useState, useEffect } from "react";
import axios from "axios";

// Components
import ArticleCarousel from "../components/Home/ArticleCarousel";
import Hero from "../components/Home/Hero";
import Info from "../components/Home/Info";
import ArticleModal from "../components/Shop/ArticleModal";
import Loader from "../components/Utility/Loader";

const Home = ({ setBasket, userBasket, userType }) => {
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
  const travel = "Travel Sweets";
  const americanCandy = "American Candy";

  return (
    <div className="home">
      <Hero />
      {isLoading ? (
        <Loader />
      ) : (
        <ArticleCarousel
          data={data}
          filter={haribo}
          carouselTitle="YOUR FAVORITE HARIBO TREATS"
          modalHandle={modalHandle}
          setBasket={setBasket}
          userBasket={userBasket}
          userType={userType}
        />
      )}
      {isLoading ? (
        <Loader />
      ) : (
        <ArticleCarousel
          data={data}
          filter={biscuits}
          carouselTitle="BISCUITS, COOKIES & WAFERS"
          modalHandle={modalHandle}
          setBasket={setBasket}
          userBasket={userBasket}
          userType={userType}
        />
      )}
      <Info text="The Golden Crunchy brand is becoming very popular and growing stronger year by year reaching customers nationally. The company products are all 100% Vegetarian, Halal and manufactured in UK and Europe. The products have the finest ingredients creating superior and rich taste with high quality." />
      {isLoading ? (
        <Loader />
      ) : (
        <ArticleCarousel
          data={data}
          filter={americanCandy}
          carouselTitle="AMERICAN CANDY"
          modalHandle={modalHandle}
          setBasket={setBasket}
          userBasket={userBasket}
          userType={userType}
        />
      )}

      {isLoading ? (
        <Loader />
      ) : (
        <ArticleCarousel
          data={data}
          filter={travel}
          carouselTitle="SWEETS FOR WHEN YOU TRAVEL"
          modalHandle={modalHandle}
          setBasket={setBasket}
          userBasket={userBasket}
          userType={userType}
        />
      )}
      <Info
        text="
We pride ourselves on the breadth of our product range and continually scour the UK, Europe and beyond to bring you that something unique and special that will give you a point of difference."
      />
      {modal && (
        <ArticleModal
          data={modalInfo}
          onX={() => setModal(false)}
          setBasket={setBasket}
          userBasket={userBasket}
          userType={userType}
        />
      )}
    </div>
  );
};

export default Home;
