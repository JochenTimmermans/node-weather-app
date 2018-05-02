const request = require('request');

var getWeather = (latitude, longitude, callback) => {

  var darkskyKey = 'b11f90f34be72e8402dc0fa51a17c041';

  var darkskyUrl = `https://api.darksky.net/forecast/${darkskyKey}/${latitude},${longitude}`;

  request({
    url: darkskyUrl,
    json: true
  }, (error, response, body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: body.currently.temperature,
        apparentTemperature: body.currently.apparentTemperature
      });
    } else {
      callback('Unable to fetch weather.');
    }
  });

}

module.exports.getWeather = getWeather;
