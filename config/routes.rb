Rails.application.routes.draw do
  namespace :api do
    get 'greet', to: 'api#index'
  end
end
