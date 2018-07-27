import React, { Component } from 'react';
import VenueDetailTile from '../components/VenueDetailTile';
import ReviewsIndexContainer from './ReviewsIndexContainer';
import ReviewFormContainer from './ReviewFormContainer';

class VenueShowContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      venue: {},
      reviews: [],
      status_messages: []
    }
    this.onSubmit = this.onSubmit.bind(this)
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
        venue: body.venue,
        reviews: body.venue.reviews
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  onSubmit(payload) {
    fetch(`/api/v1/venues/${this.props.params.id}/reviews`, {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(payload),
      headers: {'Content-Type': 'application/json'}
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
      if (body.review.id) {
        this.setState({ reviews: this.state.reviews.concat(body.review[0]) })
      }
      this.setState({
        status_messages: body.status_messages
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render(){
    let venue = this.state.venue
    let reviews = this.state.reviews

    return(
      <div className="row column">
        <VenueDetailTile
          name = {venue.name}
          address = {venue.address}
          description = {venue.description}
          open_time = {venue.open_time}
          close_time = {venue.close_time}
          venue_url = {venue.venue_url}
          photo_url = {venue.photo_url}
        />
        <ReviewsIndexContainer
          reviews = {reviews}
        />
        <div className="notice">{this.state.status_messages}</div>
        <ReviewFormContainer
          venue_id = {venue.id}
          onSubmit = {this.onSubmit}
        />
      </div>
    )
  }
}

export default VenueShowContainer
