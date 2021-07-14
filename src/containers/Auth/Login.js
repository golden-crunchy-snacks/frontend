// Packages
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

// Components
import errorMessages from "../../assets/lang/errorMessages.json";

const Login = ({ setTokenAndId }) => {
  const history = useHistory();

  // Input content
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  // Error message
  const [errorMessage, setErrorMessage] = useState();

  // On form submit
  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "https://golden-crunchy-snacks.herokuapp.com/users/login",

        { email: email, password: password }
      );

      if (response.data.token) {
        setTokenAndId(response.data.token, response.data._id);
        setErrorMessage();
        history.push("/");
      }
    } catch (e) {
      if (e.response.data.error) {
        setErrorMessage(e.response.data.error);
        console.log(e.response.data.error);
      } else {
        setErrorMessage(errorMessages.en.error);
        console.log("error2");
      }
    }
  };
  return (
    <div className="credentials-form">
      <h1>LOGIN</h1>
      <div>
        <h2>Email</h2>
        <input
          type="email"
          placeholder="Enter your email address"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <h2>Password</h2>
        <input
          type="password"
          placeholder="Enter your password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
        />
      </div>

      <div className="credentials-form-button">
        {errorMessage !== "" && (
          <div className="error-message">{errorMessage}</div>
        )}
        <button onClick={() => handleSubmit()}>Login</button>
        <Link to="/signup">No account ? Register here</Link>
      </div>
    </div>
  );
};
export default Login;
