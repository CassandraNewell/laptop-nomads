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
    return(
      <div>
        <div className="review">
          <h5>{this.props.fullname} gave a rating of {this.props.rating}/5</h5>
          <p>{this.props.body}</p>
        </div>
        <div className="votes">
          <p> This review has {this.props.upvotes_count} upvotes </p>
          <p> This review has {this.props.downvotes_count} downvotes </p>
          <p> You voted <b>{this.props.user_vote.vote}</b></p>
          <span className = "buttons">
            <button className="button" name="upvote" onClick={this.onClick}>
              Upvote
            </button>
            <button className="button" name="downvote" onClick={this.onClick}>
              Downvote
            </button>
          </span>
        </div>
      </div>
    )
  }
}

export default ReviewTile;
