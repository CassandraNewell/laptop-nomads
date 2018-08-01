class ApiController < ApplicationController
  skip_before_action :verify_authenticity_token
  before_action :authenticate_user!, except: [:index,:show]
  before_action :authorize_user, only: [:edit, :update, :destroy]
end
