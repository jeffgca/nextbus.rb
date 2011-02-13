require 'httparty'

class Translink
  include HTTParty
  base_uri 'm.translink.ca'
  default_params :output => 'json'
  format :json
  
  def self.get_stop(stop)
    url = "http://m.translink.ca/api/stops/?q=#{stop}"
    puts url
    response = get(url)
    puts response.body, response.code, response.message, response.headers.inspect
  end
  
  def self.get_stop_info(stop)
    url = "http://m.translink.ca/api/stops/?s=#{stop}"
    get(url)
  end
  

end
  
class TranslinkProxy < Translink
  
  def self.get_stop_cache
    # first check for cached stop data in sqlite or something
    
    # else query stop from the api
    # next get the bus times
  end
  
end
