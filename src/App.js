import "./App.css";

// Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState } from "react";

// Pages
import Home from "./containers/Home";
import About from "./containers/About";
import Shop from "./containers/Shop";
import Login from "./containers/Auth/Login";
import Signup from "./containers/Auth/Signup";
import Basket from "./containers/Basket";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  // Basket
  const [userBasket, setUserBasket] = useState(
    Cookies.get("userBasket") || null
  );

  const setBasket = (basket) => {
    if (basket) {
      if (userBasket) {
        const updatedBasket = JSON.parse(Cookies.get("userBasket"));

        if (updatedBasket.findIndex((x) => x.title === basket.title) !== -1) {
          updatedBasket[
            updatedBasket.findIndex((x) => x.title === basket.title)
          ].quantity =
            updatedBasket[
              updatedBasket.findIndex((x) => x.title === basket.title)
            ].quantity + 1;
          Cookies.set("userBasket", updatedBasket, { expires: 1 });
          setUserBasket(JSON.stringify(updatedBasket));
          alert(`${basket.title} added to your Basket`);
        } else {
          updatedBasket.push(basket);
          Cookies.set("userBasket", updatedBasket, { expires: 1 });
          setUserBasket(JSON.stringify(updatedBasket));
          alert(`${basket.title} added to your Basket`);
        }
      } else {
        Cookies.set("userBasket", [basket], { expires: 1 });
        setUserBasket(JSON.stringify([basket]));
        alert(`${basket.title} added to your Basket`);
      }
    } else {
      Cookies.remove("userBasket");
      setUserBasket(null);
    }
  };

  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/basket">
          <Basket setBasket={setBasket} userBasket={userBasket} />
        </Route>
        <Route path="/signup">
          <Signup />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/shop">
          <Shop setBasket={setBasket} userBasket={userBasket} />
        </Route>
        <Route path="/">
          <Home setBasket={setBasket} userBasket={userBasket} />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
