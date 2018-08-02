import React, { Component } from 'react';
import ReviewTile from '../components/ReviewTile'

class ReviewsIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews: this.props.reviews
    }
  }
  
  componentDidMount(){
    this.setState({
      reviews: this.props.reviews
    })
  }

  render(){
    console.log(this.state.reviews)
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
          onVoteClick={this.props.onVoteClick}
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
