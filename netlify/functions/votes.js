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
  let voteQuery = await db.collection(`uservotes`).get()

  // retrieve the documents from the query
  let votes = voteQuery.docs

  console.log(votes)
  jevotes=0
  scvotes=0
  njvotes=0
  // loop through the post documents
  for (let voteIndex=0; voteIndex < votes.length; voteIndex++) {
    // get the id from the document
    let voteId = votes[voteIndex].id

    // get the data from the document
    let voteData = votes[voteIndex].data()

    
    if (voteData.option == 1) {
        jevotes=jevotes+1
      } else if (voteData.option == 2) {
        scvotes=scvotes+1
      } else {
        njvotes=njvotes+1
      }
  }
    // create an Object to be added to the return value of our lambda
    let voteObject = {
      jevotes: jevotes,
      scvotes: scvotes,
      njvotes: njvotes,

      }
      // add the Object to the return value
      returnValue.push(voteObject)
  // return value of our lambda
  return {
    statusCode: 200,
    body: JSON.stringify(returnValue)
  }
}


