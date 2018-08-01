import React, { Component } from 'react';

class ReviewTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vote: this.props.user_vote
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick(event) {
    event.preventDefault()
    debugger
    // let newVote =
    let payload = {
      review_id: this.props.id,
      vote: this.state.vote
    }
    this.props.onVoteClick(payload)
  }

  render() {
    let upbutton = <i className="button far fa-thumbs-up"></i>
    let downbutton = <i className="button far fa-thumbs-down"></i>
    let starArray = [1, 2, 3, 4, 5]
    let emptyStar = <i className="far fa-star"></i>
    let fullStar = <i className="fa fa-star"></i>
    let stars

    if (this.props.user_vote.vote === "upvote") {
      upbutton = <i className="button fas fa-thumbs-up"></i>
    } else if (this.props.user_vote.vote === "downvote") {
      downbutton = <i className="button fas fa-thumbs-down"></i>
    }

    return(
      <div>
        <div className="review">
          <h5>{this.props.fullname} gave a rating of {this.props.rating}/5</h5>
          <p>{this.props.body}</p>
          {stars}
          <span className="fa fa-star"></span>
        </div>
        <div className="votes">
          <p> This review has {this.props.upvotes_count} upvotes </p>
          <p> This review has {this.props.downvotes_count} downvotes </p>
          <p> You voted <b>{this.props.user_vote.vote}</b></p>
          <span className = "buttons">
            <button className="" onClick={this.onClick} name="upvote">
              {upbutton}
            </button>
            <button className="" onClick={this.onClick} name="downvote">
              {downbutton}
            </button>
          </span>
        </div>
      </div>
    )
  }
}

export default ReviewTile;
