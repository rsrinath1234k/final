window.addEventListener('DOMContentLoaded', async function() {
  
    let url = `https://api.fantasynerds.com/v1/nba/news?apikey=TEST`
     
     // - Fetch the url, wait for a response, store the response in memory
     let response = await fetch(url)
     
     // - Ask for the json-formatted data from the response, wait for the data, store it in memory
     let json = await response.json()
     
     // - Write the json-formatted data to the JavaScript console
     console.log(json)
     
     // - Store the interpreted location, current weather conditions, the forecast as three separate variables
     let teams = json
             
     // Select the 'current' div and insert information related to the location, weather, icon, and days requested for forecast
     let currentHeading = document.querySelector(`.NBA`)

       // This will modify the inner contents of that current div
       currentHeading.innerHTML = `
       <div class="text-center space-y-2">
         <div class="font-bold text-m">Source: ${json.article_author}</div> 
         <div class="font-bold text-m">Date: ${json.article_date} </div>
         <div class="font-bold text-m">Headline: ${json.article_headline}
         <div class="font-bold text-m">The News: ${json.article_excerpt}
         <div class="font-bold text-m">Read more: ${json.article_link}
         </div>
       </div>`
     })