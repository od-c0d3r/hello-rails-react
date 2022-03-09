Rails.application.routes.draw do
  namespace :api, defaults: { format: 'json' } do
    get 'greeting', to: 'api#index'
  end
  
  get '*path', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end

  root 'static#index'
end
