import React, { Component } from 'react';
import InputTile from '../components/InputTile';
import Dropzone from 'react-dropzone';

class VenueFormContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      venue: {},

      notice: '',
      errors: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onDrop = this.onDrop.bind(this);
  }

  // componentDidMount() {
  //   fetch(`/api/v1/venues/${this.props.params.id}`, {
  //     credentials: 'same-origin'
  //   })
  //   .then(response => {
  //     if (response.ok) {
  //       return response;
  //     } else {
  //       let errorMessage = `${response.status} (${response.statusText})`,
  //           error = new Error(errorMessage);
  //       throw(error);
  //     }
  //   })
  //   .then(response => response.json())
  //   .then(body => {
  //     this.setState({ venue: body.venue,
  //                     status_messages: body.status_messages,
  //                     venueName: body.venue.name,
  //                     venueAddress: body.venue.address,
  //                     venueDescription: body.venue.description,
  //                     venueOpenTime: body.venue.open_time,
  //                     venueCloseTime: body.venue.close_time,
  //                     venueUrl: body.venue.venue_url,
  //                     status_messages: ''
  //                   });
  //   })
  //   .catch(error => console.error(`Error in venue form fetch: ${error.message}`));
  // }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();

    let formPayload = new FormData();
    formPayload.append("name", this.state.venueName);
    formPayload.append("address", this.state.venueAddress);
    formPayload.append("description", this.state.venueDescription);
    formPayload.append("open_time", this.state.venueOpenTime);
    formPayload.append("close_time", this.state.venueCloseTime);
    formPayload.append("venue_url", this.state.venueUrl);

    if(this.state.venuePhotoUrl){
      formPayload.append("photo_url", this.state.venuePhotoUrl[0]);
    }

    let url;
    let method;
    if(this.props.route.path == "/venues/:id/edit") {
      url = `/api/v1/venues/${this.props.routeParams.id}`;
      method = 'PATCH'
    } else {
      url = '/api/v1/venues';
      method = 'POST'
    }
    fetch(url, {
      credentials: 'same-origin',
      method: method,
      body: formPayload
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
          errors: [],

        })
        this.props.router.push(`/venues/${this.state.venue.id}`)
      }
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }

  onDrop(file) {
    if(file.length == 1) {
      this.setState({ venuePhotoUrl: file })
    } else {
      this.setState({ message: "You can only upload one photo per venue."})
    }
  }

  render() {
    let errors;
    let dropped_files;
    let venue = this.state.venue

    if (this.state.errors !== []) {
      errors = <div className="error">{this.state.errors}</div>
    }
    if(this.state.venuePhotoUrl) {
      this.state.venuePhotoUrl.map(file => {
        dropped_files = <li key={file.name}>{file.name} - {file.size} bytes</li>
      })
    }

    return(
      <div>
        <form className="new-venue-form" onSubmit={this.handleSubmit}>
          <InputTile
          label="Venue Name"
          name="venueName"
          type="text"
          value={venue.name}
          handleChange={this.handleChange}
          />
          <InputTile
          label="Venue Address"
          name="venueAddress"
          type="text"
          value={venue.address}
          handleChange={this.handleChange}
          />
          <InputTile
          label="Venue Description"
          name="venueDescription"
          type="text"
          value={venue.description}
          handleChange={this.handleChange}
          />
          <InputTile
          label="Venue Open Time"
          name="venueOpenTime"
          type="text"
          value={venue.open_time}
          handleChange={this.handleChange}
          />
          <InputTile
          label="Venue Close Time"
          name="venueCloseTime"
          type="text"
          value={venue.close_time}
          handleChange={this.handleChange}
          />
          <InputTile
          label="Venue Url"
          name="venueUrl"
          type="text"
          value={venue.venue_url}
          handleChange={this.handleChange}
          />
          <section>
            <div className="dropzone">
              <Dropzone onDrop={this.onDrop}>
                <p>Drop a photo of the venue here, or click to select the file to upload.</p>
              </Dropzone>
            </div>
            <aside>
              <h5>Dropped file</h5>
              <ul>
                {dropped_files}
              </ul>
            </aside>
          </section>
          {errors}

          <input type="submit" value="Submit"/>

        </form>
      </div>
    )
  }
}

export default VenueFormContainer
