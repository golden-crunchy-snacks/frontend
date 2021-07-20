// Packages
import { useState } from "react";

// Components
import Orders from "./Orders";
import Articles from "./Articles";

const Admin = ({ data }) => {
  const [selector, setSelector] = useState(true);

  return (
    <div>
      <div className="admin-selector">
        <button
          onClick={() => {
            setSelector(true);
          }}
          className={selector ? "selected" : "un-selected"}
        >
          Orders
        </button>
        <button
          className={selector ? "un-selected" : "selected"}
          onClick={() => {
            setSelector(false);
          }}
        >
          Articles
        </button>
      </div>
      <div>{selector ? <Orders /> : <Articles />}</div>
    </div>
  );
};

export default Admin;
