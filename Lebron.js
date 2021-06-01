window.addEventListener('DOMContentLoaded', async function() {
  
       let url = `https://www.balldontlie.io/api/v1/players/237`
        
        // - Fetch the url, wait for a response, store the response in memory
        let response = await fetch(url)
        
        // - Ask for the json-formatted data from the response, wait for the data, store it in memory
        let json = await response.json()
        
        // - Write the json-formatted data to the JavaScript console
        console.log(json)
        
        // - Store the interpreted location, current weather conditions, the forecast as three separate variables
        let teams = json
                
        // Select the 'current' div and insert information related to the location, weather, icon, and days requested for forecast
        let currentHeading = document.querySelector(`.today`)

          // This will modify the inner contents of that current div
          currentHeading.innerHTML = `
          <div class="text-center space-y-2">
            <div class="font-bold text-m">The current MVP favorite per Vegas odds is ${json.first_name} ${json.last_name}, who plays for the Los Angeles Lakers. Find out more on who should be MVP by logging in below! </div>
          </div>`
        })