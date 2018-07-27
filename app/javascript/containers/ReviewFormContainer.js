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
      <div>
        <form onSubmit={this.passPayload} >
          <InputTile
            name="body"
            label="Write your review:"
            type="text"
            value={this.state.body}
            handleChange={this.handleChange}
          />
          <InputTile
            name="rating"
            label="Rating (1-5)"
            type="text"
            value={this.state.rating}
            handleChange={this.handleChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default ReviewFormContainer;
