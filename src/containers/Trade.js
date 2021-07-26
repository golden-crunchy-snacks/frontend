// Components
import ContactForm from "../components/Contact/ContactForm";

const Trade = () => {
  return (
    <div>
      {/* <ContactForm /> */}
      <>
        <div className="trade">
          <div className="trade__container">
            <main className="trade__main">
              <h1 className="trade__heading">
                Trade with Golden Crunchy Snacks
              </h1>
              <div className="trade__description">
                <div className="trade__text">
                  <i class="fas fa-truck"></i>
                  <p>
                    Interested in direct deliveries or drop shipments, export
                    deliveries overseas, deliveries to your corner shop,
                    purchasing small quantities or to wholesales conditions? As
                    well interested in promotions and access to new products and
                    who we are and what we do?
                  </p>
                </div>
                <br />
                <div className="trade__text">
                  <i class="fas fa-cookie"></i>
                  <p>
                    We are your competent food product supplier with a broad
                    range of products from all segments, with our own recognized
                    brand, complemented by a wide selection of international
                    brands.
                  </p>
                </div>
                <br />
                <div className="trade__text">
                  <i class="fas fa-thumbs-up"></i>
                  <p>
                    Our added value we promise you in handshake quality: Benefit
                    from a variety of product choices, reasonable prices,
                    efficient logistics solutions and quality customer servie.
                    And all of this from just one source!
                  </p>
                </div>
              </div>
            </main>
          </div>
          <section className="trade__section trade__section-blue">
            <div className="trade__container">
              <h1 className="trade__sectionHeading trade__text--white">
                Assortment
              </h1>
              <div className="trade__sectionBody">
                <p className="trade__text trade__text--white">
                  Choose from an assortment of our branded products and as well
                  as a wide selection of international brands.
                </p>
                <a className="trade__image" href="">
                  <img
                    src="https://i.ebayimg.com/images/g/IygAAOSwu4xe1Ejl/s-l640.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </section>
          <section className="trade__section trade__section-white">
            <div className="trade__container">
              <h1 className="trade__sectionHeading trade__text--black ">
                Price
              </h1>
              <div className="trade__sectionBody">
                <p className=" trade__text trade__text--black">
                  You benefit from out clear and transparent pricing. We offer
                  attractive conditions for every customer structure.
                </p>
                <a className="trade__image" href="">
                  <img
                    src="https://thumbs.dreamstime.com/b/businessman-drawing-virtual-screen-pricing-concept-89392739.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </section>
          <section className="trade__section trade__section-blue">
            <div className="trade__container">
              <h1 className="trade__sectionHeading trade__text--white">
                Service
              </h1>
              <div className="trade__sectionBody">
                <p className="trade__text trade__text--white">
                  Our field sales representatives and our competent staff in the
                  office are always happy to help you.
                </p>
                <a className="trade__image" href="">
                  <img
                    src="https://static8.depositphotos.com/1518767/1031/i/600/depositphotos_10312371-stock-photo-businesswoman-reporting-to-sales-in.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </section>
          <section className="trade__section trade__section-white">
            <div className="trade__container">
              <h1 className="trade__sectionHeading  trade__text--black">
                Logistics
              </h1>
              <div className="trade__sectionBody">
                <p className=" trade__text trade__text--black">
                  Within just 24 hours of receiving your order, we can send out
                  your delivery. Our streamlined logistics solutions allow us to
                  deliver all around the United Kingdom.
                </p>
                <a className="trade__image" href="">
                  <img
                    src="https://www.jcshi-torque.co.uk/wp-content/uploads/2017/11/Ex-stock.jpg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
};

export default Trade;
