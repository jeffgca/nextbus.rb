# Nextbus v2 - Ruby Edition

Components:

* sinatra server-side caching proxy using sqlite
* geolocation
* new timer UI metaphor

UX:

1. app starts up, checks for geolocation permission
1. gets location, searches for nearby stops
    1. handles errors
    1. presents lists of stops
1. get stop, query for routes
1. display timer until next bus on the chosen route ( or, 'any' ) arrives


