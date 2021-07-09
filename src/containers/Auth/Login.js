// Packages
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="credentials-form">
      <h1>LOGIN</h1>
      <div>
        <h2>Email</h2>
        <input type="email" placeholder="Enter your email address" />
        <h2>Password</h2>
        <input type="password" placeholder="Enter your password" />
      </div>

      <div>
        <button>Login</button>
        <Link to="/signup">No account ? Register here</Link>
      </div>
    </div>
  );
};
export default Login;
