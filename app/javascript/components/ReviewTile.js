import React, { Component } from 'react';

class ReviewTile extends Component {
  constructor(props){
    super(props)
    this.state = {
    }
  }

  render(){
    let numbers = [1, 2, 3, 4, 5]
    let stars = numbers.map((number) => {
      if (number > this.props.rating) {
        return(
          <i className="far fa-star"></i>
        )
      } else {
        return(
          <i className="fas fa-star"></i>
        )
      }
    })

    return(
      <div className="review grid-x">
        <div className="cell small-8">
          <h4>{this.props.fullname} says</h4>
          <p>{this.props.body}</p>
        </div>
        <div className="cell small-4">
          {stars}
        </div>
      </div>
    )
  }
}


export default ReviewTile;
