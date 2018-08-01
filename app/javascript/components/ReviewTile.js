import React, { Component } from 'react';

class ReviewTile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      vote: this.props.user_vote
    }
    this.onClick = this.onClick.bind(this)
  }

  onClick() {
    console.log("you clicked")
  }

  render() {
    let upbutton = <i className="far fa-thumbs-up"></i>
    let downbutton = <i className="far fa-thumbs-down"></i>
    let starArray = [1, 2, 3, 4, 5]
    let emptyStar = <i className="far fa-star"></i>
    let fullStar = <i className="fa fa-star"></i>
    let stars

    if (this.props.user_vote === "upvote") {
      upbutton = <i className="fas fa-thumbs-up"></i>
    } else if (this.props.user_vote === "downvote") {
      downbutton = <i className="fas fa-thumbs-down"></i>
    }

    // for (let i = 1; i <= 5; i++) {
    //   if (i < this.props.rating) {
    //     stars += fullStar
    //   } else {
    //     stars += emptyStar
    //   }
    // }

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
          <p> You voted <b>{this.props.user_vote}</b></p>
          <span className = "buttons">
            <button className="">
              {upbutton}
            </button>
            <button className="">
              {downbutton}
            </button>
          </span>
        </div>
      </div>
    )
  }
}

export default ReviewTile;
