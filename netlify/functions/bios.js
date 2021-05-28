//purpose of this page: this page collects player bios from our firebase collection. 

// allows us to use firebase
let firebase = require(`./firebase`)

// /.netlify/functions/posts
exports.handler = async function(event) {
  // define an empty Array to hold the return value from our lambda
  let returnValue = []

  // establish a connection to firebase in memory
  let db = firebase.firestore()

  // perform a query against firestore for all posts, wait for it to return, store in memory
  let biosQuery = await db.collection(`bio`).get()

  // retrieve the documents from the query
  let bios = biosQuery.docs

  console.log(bios)

  // loop through the post documents
  for (let bioIndex=0; bioIndex < bios.length; bioIndex++) {
    // get the id from the document
    let bioId = bios[bioIndex].id

    // get the data from the document
    let bioData = bios[bioIndex].data()

    // create an Object to be added to the return value of our lambda
    let bioObject = {
      id: bioId,
      playerName: bioData.playerName,
      imageUrl: bioData.imageUrl,
      team: bioData.team,
      university: bioData.university,
      age: bioData.age,
      experience: bioData.experience,
      height: bioData.height,
      weight: bioData.weight
    }
    // add the Object to the return value
    returnValue.push(bioObject)
  }

  // return value of our lambda
  return {
    statusCode: 200,
    body: JSON.stringify(returnValue)
  }
}


