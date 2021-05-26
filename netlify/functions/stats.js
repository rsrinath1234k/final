//purpose of this page: this page collects player stats from our firebase collection. 

// allows us to use firebase
let firebase = require(`./firebase`)

// /.netlify/functions/posts
exports.handler = async function(event) {
  // define an empty Array to hold the return value from our lambda
  let returnValue = []

  // establish a connection to firebase in memory
  let db = firebase.firestore()

  // perform a query against firestore for all posts, wait for it to return, store in memory
  let statsQuery = await db.collection(`stats`).get()

  // retrieve the documents from the query
  let stats = statsQuery.docs

  console.log(stats)

  // loop through the post documents
  for (let statIndex=0; statIndex < stats.length; statIndex++) {
    // get the id from the document
    let statId = stats[statIndex].id

    // get the data from the document
    let statData = stats[statIndex].data()

    // create an Object to be added to the return value of our lambda
    let statObject = {
      id: statId,
      playerName: statData.playerName,
      imageUrl: statData.imageUrl,
      pointsPerGame: statData.pointsPerGame,
      reboundsPerGame: statData.reboundsPerGame,
      assistsPerGame: statData.assistsPerGame,
      playerImpactEstimate: statData.playerImpactEstimate,
      votingNumber: statData.votingNumber
    }
    // add the Object to the return value
    returnValue.push(statObject)
  }

  // return value of our lambda
  return {
    statusCode: 200,
    body: JSON.stringify(returnValue)
  }
}


