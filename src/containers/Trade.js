import { GiChocolateBar } from "react-icons/gi";
import { RiMoneyPoundCircleLine } from "react-icons/ri";
import { FaHandshake } from "react-icons/fa";
import { BiNotepad } from "react-icons/bi";

const Trade = () => {
  return (
    <div className="trade__background">
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
          <section className="trade__section trade__section-grey">
            <div className="trade__container">
              <h1 className="trade__sectionHeading ">Assortment</h1>
              <div className="trade__sectionBody">
                <p className="trade__text ">
                  Choose from an assortment of our branded products and as well
                  as a wide selection of international brands.
                </p>
                <div className="trade__image">
                  <GiChocolateBar />
                </div>
              </div>
            </div>
          </section>
          <section className="trade__section trade__section-white">
            <div className="trade__container">
              <h1 className="trade__sectionHeading trade__text--black ">
                Price
              </h1>
              <div className="trade__sectionBody trade__sectionBody-flip">
                <p className=" trade__text trade__text--black trade__text--padding ">
                  You benefit from out clear and transparent pricing. We offer
                  attractive conditions for every customer structure.
                </p>
                <div className="trade__image">
                  <RiMoneyPoundCircleLine />
                </div>
              </div>
            </div>
          </section>
          <section className="trade__section trade__section-grey">
            <div className="trade__container">
              <h1 className="trade__sectionHeading trade__text--black">
                Service
              </h1>
              <div className="trade__sectionBody">
                <p className="trade__text trade__text--black">
                  Our field sales representatives and our competent staff in the
                  office are always happy to help you.
                </p>
                <div className="trade__image">
                  <FaHandshake />
                </div>
              </div>
            </div>
          </section>
          <section className="trade__section trade__section-white">
            <div className="trade__container">
              <h1 className="trade__sectionHeading  trade__text--black">
                Logistics
              </h1>
              <div className="trade__sectionBody trade__sectionBody-flip">
                <p className=" trade__text trade__text--black trade__text--padding">
                  Within just 24 hours of receiving your order, we can send out
                  your delivery. Our streamlined logistics solutions allow us to
                  deliver all around the United Kingdom.
                </p>
                <div className="trade__image">
                  <BiNotepad />
                </div>
              </div>
            </div>
          </section>
        </div>
      </>
    </div>
  );
};

export default Trade;
