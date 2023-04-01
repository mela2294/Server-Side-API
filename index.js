
const APIkey = "AIzaSyCiUP36nxQeXzh7Y-NA76Dk70BfQiFmwBc";
var forecast = $("weatherForecast");
var currentWeather = $("currentWeather");
var city;

function displayWeather(city) {
    var queryURL = 