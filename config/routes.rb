Rails.application.routes.draw do
  root 'static#index'

  namespace :api, defaults: { format: 'json' } do
    get 'greeting', to: 'api#index'
  end

  get '*path', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
