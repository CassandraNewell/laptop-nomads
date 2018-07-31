class Api::V1::VenuesController < ApiController

  def index
    render json: Venue.all
  end

  def show
    render json: Venue.find(params[:id])
  end

  def new; end

  def create
    venue = Venue.new(
      name: params[:name],
      address: params[:address],
      description: params[:description],
      open_time: params[:open_time],
      close_time: params[:close_time],
      venue_url: params[:venue_url],
      photo_url: params[:photo_url]
    )
    if venue.save
      render json: { venue: venue, status_messages: "Succes!"}
    else
      render json: { venue: {}, status_messages: venue.errors.full_messages.join(', ') }
    end
  end
end
