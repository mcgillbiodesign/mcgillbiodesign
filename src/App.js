import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "./pages/Home";
import { Contact } from "./pages/Contact";
import { Projects } from "./pages/Projects";
import { Sponsors } from "./pages/Sponsors";
import { Team } from "./pages/Team";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation id="header" />
        <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/projects" component={Projects} />
            <Route exact path="/sponsors" component={Sponsors} />
            <Route exact path="/team" component={Team} />
            <Route component={Home} />
          </Switch>
        </BrowserRouter>
        <Footer id="footer"/>
      </React.Fragment>
    );
  }
}

export default App;
