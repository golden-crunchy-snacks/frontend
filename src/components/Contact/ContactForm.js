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

  return isLoading ? (
    <Loader />
  ) : (
    // <>
    //   <div className="contact-form">
    //     <div className="contact__container">
    //       <h1>Contact Form</h1>
    //       <p>
    //         All fields marked with <span className="contact__star">*</span> are
    //         mandatory
    //       </p>
    //       <div>
    //         <div className="contact-flex">
    //           {" "}
    //           <div>
    //             {" "}
    //             <h2 className="contact__heading">
    //               Email <span className="contact__star">*</span>
    //             </h2>
    //             <input
    //               className="contact__input"
    //               type="email"
    //               onChange={(e) => {
    //                 setEmail(e.target.value);
    //               }}
    //               value={email}
    //             />
    //           </div>
    //           <div>
    //             {" "}
    //             <h2 className="contact__heading">
    //               Order Reference (if applicable)
    //             </h2>
    //             <input
    //               className="contact__input"
    //               type="text"
    //               onChange={(e) => {
    //                 setOrderRef(e.target.value);
    //               }}
    //               value={orderRef}
    //             />
    //           </div>
    //         </div>
    //         <div className="contact-flex">
    //           {" "}
    //           <div>
    //             {" "}
    //             <h2 className="contact__heading">
    //               First Name <span className="contact__star">*</span>
    //             </h2>
    //             <input
    //               className="contact__input"
    //               type="text"
    //               onChange={(e) => {
    //                 setFirstName(e.target.value);
    //               }}
    //               value={firstName}
    //             />
    //           </div>
    //           <div>
    //             <h2 className="contact__heading">
    //               Last Name <span className="contact__star">*</span>
    //             </h2>
    //             <input
    //               className="contact__input"
    //               type="text"
    //               onChange={(e) => {
    //                 setLastName(e.target.value);
    //               }}
    //               value={lastName}
    //             />
    //           </div>
    //         </div>
    //       </div>

    //       <div>
    //         {" "}
    //         <h2 className="contact__heading">
    //           Subject <span className="contact__star">*</span>
    //         </h2>
    //         <input
    //           className="contact__input"
    //           type="text"
    //           onChange={(e) => {
    //             setSubject(e.target.value);
    //           }}
    //           value={subject}
    //         />
    //       </div>
    //       <div>
    //         {" "}
    //         <h2 className="contact__heading">
    //           Your message <span className="contact__star">*</span>
    //         </h2>
    //         <textarea
    //           className="contact__textarea"
    //           cols="40"
    //           rows="5"
    //           onChange={(e) => {
    //             setText(e.target.value);
    //           }}
    //           value={text}
    //         ></textarea>
    //       </div>
    //       {errorMessage && <h3>{errorMessage}</h3>}
    //       <button
    //         className="default-button contact-button"
    //         onClick={() => submitHandle()}
    //       >
    //         SEND
    //       </button>
    //     </div>
    //   </div>
    // </>
    <form className="contact__form__container">
      <h1 className="trade__hero__heading">Contact Form</h1>
      <p className="trade__hero__subheading">
        All fields marked with <span className="contact__star">*</span> are
        mandatory{" "}
      </p>
      <div className="contact__form">
        <div>
          <label>
            <span>
              Email <span className="contact__star">*</span>
            </span>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </label>
          <label>
            <span> Order Reference (if applicable)</span>
            <input
              type="text"
              onChange={(e) => {
                setOrderRef(e.target.value);
              }}
              value={orderRef}
            />
          </label>
          <label>
            <span>
              First Name <span className="contact__star">*</span>
            </span>
            <input
              type="text"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstName}
            />
          </label>
          <label>
            <span>
              Last Name <span className="contact__star">*</span>
            </span>
            <input
              type="text"
              onChange={(e) => {
                setLastName(e.target.value);
              }}
              value={lastName}
            />
          </label>
        </div>
        <div>
          <label>
            <span>
              Subject <span className="contact__star">*</span>
            </span>
            <input
              type="text"
              onChange={(e) => {
                setSubject(e.target.value);
              }}
              value={subject}
            />
          </label>
          <label>
            <span>
              Your Message <span className="contact__star">*</span>
            </span>
            <textarea
              cols="40"
              rows="11"
              onChange={(e) => {
                setText(e.target.value);
              }}
              value={text}
            ></textarea>
          </label>
        </div>
      </div>
      <button className="trade__hero__button" onClick={() => submitHandle()}>
        Send
      </button>
    </form>
  );
};

export default ContactForm;
