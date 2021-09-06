import "./App.css";

// Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Cookies from "js-cookie";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

// Pages
import Home from "./containers/Home";
import Contact from "./containers/Contact";
import Shop from "./containers/Shop";
import Login from "./containers/Auth/Login";
import Signup from "./containers/Auth/Signup";
import Basket from "./containers/Basket";
import Payment from "./containers/Payment/Payment";
import Account from "./containers/Auth/Account";
import Success from "./containers/Payment/Success";
import Trade from "./containers/Trade";
import About from "./containers/About";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import AlertModal from "./components/Utility/AlertModal";

function App() {
  // States
  const [alertModal, setAlertModal] = useState(false);
  const [alertModalMessage, setAlertModalMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [userToken, setUserToken] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userType, setUserType] = useState(Cookies.get("type") || null);

  // Scroll Animation function usin AOS package
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

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

  // Function for creating or deleting Cookies and State Token and Id:
  const setTokenAndId = async (token, id) => {
    if (id) {
      await Cookies.set("userId", id);
    } else {
      await Cookies.remove("userId");
    }
    if (token) {
      await Cookies.set("userToken", token);
    } else {
      await Cookies.remove("userToken");
    }

    setUserId(id);
    setUserToken(token);
  };

  // Function for creating or deleting Cookies and State Customer Type:
  const setType = async (type) => {
    if (type) {
      await Cookies.set("type", type);
    } else {
      await Cookies.remove("type");
    }
    setUserType(type);
  };

  // useEffect for, on app loading, look for cookie token, call the function and stop isLoading
  useEffect(() => {
    const bootstrapAsync = async () => {
      const userToken = await Cookies.get("userToken");
      const userId = await Cookies.get("userId");
      setUserId(userId);
      setUserToken(userToken);

      setIsLoading(false);
    };

    bootstrapAsync();
  }, []);

  return isLoading ? null : (
    <Router>
      <Header
        userBasket={userBasket}
        userToken={userToken}
        setTokenAndId={setTokenAndId}
      />
      <AlertModal
        alertModal={alertModal}
        alertModalMessage={alertModalMessage}
        setAlertModal={setAlertModal}
      />
      <Switch>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/payment">
          <Payment
            userBasket={userBasket}
            setBasket={setBasket}
            userId={userId}
            userType={userType}
          />
        </Route>
        <Route path="/basket">
          <Basket
            setBasket={setBasket}
            userBasket={userBasket}
            removeBasketQuantity={removeBasketQuantity}
            removeBasketItem={removeBasketItem}
            userId={userId}
            userType={userType}
          />
        </Route>
        <Route path="/account">
          <Account setTokenAndId={setTokenAndId} userId={userId} />
        </Route>
        <Route path="/signup">
          <Signup setTokenAndId={setTokenAndId} setType={setType} />
        </Route>
        <Route path="/login">
          <Login setTokenAndId={setTokenAndId} setType={setType} />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/trade">
          <Trade />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/shop">
          <Shop
            setBasket={setBasket}
            userBasket={userBasket}
            userType={userType}
          />
        </Route>
        <Route path="/">
          <Home
            setBasket={setBasket}
            userBasket={userBasket}
            userType={userType}
          />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
