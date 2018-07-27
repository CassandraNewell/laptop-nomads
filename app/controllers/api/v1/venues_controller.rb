class Api::V1::VenuesController < ApiController
  before_action :authenticate_user!, except: [:index, :show]

  def index
    render json: Venue.all
  end

  def show
    render json: Venue.find(params[:id])
  end
end
