class Api::V1::ReviewsController < ApiController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    reviews = Review.where(venue_id: params[:venue_id])
    render json: reviews
  end

  def create
    review_json = JSON.parse(request.body.read)
    venue = Venue.find(params[:venue_id])
    review = Review.new(review_json)
    review.venue = venue
    review.user = User.first

    if review.save
      flash[:notice] = "Your review was successfully added!"
      render json: review
    else
      flash[:alert] = "Your review was not saved due to errors. Please try again."
      render json: { error: review.errors.full_messages }, status: :unprocessable_entity
    end
  end
end
