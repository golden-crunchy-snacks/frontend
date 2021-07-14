// Packages
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../../components/Payment/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51JDCvgC4EgYy5jbWJEYPZ3Iw32mqAmTV5EMsWkkJBObUnPOWcYy0d8cVXs0olk2jlAuhoDO3G5lDNNIQzgTkzz8v00xpsGPfgB"
);

const Checkout = () => {
  return (
    <Elements stripe={stripePromise}>
      <CheckoutForm />
    </Elements>
  );
};

export default Checkout;
