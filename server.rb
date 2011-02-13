require 'sinatra'
require 'json'

get '/' do
  content_type :json
  { :msg => 'No parameters specified' }.to_json
end

get '/stop/:number' do
  content_type :json
  { :stop_number => params[:number] }.to_json
end

