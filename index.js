//purpose of this page: this page contains the code for the user athentication process. 

firebase.auth().onAuthStateChanged(async function(user) {
  if (user) {
    // Signed in
    console.log(user)

    // Build the markup for the sign-out button and set the HTML in the header
    document.querySelector(`.sign-in-or-sign-out`).innerHTML = `
      <button class="text-pink-500 underline sign-out">Sign Out</button>
    `
 // get a reference to the sign out button
 let signOutButton = document.querySelector(`.sign-out`)

 // handle the sign out button click
 signOutButton.addEventListener(`click`, function(event) {
   // sign out of firebase authentication
   firebase.auth().signOut()

   // redirect to the voting page
   document.location.href = `Voting Page.html`
  
    // get a reference to the "Vote" button
    let postButton = document.querySelector(`#vote-button`)

    // handle the clicking of the "Vote" button
    postButton.addEventListener(`click`, async function(event) {
      // prevent the default behavior (submitting the form)
      event.preventDefault()

      // get a reference to the input holding the vote URL
      let voteUrlInput = document.querySelector(`#vote-url`)

      // store the user-inputted vote URL in memory
      let voteUrl = voteUrlInput.value

      // create the URL for our "create post" lambda function
      let url = `/.netlify/functions/create_vote?userName=${user.displayName}&imageUrl=${voteUrl}`

      // fetch the URL, wait for the response, store the response in memory
      let response = await fetch(url)

      // refresh the page
      location.reload()
    })

  })
 } else {
    // Signed out
    console.log('signed out')

    // Initializes FirebaseUI Auth
    let ui = new firebaseui.auth.AuthUI(firebase.auth())

    // FirebaseUI configuration
    let authUIConfig = {
      signInOptions: [
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ],
      signInSuccessUrl: 'Voting Page.html' // where to go after we're done signing up/in
    }

    // Starts FirebaseUI Auth
    ui.start('.sign-in-or-sign-out', authUIConfig)
  }
})
