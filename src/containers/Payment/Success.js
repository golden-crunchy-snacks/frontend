import { Link } from "react-router-dom";

const Success = () => {
  setTimeout(function () {
    window.location.replace("/");
  }, 5000);
  return (
    <div className="success-container">
      <h1>Your payment has been accepted!</h1>
      <p>You will be automatically redirect to the Homepage in 5 seconds ...</p>

      <Link to="/">
        <button className="default-button">Return to Homepage</button>
      </Link>
    </div>
  );
};
export default Success;
