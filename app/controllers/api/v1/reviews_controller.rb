class Api::V1::ReviewsController < ApplicationController
  def index
    reviews = Review.where(venue_id: params[:venue_id])
    render json: reviews
  end
end
