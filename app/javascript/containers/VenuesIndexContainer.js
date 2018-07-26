import React, { Component } from 'react';
import VenueTile from '../components/VenueTile';

class VenuesIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venues_array: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/venues`)
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        venues_array: body.venues
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render(){

    let venues = this.state.venues_array.map((venue) =>{
      return(
        <div>
          <VenueTile
            key = {venue.id}
            id = {venue.id}
            name = {venue.name}
            photo_url = {venue.photo_url}
          />
        </div>
      )
    })

    return(
      <div>
        <h1> Venues </h1>
        {venues}
      </div>
    )
  }
}

export default VenuesIndexContainer;
