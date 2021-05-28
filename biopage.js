//purpose of this page: this page feeds player bios to the player bios html. 

// standard event listener for Firebase auth... use instead of DOMContentLoaded
window.addEventListener('DOMContentLoaded', async function() {

      // Build the URL for our posts API
      let url = `/.netlify/functions/bios`
  
      // Fetch the url, wait for a response, store the response in memory
      let response = await fetch(url)
  
      // Ask for the json-formatted data from the response, wait for the data, store it in memory
      let json = await response.json()
  
      // Write the json-formatted data to the console in Chrome
      console.log(json)
  
      // Grab a reference to the element with class name "posts" in memory
      let biosDiv = document.querySelector(`.bios`)
  
      // Loop through the JSON data, for each Object representing a post:
      for (let i=0; i < json.length; i++) {
        // Store each object ("post") in memory
        let bio = json[i]
  
        // Store the post's ID in memory
        let bioId = bio.id
  
        // Create some markup using the post data, insert into the "posts" element
        biosDiv.insertAdjacentHTML(`beforeend`, `
       
        <p class= "border-4 rounded-lg text center w-full">
        <div class="md:flex"> <!--flex box for the image and the words-->
        <div><img src = ${bio.imageUrl}></div>

                    <ol class ="m-auto text-center" >
                        <li class="m-auto text-center font-medium underline text-6xl text-red-700"><strong>${bio.playerName}</strong></li>
                        <li class="m-auto text-left text-white text-2xl">_</li> <!--this is essentially acting as white space-->
                        <li class="m-auto text-left text-red-600 text-2xl">Current Team: ${bio.team}</li>
                        <li class="m-auto text-left text-red-600 text-2xl">University Team: ${bio.university}</li>
                        <li class="m-auto text-left text-red-600 text-2xl">Age: ${bio.age} </li>
                        <li class="m-auto text-left text-red-600 text-2xl">Experience: ${bio.experience}</li>
                        <li class="m-auto text-left text-red-600 text-2xl">Height: ${bio.height}</li>
                        <li class="m-auto text-left text-red-600 text-2xl">Weight: ${bio.weight}</li>
                    </ol>
                    </div>


         
        `)
      }
  
      
      })
  
     
  