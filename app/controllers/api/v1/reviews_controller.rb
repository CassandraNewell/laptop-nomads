class Api::V1::ReviewsController < ApiController
  def index
    reviews = Review.where(venue_id: params[:venue_id])
    render json: reviews
  end

  def create
    review_json = JSON.parse(request.body.read)
    venue = Venue.find(params[:venue_id])
    review = Review.new(review_json)
    review.venue = venue
    review.user = current_user

    if review.save!
      serialized_review = ActiveModel::Serializer::ArraySerializer.new([review], each_serializer: ::ReviewSerializer)
      payload = {
        review: serialized_review,
        status_messages: ["Review successfully added"]
      }
      render json: payload
    else
      payload = {
        review: review,
        status_messages: review.errors.full_messages
      }
      render json: payload
    end
  end
end
