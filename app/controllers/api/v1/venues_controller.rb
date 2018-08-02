class Api::V1::VenuesController < ApiController
  def index
    if current_user == nil || current_user.role == "member"
      render json: Venue.all
    elsif current_user.admin?
      payload = {
        venues: Venue.all,
        admin: true
      }
      render json: payload
    end
  end

  def show
    venue = Venue.find(params[:id])
    render json: venue
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

  def update
    venue = Venue.find(params[:id])
    if venue.update(venue_params)
      render json: venue
    else
      payload = { errors: venue.errors.full_messages }
      render json: payload
    end
  end

  def destroy
    venue = Venue.find(params[:id])
    venue.destroy

    if current_user.admin?
      payload = {
        venues: Venue.all,
        admin: true
      }
      render json: payload
    else
      render json: Venue.all
    end
  end

private

  def venue_params
    params.permit(:name, :address, :description, :open_time, :close_time, :venue_url, :photo_url)
  end
end
