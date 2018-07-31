import React, { Component } from 'react';
import InputTile from '../components/InputTile'

class VenueFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      venue: {},
      venueName: '',
      venueAddress: '',
      venueDescription: '',
      venueOpenTime: '',
      venueCloseTime: '',
      venueUrl: '',
      venuePhotoUrl: '',
      notice: '',
      errors: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value})
  }


  handleSubmit(event) {
    event.preventDefault();
    let formPayload = {
      name: this.state.venueName,
      address: this.state.venueAddress,
      description: this.state.venueDescription,
      open_time: this.state.venueOpenTime,
      close_time: this.state.venueCloseTime,
      venue_url: this.state.venueUrl,
      photo_url: this.state.venuePhotoUrl
    };
    fetch('/api/v1/venues', {
      credentials: 'same-origin',
      method: 'POST',
      body: JSON.stringify(formPayload),
      headers: { 'Content-Type': 'application/json' }
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
          this.setState({errors: body.errors})
        }
        else {
          this.setState({
            venue: body.venue,
            notice: "Venue successfully added",
            errors: []
          })
          this.props.router.push(`/venues/${this.state.venue.id}`)
        }
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  render() {
    return(
      <div>
        <form className="new-venue-form" onSubmit={this.handleSubmit}>
          <InputTile
          label="Venue Name"
          name="venueName"
          type="text"
          handleChange={this.handleChange}
          />
          <InputTile
          label="Venue Address"
          name="venueAddress"
          type="text"
          handleChange={this.handleChange}
          />
          <InputTile
          label="Venue Description"
          name="venueDescription"
          type="text"
          handleChange={this.handleChange}
          />
          <InputTile
          label="Venue Open Time"
          name="venueOpenTime"
          type="text"
          handleChange={this.handleChange}
          />
          <InputTile
          label="Venue Close Time"
          name="venueCloseTime"
          type="text"
          handleChange={this.handleChange}
          />
          <InputTile
          label="Venue Url"
          name="venueUrl"
          type="text"
          handleChange={this.handleChange}
          />
          <InputTile
          label="Venue Photo"
          name="venuePhotoUrl"
          type="text"
          handleChange={this.handleChange}
          />
          <input type="submit" value="Submit"/>
        </form>
        <div className="notice">{this.state.notice}</div>
        <div className="error">{this.state.errors}</div>
      </div>
    )
  }
}

export default VenueFormContainer
