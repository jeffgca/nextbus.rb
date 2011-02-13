load 'translink.rb'
require 'pp'

p = TranslinkCachingProxy.new('./foo_2.sqlite3')

pp p.get_stop_cache('51217')

