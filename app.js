const https = require('https')
const http = require('http')

http.get('http://api.openweathermap.org/data/2.5/weather?q=London&APPID=75fcee0e7b9d361a078e3a30bc723625',
(response) => {

let body = ''

response.on('data', data => {
    body = JSON.parse(data)
    console.log(`Today it is ${Math.floor((body.main.temp * 9/5) - 459.67)} degrees in London`)})

} )