import React, { Component } from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import VenuesIndexContainer from './containers/VenuesIndexContainer';
import ReviewsIndexContainer from './containers/ReviewsIndexContainer';

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
        </Route>

        <Route path='/reviews' component = {ReviewsIndexContainer} />
        
      </Router>
    )
  }
}

export default App;
