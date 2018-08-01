import React, { Component } from 'react';
import ReviewTile from '../components/ReviewTile'

class ReviewsIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
  }

  render(){
    let reviews = this.props.reviews.map(review => {
      return(
        <ReviewTile
          key={review.id}
          id={review.id}
          fullname={review.fullname}
          body={review.body}
          rating={review.rating}
          upvotes_count={review.upvotes_count}
          downvotes_count={review.downvotes_count}
          user_vote={review.user_vote}
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
}

export default ReviewsIndexContainer;
