const request = require('request')

const forecast = (latitude, longitude, callback) => {
   //const url = 'https://api.darksky.net/forecast/9d1465c6f3bb7a6c71944bdd8548d026/' + latitude + ',' + longitude

   const url = 'https://api.weatherstack.com/current?access_key=3dfa173bf0ff6c2f0c974938e665c3c3&query='  + latitude + ',' + longitude + '&units=m'

    request({ url, json: true }, (error, { body }) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else {
            callback(undefined, body.current.weather_descriptions[0] + ' It is currently ' + body.current.temperature + ' degress out. There is a ' + body.current.precip  + '% chance of rain.')
        }
    })
}

module.exports = forecast