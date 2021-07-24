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
    <div className="contact-form">
      <h1>Contact Form</h1>
      <p>All fields marked with * are mandatory</p>
      <div>
        <div>
          {" "}
          <div>
            {" "}
            <h2>Email *</h2>
            <input
              type="email"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              value={email}
            />
          </div>
          <div>
            {" "}
            <h2>Order Reference (if applicable)</h2>
            <input
              type="text"
              onChange={(e) => {
                setOrderRef(e.target.value);
              }}
              value={orderRef}
            />
          </div>
        </div>
        <div>
          {" "}
          <div>
            {" "}
            <h2>First Name *</h2>
            <input
              type="text"
              onChange={(e) => {
                setFirstName(e.target.value);
              }}
              value={firstName}
            />
          </div>
          <div>
            <h2>Last Name *</h2>
            <input
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
        <h2>Subject *</h2>
        <input
          type="text"
          onChange={(e) => {
            setSubject(e.target.value);
          }}
          value={subject}
        />
      </div>
      <div>
        {" "}
        <h2>Your message *</h2>
        <textarea
          cols="40"
          rows="5"
          onChange={(e) => {
            setText(e.target.value);
          }}
          value={text}
        ></textarea>
      </div>
      {errorMessage && <h3>{errorMessage}</h3>}
      <button className="default-button" onClick={() => submitHandle()}>
        SEND
      </button>
    </div>
  );
};

export default ContactForm;
