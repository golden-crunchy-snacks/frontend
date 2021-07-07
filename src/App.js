import "./App.css";

// Packages
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import Home from "./containers/Home";
import About from "./containers/About";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
