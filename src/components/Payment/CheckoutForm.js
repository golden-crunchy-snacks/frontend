// Components
import Loader from "../../components/Utility/Loader";

// Packages
import { useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";
import { Redirect } from "react-router-dom";
import axios from "axios";

const CheckoutForm = ({ userId, basket, setBasket }) => {
  const stripe = useStripe();
  const elements = useElements();

  // States
  const [errorMessage, setErrorMessage] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [email, setEmail] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [address, setAddress] = useState();
  const [city, setCity] = useState();
  const [postcode, setPostcode] = useState();
  const [country, setCountry] = useState();
  const [state, setState] = useState();

  // Function to calculate total
  const orderTotal = () => {
    let sum = 0;
    basket.forEach(function (basket) {
      let calculation = basket.price * basket.quantity;
      sum += calculation;
    });
    return sum.toFixed(2);
  };

  // Date formatting
  const currentdate = new Date();
  const orderDate =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " @ " +
    ("0" + currentdate.getHours()).slice(-2) +
    ":" +
    ("0" + currentdate.getMinutes()).slice(-2) +
    ":" +
    ("0" + currentdate.getSeconds()).slice(-2);

  // Submit handle
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (
      firstName &&
      lastName &&
      email &&
      address &&
      city &&
      postcode &&
      country &&
      state
    ) {
      const cardElement = elements.getElement(CardElement);

      const stripeResponse = await stripe.createToken(cardElement, {
        name: `${firstName} ${lastName}`,
      });
      console.log(stripeResponse);

      if (!stripeResponse.error) {
        const stripeToken = stripeResponse.token.id;
        try {
          setIsLoading(true);
          const response = await axios.post(
            "https://golden-crunchy-snacks.herokuapp.com/pay",
            {
              userId: userId ? userId : `${firstName} ${lastName}`,
              stripeToken,
              amount: parseFloat(orderTotal()) * 100,
              description: `${lastName
                .substring(0, 2)
                .toUpperCase()}${new Date()
                .toLocaleDateString()
                .split("/")
                .join("")}${("0" + currentdate.getHours()).slice(-2)}${(
                "0" + currentdate.getMinutes()
              ).slice(-2)}${("0" + currentdate.getSeconds()).slice(-2)}`,
              firstName,
              lastName,
              email,
              address,
              city,
              postcode,
              country,
              state,
              orderRef: `${lastName.substring(0, 2).toUpperCase()}${new Date()
                .toLocaleDateString()
                .split("/")
                .join("")}${("0" + currentdate.getHours()).slice(-2)}${(
                "0" + currentdate.getMinutes()
              ).slice(-2)}${("0" + currentdate.getSeconds()).slice(-2)}`,
              order: basket,
              orderDate,
            }
          );

          console.log(response.data);

          if (response.data.status === "succeeded") {
            try {
              for (let i = 0; i < basket.length; i++) {
                await axios.put(
                  "https://golden-crunchy-snacks.herokuapp.com/article/pay",
                  {
                    id: basket[i].id,
                    quantity: basket[i].quantity,
                  }
                );
              }
            } catch (error) {
              alert(error);
            }
            setIsLoading(false);
            setCompleted(true);
            setBasket();
          }
        } catch (e) {
          setIsLoading(false);
          setErrorMessage(e.response.data.error);
        }
      } else {
        setIsLoading(false);
        setErrorMessage(stripeResponse.error.message);
      }
    } else {
      setErrorMessage("Please fill all required fields");
    }
  };

  return isLoading ? (
    <Loader />
  ) : !completed ? (
    <div className="payment-container">
      {errorMessage !== "" && (
        <div className="payment-form-error-message">{errorMessage}</div>
      )}
      <h1>Shipping Information</h1>
      <h2>Fields marked with * are mandatory</h2>{" "}
      <div className="shipping-form">
        <label for="email">
          Email *
          <input
            id="email"
            type="email"
            placeholder="Email *"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={email}
          />
        </label>
        <label for="firstName">
          First Name *
          <input
            id="firstName"
            type="text"
            placeholder="First Name *"
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
            value={firstName}
          />
        </label>
        <label for="lastName">
          Last Name *
          <input
            id="lastName"
            type="text"
            placeholder="Last Name *"
            onChange={(e) => {
              setLastName(e.target.value);
            }}
            value={lastName}
          />
        </label>
        <label for="address">
          Street Address *
          <input
            id="address"
            type="text"
            placeholder="Street Address *"
            onChange={(e) => {
              setAddress(e.target.value);
            }}
            value={address}
          />
        </label>
        <label for="city">
          Town/City *
          <input
            id="city"
            type="text"
            placeholder="Town/City *"
            onChange={(e) => {
              setCity(e.target.value);
            }}
            value={city}
          />
        </label>
        <label for="postcode">
          Postcode *
          <input
            id="postcode"
            type="text"
            placeholder="Postcode *"
            onChange={(e) => {
              setPostcode(e.target.value);
            }}
            value={postcode}
          />
        </label>
        <label for="country">
          Country *
          <input
            id="country"
            type="text"
            placeholder="Country *"
            onChange={(e) => {
              setCountry(e.target.value);
            }}
            value={country}
          />
        </label>
        <label for="state">
          State/County *{" "}
          <input
            id="state"
            type="text"
            placeholder="State/County *"
            onChange={(e) => {
              setState(e.target.value);
            }}
            value={state}
          />
        </label>
      </div>
      <div className="line"></div>
      <h1>Payment Information</h1>
      <form onSubmit={handleSubmit} className="payment-form">
        <CardElement />
        <button type="submit" className="default-button margin-top ">
          Pay
        </button>
      </form>
    </div>
  ) : (
    <Redirect to="/success" />
  );
};

export default CheckoutForm;
