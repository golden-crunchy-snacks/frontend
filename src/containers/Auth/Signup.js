// Packages
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// Components
import errorMessages from "../../assets/lang/errorMessages.json";

const Signup = ({ setTokenAndId }) => {
  // Input content
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Error message
  const [errorMessage, setErrorMessage] = useState();

  //   On form submit
  const handleSubmit = async (event) => {
    event.preventDefault();
    // All inputs must be filled
    if (email && password && confirmPassword) {
      // Passwords must be identical
      if (password === confirmPassword) {
        try {
          const response = await axios.post(
            "https://summit-reacteur.herokuapp.com/api/users/signup",
            { email, password }
          );

          if (response.data.token) {
            setTokenAndId(response.data.token, response.data.id);
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
      <h1>SIGNUP</h1>
      <div>
        <h2>Email</h2>
        <input
          type="email"
          placeholder="Enter your email address"
          onChange={(text) => {
            setEmail(text);
          }}
          value={email}
        />
        <h2>Password</h2>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(text) => {
            setPassword(text);
          }}
          value={password}
        />
        <h2>Confirm Password</h2>
        <input
          type="password"
          placeholder="Confirm your password"
          onChange={(text) => {
            setConfirmPassword(text);
          }}
          value={confirmPassword}
        />
      </div>

      <div>
        <button onClick={() => handleSubmit()}>Signup</button>
        <Link to="/login">Already have an account ? Login here</Link>
      </div>
    </div>
  );
};
export default Signup;
