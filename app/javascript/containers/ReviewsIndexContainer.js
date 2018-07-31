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
    <div className="grid-container bdgreen nomargin">
      <div className="grid-y">
        <div className="cell small-4 text-center">
          <h2>Reviews</h2>
        </div>
        <div className="cell small-8 bdred">
          {reviews}
        </div>
      </div>
    </div>
  )
}

export default ReviewsIndexContainer;
