import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Welcome from './components/Welcome'
import Nav from './components/Nav'
import Count from './components/Count'
import Modify from './components/Modify'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Nav/>
          <Switch>
            <Route exact path="/" component={Welcome} />
            <Route exact path="/count" component={Count} />
            <Route exact path="/modify" component={Modify} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
