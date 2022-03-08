class Api::ApiController < ApplicationController
    def index
        message = Message.all.sample
        render json: {
            message_id: message.id,
            message_content: message.content
        }.to_json
    end
end