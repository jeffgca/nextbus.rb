load 'translink.rb'
require 'pp'

# todo write proper tests

pp Translink.get_stop('51217')

pp Translink.get_stop_info('51217')
