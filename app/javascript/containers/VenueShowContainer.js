import React, { Component } from 'react';
import VenueDetailTile from '../components/VenueDetailTile'

class VenueShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venue: []
    }
  }

  componentDidMount(){
    fetch(`/api/v1/venues/${this.props.params.id}`)
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
        venue: body.venue
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let venue = this.state.venue
    return(
      <div>
        <VenueDetailTile
          name = {venue.name}
          address = {venue.address}
          description = {venue.description}
          open_time = {venue.open_time}
          close_time = {venue.close_time}
          venue_url = {venue.venue_url}
          photo_url = {venue.photo_url}
        />
      </div>
    )
  }
}

export default VenueShowContainer
