import React, { Component } from 'react';
import InputTile from '../components/InputTile'
class ReviewFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      review: ""
    }
  }

  render(){

    return(
      <InputTile
        name="body"
        type="text"
        value={this.state.props.value}
        onChange={this.props.handleChange}
      />
      <InputTile
        name="rating"
        type="text"
        value={this.state.props.value}
        onChange={this.props.handleChange}
      />
      <input type="submit"/>
    )
  }
}

export default ReviewFormContainer;
