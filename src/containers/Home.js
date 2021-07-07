// Components
import ArticleCarousel from "../components/Home/ArticleCarousel";
import Hero from "../components/Home/Hero";

// Temporary Catalogue
import temporaryCatalogue from "../assets/temporary-catalogue.json";

const Home = () => {
  // Catalogue data source
  const data = temporaryCatalogue.catalogue;

  return (
    <div className="home">
      <Hero />
      <ArticleCarousel data={data} carouselTitle="BESTSELLERS" />
      <ArticleCarousel data={data} carouselTitle="OUR SELECTION OF NUT BARS" />
    </div>
  );
};

export default Home;
