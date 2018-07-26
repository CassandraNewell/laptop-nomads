import React, { Component } from 'react';
import InputTile from '../components/InputTile'
class ReviewFormContainer extends Component {
  constructor(props){
    super(props);
    this.state = {
      body: "",
      rating: ""
    }
  }

  // handleChange(event) {
  //   this.setState({
  //     [event.target.name]: event.target.value
  //   })
  // }

  render(){
    return(
      <div>
        <form onSubmit={this.props.onSubmit} >
          <InputTile
            name="body"
            label="Write your review:"
            type="text"
            value={this.state.body.value}
            handleChange={this.props.onChange}
          />
          <InputTile
            name="rating"
            label="Rating (1-5)"
            type="text"
            value={this.state.rating.value}
            handleChange={this.props.onChange}
          />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

export default ReviewFormContainer;
