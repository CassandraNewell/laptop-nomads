import React, { Component } from 'react';

class ReviewTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(event) {
    let new_vote
    let old_vote = this.props.user_vote.vote

    if (old_vote === event.target.name) {
      new_vote = "neutral"
    } else {
      new_vote = event.target.name
    }

    let payload = {
      review_vote: {
        vote: new_vote,
        id: this.props.user_vote.id
      }
    }

    this.props.onVoteClick(payload)
  }

  render() {
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
          <p> {this.props.upvotes} upvotes &#x2022; {this.props.downvotes} downvotes</p>
          <p> You voted "hell yah"</p>
          <span className = "buttons">
            <button className="button" name="upvote">
              <i className="far fa-thumbs-up" />
            </button>
            <button className="button" name="downvote">
              <i className="far fa-thumbs-down" />
            </button>
          </span>
        </div>
      </div>
    )
  }
}

export default ReviewTile;
