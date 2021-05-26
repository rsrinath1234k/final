//purpose of this page: this page feeds player stats to the voting page html. 

// standard event listener for Firebase auth... use instead of DOMContentLoaded
window.addEventListener('DOMContentLoaded', async function() {

    // Build the URL for our posts API
    let url = `/.netlify/functions/stats`

    // Fetch the url, wait for a response, store the response in memory
    let response = await fetch(url)

    // Ask for the json-formatted data from the response, wait for the data, store it in memory
    let json = await response.json()

    // Write the json-formatted data to the console in Chrome
    console.log(json)

    // Grab a reference to the element with class name "posts" in memory
    let statsDiv = document.querySelector(`.stats`)

    // Loop through the JSON data, for each Object representing a post:
    for (let i=0; i < json.length; i++) {
      // Store each object ("post") in memory
      let stat = json[i]

      // Store the post's ID in memory
      let statId = stat.id

      // Create some markup using the post data, insert into the "posts" element
      statsDiv.insertAdjacentHTML(`beforeend`, `
     
      <p class= "border-4 rounded-lg text center w-full">
      <div class="md:flex"> <!--flex box for the image and the words-->
      <div><img src = ${stat.imageUrl}></div>

                  <ol class ="m-auto text-center" >
                      <li class="m-auto text-left font-medium underline text-6xl text-red-700"><strong>${stat.playerName}</strong></li>
                      <li class="m-auto text-left text-white text-2xl">_</li> <!--this is essentially acting as white space-->
                      <li class="m-auto text-left text-red-600 text-2xl">Points Per Game: ${stat.pointsPerGame}</li>
                      <li class="m-auto text-left text-red-600 text-2xl">Rebounds Per Game: ${stat.reboundsPerGame}</li>
                      <li class="m-auto text-left text-red-600 text-2xl">Assists Per Gamee: ${stat.assistsPerGame} </li>
                      <li class="m-auto text-left text-red-600 text-2xl">Player Impact Estimate: ${stat.playerImpactEstimate}</li>
                      <li class="m-auto text-left text-white text-2xl">_</li> <!--this is essentially acting as white space-->
                      <li class="border-4 m-auto text-left text-red-600 text-2xl"><strong><em>Vote "${stat.votingNumber}" to cast your vote for ${stat.playerName}!</strong></em></li>

                      
                  </ol>
                  </div>
                  

       
      `)
    }

    
    })

   
