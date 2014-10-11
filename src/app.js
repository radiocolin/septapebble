simply.scrollable(true);
simply.style('large');

navigator.geolocation.getCurrentPosition(function(pos) {
  var coords = pos.coords;
  var septaUrl = 'http://septapebble.info/index.php?' +
      'latitude=' + coords.latitude + '&longitude=' + coords.longitude;
  ajax({ url: septaUrl, type: 'json' }, function(data) {
    simply.title('Nearby SEPTA Departures');
    simply.body(data.content);
  });
});