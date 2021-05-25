firebase.auth().onAuthStateChanged(async function(user) {
  if (user) {
    // Signed in
    console.log('signed in')

                                                                    //added the code below in here to test
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

   // redirect to the home page
   document.location.href = `Voting Page.html`
                                                                    //added the code above in here to test


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
