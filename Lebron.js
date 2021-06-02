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
            <div class="font-bold text-m"> ${json.first_name} ${json.last_name} is a ${json.height_feet} foot ${json.height_inches} inch ${json.weight_pounds} lb P${json.position } who currently players for the ${json.team.full_name}. Find out more on him and other MVP candidates by logging in below! </div>
          </div>`
        })

        // https://www.balldontlie.io/api/v1/players?page=10?per_page=100?search=ike
