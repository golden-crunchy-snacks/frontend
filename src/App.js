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
import Checkout from "./containers/Payment/Checkout";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import AlertModal from "./components/Utility/AlertModal";

function App() {
  // States
  const [alertModal, setAlertModal] = useState(false);
  const [alertModalMessage, setAlertModalMessage] = useState("");

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
          setAlertModal(true);
          setAlertModalMessage(`${basket.title} added to your Basket`);
        } else {
          updatedBasket.push(basket);
          Cookies.set("userBasket", updatedBasket, { expires: 1 });
          setUserBasket(JSON.stringify(updatedBasket));
          setAlertModal(true);
          setAlertModalMessage(`${basket.title} added to your Basket`);
        }
      } else {
        Cookies.set("userBasket", [basket], { expires: 1 });
        setUserBasket(JSON.stringify([basket]));
        setAlertModal(true);
        setAlertModalMessage(`${basket.title} added to your Basket`);
      }
    } else {
      Cookies.remove("userBasket");
      setUserBasket(null);
    }
  };

  const removeBasketQuantity = (basket) => {
    const updatedBasket = JSON.parse(Cookies.get("userBasket"));
    if (updatedBasket.findIndex((x) => x.title === basket.title) !== -1) {
      if (
        updatedBasket[updatedBasket.findIndex((x) => x.title === basket.title)]
          .quantity > 1
      ) {
        updatedBasket[
          updatedBasket.findIndex((x) => x.title === basket.title)
        ].quantity =
          updatedBasket[
            updatedBasket.findIndex((x) => x.title === basket.title)
          ].quantity - 1;
        Cookies.set("userBasket", updatedBasket, { expires: 1 });
        setUserBasket(JSON.stringify(updatedBasket));
        setAlertModal(true);
        setAlertModalMessage(`Removed 1 x ${basket.title} from your Basket`);
      } else {
        updatedBasket.splice(
          [updatedBasket.findIndex((x) => x.title === basket.title)],
          1
        );
        Cookies.set("userBasket", updatedBasket, { expires: 1 });
        setAlertModal(true);
        setAlertModalMessage(`Removed ${basket.title} from your Basket`);
      }
    }
  };

  const removeBasketItem = (basket) => {
    const updatedBasket = JSON.parse(Cookies.get("userBasket"));
    if (updatedBasket.findIndex((x) => x.title === basket.title) !== -1) {
      if (
        updatedBasket.splice(
          [updatedBasket.findIndex((x) => x.title === basket.title)],
          1
        )
      )
        Cookies.set("userBasket", updatedBasket, { expires: 1 });
      setUserBasket(JSON.stringify(updatedBasket));
      setAlertModal(true);
      setAlertModalMessage(`Removed ${basket.title} from your Basket`);
    }
  };

  return (
    <Router>
      <Header userBasket={userBasket} />
      <AlertModal
        alertModal={alertModal}
        alertModalMessage={alertModalMessage}
        setAlertModal={setAlertModal}
      />
      <Switch>
        <Route path="/checkout">
          <Checkout />
        </Route>
        <Route path="/basket">
          <Basket
            setBasket={setBasket}
            userBasket={userBasket}
            removeBasketQuantity={removeBasketQuantity}
            removeBasketItem={removeBasketItem}
          />
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
