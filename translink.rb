require 'httparty'
load 'cache_sqlite.rb'

class Translink
  include HTTParty
  default_params :output => 'json'
  format :json
  
  def self.get_stop(stop)
    get(Translink::url('s', stop))
  end

  def self.get_stop_info(stop)
    get(Translink::url('q', stop))
  end
  
  # http://m.translink.ca/api/stops/?f=json&lng=-123.16789&lat=49.25344
  def self.get_stops_from_location(lng, lat)
    url = "#{base}?f=json&lng=#{ng}&lat=#{lat}"
    get(url)
  end

  def self.url(param, value)
    base = "http://m.translink.ca/api/stops/"
    return "#{base}?#{param}=#{value}"
  end
end

class TranslinkCachingProxy
  
  def initialize(filePath)
    @cache = CacheSqlite.new(filePath)
  end

  def get_stop_cache(number)
    stop_times = Translink::get_stop(number)
    if @cache.stop_is_cached(number)
      stop = @cache.get_stop(number)
    else
      # nothing cached
      stop_info = Translink::get_stop_info(number)
      stop = {:direction => stop_times.first["direction"] }
      stop[:name] = stop_info.first.last
      stop[:number] = stop_info.first.first
      @cache.save_stop(stop)
    end
    return {:stop_info => stop, :data => stop_times}
  end
  
  def get_local_stops(lng, lat)
    return Translink.get_stops_from_location(lng, lat)
  end
  
end
