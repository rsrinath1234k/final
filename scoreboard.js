// Goal: Implement a weather application using data from an external API
// - Signup for an api key @ https://weatherapi.com
// - The API takes three inputs (querystring parameters)
//   - key = your API key
//   - q = a location query (e.g. Chicago)
//   - days = number of days of forecast data to return, between 1-10
// - Example: https://api.weatherapi.com/v1/forecast.json?key=YOUR-API-KEY&q=Chicago&days=3
// - The basic recipe (algorithm) is included; write the rest of the recipe in the comments!
// - Lab: Follow the provided recipe and the "mock-up" provided in the hard-coded HTML; respond 
//        to the user filling out the location on the form by fetching the weather API and 
//        displaying the city/state, e.g. if the user enters "chicago" on the form, show "Current
//        Weather for Chicago, Illinois".
// - Homework: Complete the application by accepting a number of days; show the current weather 
//             conditions and forecast based on the number of days entered by the user.

window.addEventListener('DOMContentLoaded', async function() {
  
    // Get a reference to the "get weather" button
    let weatherButton = document.querySelector(`.get-weather`)
  
    // When the "get weather" button is clicked:
    weatherButton.addEventListener(`click`, async function(event){
  
      // - Ignore the default behavior of the button
      event.preventDefault()

        // - Get a reference to the element containing the user-entered location and days
        let name = document.querySelector(`#name`)
        
        // - Get the user-entered location and days from the elements' value
        let nameDetail = location.value
                
        // - Check to see if the user entered values in both fields; if so:
        if (nameDetail.length>0) {
        
        // - Construct a URL to call the WeatherAPI.com API based on the values
        let url = `http://site.api.espn.com/apis/site/v2/sports/basketball/nba/scoreboard`
        
        // - Fetch the url, wait for a response, store the response in memory
        let response = await fetch(url)
        
        // - Ask for the json-formatted data from the response, wait for the data, store it in memory
        let json = await response.json()
        
        // - Write the json-formatted data to the JavaScript console
        console.log(json)
        
        // - Store the interpreted location, current weather conditions, the forecast as three separate variables
        let NBA = json
                
        // Select the 'current' div and insert information related to the location, weather, icon, and days requested for forecast
        let currentHeading = document.querySelector(`.today`)
        
        // This will modify the inner contents of that current div
        currentHeading.innerHTML = `
          <div class="text-center space-y-2">
            <div class="font-bold text-m">Current score for ${nba.name} </div>
            <div class="font-bold">
               <span class="score">${nba.name.score}</span>° 
              and
          </div>)}
  })