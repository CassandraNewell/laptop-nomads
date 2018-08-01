class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery unless: -> { request.format.json? }
  before_action :configure_permitted_parameters, if: :devise_controller?
  before_action :authorize_user, only: [:edit, :update, :destroy]

 protected

 def configure_permitted_parameters
   devise_parameter_sanitizer.permit(:sign_up, keys: [:first_name, :last_name, :email, :profile_photo, :bio, :role])
 end

 def authorize_user
   if !user_signed_in? || !current_user.admin?
     raise ActionController::RoutingError.new("Not Found")
   end
 end
end
