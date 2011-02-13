load 'cache_sqlite.rb'
require 'pp'

c = CacheSqlite.new('./foo.sqlite3')

stop = {
  :number     => 51217,
  :name       => 'Some Stop',
  :direction  => 'NB'
}

c.insert_stop(stop)

pp c.get_stop(stop[:number])

pp c.stop_is_cached(stop[:number])
