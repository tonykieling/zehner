import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import HeaderBar from "./components/HeaderBar.js";
import HeaderMenu from "./components/HeaderMenu.js";
import Home from "./components/AppBody.js";
import About from "./components/About.js";
import Footer from "./components/Footer";
import SearchResult from "./components/SearchResult.js";

function App() {

  return (
    <Router>
      <HeaderBar />
      <HeaderMenu />
      <Route exact path = "/">
        <Home />
      </Route>
      <Route exact path = "/about">
        <About />
      </Route>
      <Route exact path = "/search">
        <SearchResult />
      </Route>
      <Footer />
    </Router>
  );
}

export default App;
