class Api::V1::ReviewsController < ApplicationController
  def index
    reviews = Review.where(venue_id: params[:venue_id])
    render json: reviews
  end

  def create
    venue = Venue.find(params[:venue_id])
    review = Review.new({body: params[:review]["body"], rating: params[:review]["rating"]})
    review.venue = venue

    binding.pry

    if review.save
      flash[:notice] = "Your review was successfully added!"
    else
      flash[:alert] = "Your review was not saved due to errors. Please try again."
    end

    render json: review
  end
end
