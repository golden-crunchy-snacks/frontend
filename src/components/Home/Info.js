import logo from "../../assets/img/logo.png";
const Info = () => {
  return (
    <div className="info">
      <div className="info__container">
        <h1 className="info__heading">About Us</h1>
        <div className="info__body">
          <p className="info__description">
            The Golden Crunchy brand is becoming very popular and growing
            stronger year by year reaching customers nationally. The company
            products are all 100% Vegetarian, Halal and manufactured in UK and
            Europe. The products have the finest ingredients creating superior
            and rich taste with high quality.
            <br />
            <br />
            We pride ourselves on the breadth of our product range and
            continually scour the UK, Europe and beyond to bring you that
            something unique and special that will give you a point of
            difference.
            <br />
            <br />
            The unrivalled success of Golden Crunchy Snacks has been built
            around our commitment to establishing long term, mutually beneficial
            relationships with customers based upon honesty, trust and
            understanding.
            <br />
            <br />
            Our vision is to continue to grow our business and to lead the UK
            snack industry by establishing the benchmark for innovation,
            quality, manufacturing expertise and forward thinking.
            <br />
            <br />
            In order to realise this vision, we understand the need to offer a
            comprehensive range of quality assured products. A genuine ‘can do’
            attitude and desire to challenge conventional thinking has already
            enabled us to develop a market-leading product range that includes
            *Golden Crunchy* Peanut Bars, Almond Bars, Cashew Bars, Nougat Bars,
            Crispy Bars etc.,
          </p>
        </div>
        <div className="info__image">
          <img src={logo} alt={logo} />
        </div>
      </div>
    </div>
  );
};

export default Info;
