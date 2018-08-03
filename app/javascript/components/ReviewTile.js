import React, { Component } from 'react';

class ReviewTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(event) {
    let payload
    let request_params
    let new_vote = event.target.name

    if (this.props.user_vote) {
      let old_vote = this.props.user_vote.vote

      if (old_vote === new_vote) new_vote = "neutral"

      payload = {
        review_vote: {
          vote: new_vote,
          id: this.props.user_vote.id
        }
      }

      request_params = {
        method: "PATCH",
        endpoint: `/api/v1/review_votes/${this.props.user_vote.id}`
      }

      this.props.onVoteClick(payload, request_params)
    } else {
      payload = {
        review_vote: {
          vote: new_vote,
          review_id: this.props.id
        }
      }

      request_params = {
        method: "POST",
        endpoint: `/api/v1/review_votes`
      }

      this.props.onVoteClick(payload, request_params)
    }
  }

  render() {
    let numbers = [1, 2, 3, 4, 5]
    let stars = numbers.map((number) => {
      if (number > this.props.rating) {
        return(
          <i key={`empty${number}`} className="far fa-star"></i>
        )
      } else {
        return(
          <i key={`full${number}`} className="fas fa-star"></i>
        )
      }
    })

    return(
      <div className="review grid-x">
        <div className="cell small-8">
          <div className="grid-x">
            <div className="cell small-8">
              <h4>{this.props.fullname} says</h4>
            </div>
            <div className="cell small-4">
              {stars}
            </div>
          </div>
          <p className="review-body">{this.props.body}</p>
        </div>
        <div className="cell small-4">
          <p> {this.props.upvotes_count} upvotes &#x2022; {this.props.downvotes_count} downvotes</p>
          <div className = "buttons">
            <button className="upvote_button" name="upvote" onClick={this.onClick}>
              Upvote
            </button>
            <button className="downvote_button" name="downvote" onClick={this.onClick}>
              Downvote
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default ReviewTile;
