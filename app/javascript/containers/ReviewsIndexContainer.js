import React, { Component } from 'react';
import ReviewTile from '../components/ReviewTile'

class ReviewsIndexContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reviews_array: []
    }
  }

  componentDidMount() {
    fetch('/api/v1/reviews')
    .then(response => {
      if (response.ok) {
        return response;
      } else {
        let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
        throw(error);
      }
    })
    .then(response => response.json())
    .then(body => {
      this.setState({
        reviews_array: body.reviews
      })
    })
    .catch(error => console.error(`Error in fetch: ${error.message}`));
  }


  render() {

    let reviews = this.state.reviews_array.map(review => {
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
        <h1>Reviews Index Container</h1>
        {reviews}
      </div>
    )
  }
}

export default ReviewsIndexContainer;
