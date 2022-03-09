# frozen_string_literal: true

# This is API module that contain our ApiController
module Api
  # This is an API endpoints controller for the api routes
  class ApiController < ApplicationController
    def index
      message = Message.all.sample
      render json: {
        message: {
          message_id: message.id,
          message_content: message.content
        }
      }.to_json
    end
  end
end
