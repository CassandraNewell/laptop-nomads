class Api::V1::ReviewVotesController < ApiController
  def update
    binding.pry
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

  private
  def review_vote_params
    params.require(:review_vote).permit(:vote, :id)
  end
end
