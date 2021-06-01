// Goal: Provide a function to create a new vote in Firebase

// allows us to use firebase
let firebase = require(`./firebase`)

// /.netlify/functions/create_votes?userName=test@gmail.com&voteUrl=1
exports.handler = async function(event) {
// console.log(event)
  // get the two querystring parameters and store in memory
  let userName = event.queryStringParameters.userName
  let voteUrl = event.queryStringParameters.voteUrl

  // establish a connection to firebase in memory
  let db = firebase.firestore()

  // create a new post, wait for it to return
  await db.collection('uservotes').add({
    username: userName,
    imageUrl: voteUrl,
    created: firebase.firestore.FieldValue.serverTimestamp()
  })

  return {
    statusCode: 200
  }
}

