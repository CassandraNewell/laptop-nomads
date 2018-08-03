class Api::V1::ReviewsController < ApiController
  # serialization_scope :current_user

  def index
    reviews = Review.where(venue_id: params[:venue_id])
    render json: reviews
  end

  def create
    venue = Venue.find(params[:venue_id])
    review = Review.new(review_data)
    review.venue = venue
    review.user = current_user

    if review.save
      render json: review
    else
      render json: { errors: review.errors.full_messages }
    end
  end

  def update
    review = Review.find(params[:id])
  end

  private
  def review_data
    params.require(:review).permit(:body, :rating)
  end
end
