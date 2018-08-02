import React, { Component } from 'react';
import InputTile from '../components/InputTile'

class ReviewFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      rating: ""
    }
  this.handleChange = this.handleChange.bind(this)
  this.passPayload = this.passPayload.bind(this)
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  passPayload(event) {
    event.preventDefault()
    let payload = {
        body: this.state.body,
        rating: this.state.rating,
    }
    this.props.onSubmit(payload)
    this.setState({
      body: "",
      rating: ""
    })
  }

  render(){
    return(
      <div className="row column">
        <h2>New Review</h2>
        <form onSubmit={this.passPayload} >
          <div className="row">
            <div className="column small-8">
              <InputTile
                name="body"
                label="Write your review:"
                type="text"
                value={this.state.body}
                handleChange={this.handleChange}
                />
            </div>
            <div className="column small-4">
              <InputTile
                name="rating"
                label="Rating (1-5)"
                type="text"
                value={this.state.rating}
                handleChange={this.handleChange}
                />
            </div>
          </div>
          <div>
            <input className="column submit-button button" type="submit" />
          </div>
        </form>
      </div>
    )
  }
}

export default ReviewFormContainer;
