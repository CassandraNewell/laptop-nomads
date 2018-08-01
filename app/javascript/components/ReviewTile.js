import React from 'react';

const ReviewTile = (props) => {
  return(
    <div className="review">
      <h5>{props.fullname} gave a rating of {props.rating}/5</h5>
      <p>{props.body}</p>
      <span className="fa fa-star"></span>
      <p> This review has {props.votes} votes </p>
    </div>
  )
}

export default ReviewTile;
