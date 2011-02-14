require 'sinatra'
require 'json'
load 'translink.rb'

translink = TranslinkCachingProxy.new('./db/translink.sqlite')

get '/' do
  content_type :json
  { :msg => 'No parameters specified' }.to_json
end

get '/stop/:number' do
  content_type :json
  translink.get_stop_cache(params[:number]).to_json
end

