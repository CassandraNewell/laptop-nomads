class Api::V1::ReviewVotesController < ApiController
  def update
    review_vote = ReviewVote.find(params[:id])

    if review_vote.update(review_vote_params)
      binding.pry
      render json: review_vote
    else
      payload = { errors: review_vote.errors.full_messages }
      render json: payload
    end
  end

  private
  def review_vote_params
    params.require(:review_vote).permit(:vote, :user_id, :review_id)
  end
end
