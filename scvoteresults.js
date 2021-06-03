//purpose of this page: this page feeds player bios to the player bios html. 

// standard event listener for Firebase auth... use instead of DOMContentLoaded
window.addEventListener('DOMContentLoaded', async function() {

    // Build the URL for our posts API
    let url = `/.netlify/functions/votes`

    // Fetch the url, wait for a response, store the response in memory
    let response = await fetch(url)

    // Ask for the json-formatted data from the response, wait for the data, store it in memory
    let json = await response.json()

    // Write the json-formatted data to the console in Chrome
    console.log(json)

    // Grab a reference to the element with class name "posts" in memory
    let votessDiv = document.querySelector(`.scvotes`)

    // Loop through the JSON data, for each Object representing a post:
    for (let i=0; i < json.length; i++) {
      // Store each object ("post") in memory
      let vote = json[i]

      // Store the post's ID in memory
      let voteId = vote.id

      // Create some markup using the post data, insert into the "posts" element
      votessDiv.insertAdjacentHTML(`beforeend`, `
     
      <p class= "border-4 rounded-lg text center w-full">
      <div class="md:flex"> <!--flex box for the image and the words-->

                  <ol class ="m-auto text-center" >
                      <li class="m-auto text-left text-white text-2xl">_</li> <!--this is essentially acting as white space-->
                      <li class="m-auto text-left text-red-600 text-2xl">Stephen Curry Votes: ${vote.scvotes}</li>

                  </ol>
                  </div>


       
      `)
    }

    
    })

   
