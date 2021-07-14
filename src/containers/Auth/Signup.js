// Packages
import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

// Components
import errorMessages from "../../assets/lang/errorMessages.json";

const Signup = ({ setTokenAndId }) => {
  const history = useHistory();

  // Input content
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  console.log(email, password, confirmPassword);

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
            { email: email, password: password }
          );

          if (response.data.token) {
            setTokenAndId(response.data.token, response.data.id);
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
      <h1>SIGNUP</h1>
      <div>
        <h2>Email</h2>
        <input
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => setEmail(e.target.value)}
          value={email}
        />
        <h2>Password</h2>
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
      </div>

      <div className="credentials-form-button">
        {errorMessage !== "" && (
          <div className="error-message">{errorMessage}</div>
        )}
        <button onClick={() => handleSubmit()}>Signup</button>
        <Link to="/login">Already have an account ? Login here</Link>
      </div>
    </div>
  );
};
export default Signup;
