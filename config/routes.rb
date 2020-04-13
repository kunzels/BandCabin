Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index] do
      resources :albums, only: [:create]
    end
    resources :albums, only: [:index, :show]
  end
  
  root "static_pages#root"

end
