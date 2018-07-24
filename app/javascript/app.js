import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import VenuesIndexContainer from './containers/VenuesIndexContainer';
import VenueShowContainer from './containers/VenueShowContainer';

class App extends Component {
  constructor(props){
    super(props)
    this.state = {

    }
  }

  render() {
    return(
      <Router history = {browserHistory}>
        <Route path='/'>
          <IndexRoute component={VenuesIndexContainer} />
          <Route path='/venues' component = {VenuesIndexContainer} />
          <Route path='/venues/:id' component = {VenueShowContainer} />
        </Route>
      </Router>
    )
  }
}

export default App;
