// Packages
import { useState } from "react";
import axios from "axios";

// Components
import Loader from "../Utility/Loader";

const ContactForm = () => {
  // States
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [subject, setSubject] = useState("");
  const [orderRef, setOrderRef] = useState("");
  const [text, setText] = useState("");

  // Send email

  const submitHandle = async () => {
    setIsLoading(true);
    try {
      const formData = new FormData();
      formData.append("from", email);
      formData.append("orderRef", orderRef);
      formData.append("firstName", firstName);
      formData.append("lastName", lastName);
      formData.append("subject", subject);
      formData.append("text", text);

      console.log(text);

      const response = await axios.post(
        "https://golden-crunchy-snacks.herokuapp.com/mail/contact",
        formData
      );
      if ((response.data = "Email sent !")) {
        alert("Your email has been successfully sent !");
        setIsLoading(false);
      } else {
        setIsLoading(false);
        console.log(response.data);
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.response.data.error);
      console.log(error.response.data.error);
    }
  };

  // Trade facts

  // const tradeFacts = [
  //   {
  //     id: 1,
  //     title: "Assortment",
  //     info: "Choose from an assortment of our branded products and as well as a wide selection of international brands.",
  //   },
  //   {
  //     id: 2,
  //     title: "Price",
  //     info: "You benefit from out clear and transparent pricing. We offer attractive conditions for every customer structure.",
  //   },
  //   {
  //     id: 3,
  //     title: "Service",
  //     info: "Our field sales representatives and our competent staff in the office are always happy to help you.",
  //   },
  //   {
  //     id: 4,
  //     title: "Logistics",
  //     info: "Within just 24 hours of receiving your order, we can send out your delivery. Our streamlined logistics solutions allow us to deliver all around the United Kingdom.",
  //   },
  // ];

  return isLoading ? (
    <Loader />
  ) : (
    <>
      {/* <div className="trade">
        <div className="trade__container">
          <h1 className="trade__heading">Trade</h1>
          <section className="trade__info">
            {tradeFacts.map((trade) => {
              return <Trade key={trade.id} {...trade} />;
            })}
          </section>
        </div>
      </div> */}
      <div className="contact-form">
        <div className="contact__container">
          <h1>Contact Form</h1>
          <p>
            All fields marked with <span className="contact__star">*</span> are
            mandatory
          </p>
          <div>
            <div className="contact-flex">
              {" "}
              <div>
                {" "}
                <h2 className="contact__heading">
                  Email <span className="contact__star">*</span>
                </h2>
                <input
                  className="contact__input"
                  type="email"
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  value={email}
                />
              </div>
              <div>
                {" "}
                <h2 className="contact__heading">
                  Order Reference (if applicable)
                </h2>
                <input
                  className="contact__input"
                  type="text"
                  onChange={(e) => {
                    setOrderRef(e.target.value);
                  }}
                  value={orderRef}
                />
              </div>
            </div>
            <div className="contact-flex">
              {" "}
              <div>
                {" "}
                <h2 className="contact__heading">
                  First Name <span className="contact__star">*</span>
                </h2>
                <input
                  className="contact__input"
                  type="text"
                  onChange={(e) => {
                    setFirstName(e.target.value);
                  }}
                  value={firstName}
                />
              </div>
              <div>
                <h2 className="contact__heading">
                  Last Name <span className="contact__star">*</span>
                </h2>
                <input
                  className="contact__input"
                  type="text"
                  onChange={(e) => {
                    setLastName(e.target.value);
                  }}
                  value={lastName}
                />
              </div>
            </div>
          </div>

          <div>
            {" "}
            <h2 className="contact__heading">
              Subject <span className="contact__star">*</span>
            </h2>
            <input
              className="contact__input"
              type="text"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              value={subject}
            />
          </div>
          <div>
            {" "}
            <h2 className="contact__heading">
              Your message <span className="contact__star">*</span>
            </h2>
            <textarea
              className="contact__textarea"
              cols="40"
              rows="5"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            ></textarea>
          </div>
          {errorMessage && <h3>{errorMessage}</h3>}
          <button
            className="default-button contact-button"
            onClick={() => submitHandle()}
          >
            SEND
          </button>
        </div>
      </div>
    </>
  );
};

export default ContactForm;
