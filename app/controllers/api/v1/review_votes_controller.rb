class Api::V1::ReviewVotesController < ApiController
  def update
    review_vote = ReviewVote.find(params[:id])
    venue = review_vote.review.venue

    if review_vote.update(review_vote_params)
      reviews = Review.where(venue: venue)
      render json: reviews
    else
      payload = { errors: review_vote.errors.full_messages }
      render json: payload
    end
  end

  def create
    review_vote = ReviewVote.new(
      user: current_user,
      vote: review_vote_params[:vote],
      review_id: review_vote_params[:review_id]
    )
    venue = review_vote.review.venue

    if review_vote.save
      reviews = Review.where(venue: venue)
      render json: reviews
    else
      payload = { errors: review_vote.errors.full_messages }
      render json: payload
    end
  end

  private
  def review_vote_params
    params.require(:review_vote).permit(:vote, :id, :review_id)
  end
end
