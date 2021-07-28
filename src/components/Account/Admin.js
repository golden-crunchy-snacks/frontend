// Packages
import { useState } from "react";
import Cookies from "js-cookie";

// Components
import Orders from "./Orders";
import Articles from "./Articles";

const Admin = () => {
  const [selector, setSelector] = useState(Cookies.get("selector") || null);
  const selectorCookie = (selector) => {
    if (selector) {
      setSelector(selector);
      Cookies.set("selector", selector, { expires: 1 });
      window.location.reload(false);
    }
  };

  return (
    <div className="admin-container">
      <div className="admin-selector">
        <button
          onClick={() => {
            selectorCookie("orders");
          }}
          className={
            selector === "orders" || selector === null
              ? "selected"
              : "un-selected"
          }
        >
          Orders
        </button>
        <button
          className={selector === "articles" ? "selected" : "un-selected"}
          onClick={() => {
            selectorCookie("articles");
          }}
        >
          Articles
        </button>
      </div>
      <div>
        {selector === "orders" || selector === null ? <Orders /> : <Articles />}
      </div>
    </div>
  );
};

export default Admin;
