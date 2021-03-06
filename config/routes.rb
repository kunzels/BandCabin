Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: {format: :json} do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create, :show, :index, :update] do
    end
    resources :albums, only: [:create, :index, :show]
  end
  
  root "static_pages#root"

end
