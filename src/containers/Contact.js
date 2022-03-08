// Components
import Map from "../components/Utility/Map";
import ContactForm from "../components/Contact/ContactForm";

const Contact = () => {
  return (
    <div className="contact">
      <ContactForm />
      <section className="contact__address">
        <h1>HF International Marketing Ltd</h1>
        <h1>86 Plymouth Road, Slough, Berkshire SL1 4LP </h1>

        <h1>Company Registered in England & Wales No: 09829079</h1>
      </section>
      <iframe
        className="map"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2543.7221355135443!2d-4.069127784280243!3d50.39037817946714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x486cec3807a4d5ab%3A0x803682f79fd308bd!2s86%20Plymouth%20Rd%2C%20Plympton%2C%20Plymouth%20PL7%204NB%2C%20Royaume-Uni!5e0!3m2!1sfr!2sde!4v1645722204675!5m2!1sfr!2sde"
        allowfullscreen=""
        loading="lazy"
      ></iframe>

      {/* <div className="contact__container">
        <div className="contact__body">
          <h1>Company Name:</h1>
          <h2>HF International Marketing Ltd</h2>
          <h1>Registered Address:</h1>
          <h2>86 Plymouth Road, Slough, Berkshire SL1 4LP </h2>
          <h2>United Kingdom</h2>
          <h1>E-mail:</h1>
          <h2>sales@hfinternationalmarketing.co.uk</h2>
          <h3>Company Registered in England & Wales No: 09829079</h3>
        </div>
      </div>

      <div className="map">
        <Map />
      </div> */}
    </div>
  );
};

export default Contact;
