import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { updateCounter } from './actions'

import Welcome from './components/Welcome'
import Nav from './components/Nav'
import Count from './components/Count'
import Modify from './components/Modify'
import Hello from './components/Hello'

class App extends Component {

  // updateCounter = (counter) => {    
  //   this.props.updateCounter(counter);
  // }

  render() {
    return (
      <Router>
        <Route exact path="/" component={Welcome} />
        <Route exact path="/Hello" component={Hello} />
      </Router>
    );
  }
}
      // <div className='App'></div>
      //   <div>
      //   </div>
          // <Switch>
          // </Switch>
          // <Nav/>
            // <Route exact path="/count" component={Count} />
            // <Route exact path="/modify" component={Modify} />

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter
//   }
// }

// export default connect(mapStateToProps, {
//   updateCounter
// })(App);

export default App