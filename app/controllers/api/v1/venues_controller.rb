class Api::V1::VenuesController < ApiController

  def index
    render json: Venue.all
  end

  def show
    render json: Venue.find(params[:id])
  end

  def new; end

  def create
    venue = Venue.new(venue_params)
    if venue.save
      render json: venue
    else
      payload = { errors: venue.errors.full_messages }
      render json: payload
    end
  end

  private
  def venue_params
    params.require(:venue).permit(:name, :address, :description, :open_time, :close_time, :venue_url, :photo_url)
  end
end
