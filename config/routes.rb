Rails.application.routes.draw do
  root 'venues#index'
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  resources :venues, only: [:index, :show] do
    resources :reviews, only: [:index]
  end

  namespace :api do
    namespace :v1 do
      resources :venues, only: [:index, :show] do
        resources :reviews, only: [:index]
      end
    end
  end

end
