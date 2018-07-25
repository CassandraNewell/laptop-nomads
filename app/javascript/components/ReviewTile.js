import React from 'react';

const ReviewTile = (props) => {

  return(
    <div>
      <h5>{props.fullname} gave a rating of {props.rating}/5</h5>
      <p>{props.body}</p>
      <span className="fa fa-star"></span>
    </div>
  )
}


export default ReviewTile;
