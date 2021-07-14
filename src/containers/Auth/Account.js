// Packages
import { useHistory } from "react-router-dom";

const Account = ({ setTokenAndId }) => {
  const history = useHistory();

  // Logout Handle
  const handleLogout = () => {
    setTokenAndId();
    history.push("/");
  };

  return (
    <div>
      Account
      <div>
        <button onClick={() => handleLogout()}>LOGOUT</button>
      </div>
    </div>
  );
};

export default Account;
