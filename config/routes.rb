Rails.application.routes.draw do
  root 'venues#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :venues, only: [:index, :show, :new, :create, :edit] do
    resources :reviews, only: [:index, :create]
  end

  namespace :api do
    namespace :v1 do
      resources :venues, only: [:index, :show, :new, :create, :update, :destroy] do
        resources :reviews, only: [:index, :create, :update]
      end
      resources :review_votes, only: [:update, :create]
    end
  end

end
