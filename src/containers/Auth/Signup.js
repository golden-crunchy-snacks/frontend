// Packages
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Components
import errorMessages from "../../assets/lang/errorMessages.json";

const Signup = ({ setTokenAndId, setType }) => {
  const history = useHistory();

  // Input content
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [customerType, setCustomerType] = useState("customer");
  const [confirmPassword, setConfirmPassword] = useState();

  // Error message
  const [errorMessage, setErrorMessage] = useState();

  //   On form submit
  const handleSubmit = async () => {
    // All inputs must be filled
    if (email && password && confirmPassword) {
      // Passwords must be identical
      if (password === confirmPassword) {
        try {
          const response = await axios.post(
            "https://golden-crunchy-snacks.herokuapp.com/users/signup",
            { email: email, password: password, type: customerType }
          );

          if (response.data.token) {
            setTokenAndId(response.data.token, response.data.id);
            setType(response.data.type);
            setErrorMessage();
            history.push("/");
          }
        } catch (e) {
          setErrorMessage(e.response.data.error);
        }
      } else {
        setErrorMessage(errorMessages.en.passwords);
      }
    } else {
      setErrorMessage(errorMessages.en.missingData);
    }
  };

  return (
    <div className="credentials-form">
      <h1 className="credential__heading">Sign Up</h1>
      <div>
        <h2 className="credential__subheading">Email</h2>
        <input
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <h2 className="credential__subheading">Password</h2>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          value={password}
        />
        <h2>Confirm Password</h2>
        <input
          type="password"
          placeholder="Confirm your password"
          onChange={(e) => {
            setConfirmPassword(e.target.value);
          }}
          value={confirmPassword}
        />
        <form>
          <label>
            <input
              type="checkbox"
              value="customer"
              checked={customerType === "wholesaler" ? false : true}
              onClick={() => setCustomerType("customer")}
            />
            <span>Customer</span>
          </label>
          <label>
            <input
              type="checkbox"
              value="wholesaler"
              checked={customerType === "customer" ? false : true}
              onClick={() => setCustomerType("wholesaler")}
            />
            <span>Wholesaler</span>
          </label>
        </form>
      </div>

      <div className="credentials-form-button">
        {errorMessage !== "" && (
          <div className="error-message">{errorMessage}</div>
        )}
        <button onClick={() => handleSubmit()}>Signup</button>
        <Link to="/login">
          Already have an account ?{" "}
          <span className="credentials__loginhere">Login here</span>
        </Link>
      </div>
    </div>
  );
};
export default Signup;
