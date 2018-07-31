import React from 'react';

const ReviewTile = (props) => {
  return(
    // <div className="grid-x">
    <div className="review cell small-6">
      <h5>{props.fullname} gave a rating of {props.rating}/5</h5>
      <p>{props.body}</p>
      <span className="fa fa-star"></span>
    </div>
  // </div>
  )
}


export default ReviewTile;
