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
      notice: "",
      errors: []
    }
    this.onSubmit = this.onSubmit.bind(this)
    this.onVoteClick = this.onVoteClick.bind(this)
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
      if (body.errors) {
        this.setState({
          notice: "",
          errors: body.errors
        })
      }
      else {
        this.setState({
          reviews: this.state.reviews.concat(body.review),
          notice: "Review successfully added",
          errors: []
        })
      }
    })
    .catch(error => {
      console.error(`Error in fetch: ${error.message}`)
    });
  }

  onVoteClick(payload) {
    fetch(`/api/v1/review_votes/${payload.vote.id}`, {
      credentials: 'same-origin',
      method: 'PATCH',
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
      console.log(body)
      // this.setState({
      //   reviews: body.reviews
      // })
    })
    .catch(error => {
      console.error(`Error in fetch: ${error.message}`)
    });
  }

  render(){
    let venue = this.state.venue
    let notice
    let errors

    if (this.state.notice !== "") {
      notice = <div className="notice">{this.state.notice}</div>
    }

    if (this.state.errors !== []) {
      errors = <div className="error">{this.state.errors}</div>
    }

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
          reviews = {this.state.reviews}
          onVoteClick = {this.onVoteClick}
        />
        {notice}
        {errors}
        <ReviewFormContainer
          venue_id = {venue.id}
          onSubmit = {this.onSubmit}
        />
      </div>
    )
  }
}

export default VenueShowContainer
