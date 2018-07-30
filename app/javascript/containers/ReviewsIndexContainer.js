import React, { Component } from 'react';
import ReviewTile from '../components/ReviewTile'

const ReviewsIndexContainer = (props) => {
  let reviews = props.reviews.map(review => {
    return(
      <ReviewTile
        key={review.id}
        id={review.id}
        fullname={review.fullname}
        body={review.body}
        rating={review.rating}
      />
    )
  })

  return(
    <div>
      <h2>Reviews</h2>
      {reviews}
    </div>
  )
}

export default ReviewsIndexContainer;
