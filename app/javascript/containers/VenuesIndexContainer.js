import React, { Component } from 'react';
import VenueTile from '../components/VenueTile';
import VenueFormContainer from './VenueFormContainer'
import { Link } from 'react-router'

class VenuesIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venues_array: [],
      message: "hi cat",
      admin: false
    }
  }

  componentDidMount(){
    fetch(`/api/v1/venues`, {
      credentials: 'same-origin'
    })
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
      debugger
      this.setState({
        venues_array: body.venues,
        admin: body.admin
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let admin_powers;
    let venues = this.state.venues_array.map((venue) =>{
      if(this.state.admin){
        admin_powers = <Link to={`venues/${venue.id}/edit`}>Edit</Link>
      }

      return(
        <div>
          <VenueTile
            key = {venue.id}
            id = {venue.id}
            name = {venue.name}
            photo_url = {venue.photo_url}
          />
          {admin_powers}
        </div>
      )
    })

    return(
      <div>
        {venues}
        <Link to={'/venues/new'}>Add a Venue</Link>
      </div>
    )
  }
}

export default VenuesIndexContainer;
