// Packages
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div className="credentials-form">
      <h1>SIGNUP</h1>
      <div>
        <h2>Email</h2>
        <input type="email" placeholder="Enter your email address" />
        <h2>Password</h2>
        <input type="password" placeholder="Enter your password" />
        <h2>Confirm Password</h2>
        <input type="password" placeholder="Confirm your password" />
      </div>

      <div>
        <button>Signup</button>
        <Link to="/login">Already have an account ? Login here</Link>
      </div>
    </div>
  );
};
export default Signup;
