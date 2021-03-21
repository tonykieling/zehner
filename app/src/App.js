/**
  This is the root component, responsable to routing
*/


import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

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
      {/* back bar */}
      <HeaderBar />

      {/* HeaderMenu component */}
      <HeaderMenu />
      <Switch>

        {/* Home page Route */}
        <Route exact path = "/">
          <Home />
        </Route>

        {/* About page Route */}
        <Route exact path = "/about">
          <About />
        </Route>

        {/* Search page Route */}
        <Route 
          exact
          path = "/search"
          component = { SearchResult }
        />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
