class ApiController < ApplicationController
  skip_before_action :verify_authenticity_token
  # protect_from_forgery unless: -> { request.format.json? }
  before_action :authenticate_user!, except: [:index, :show]
end
