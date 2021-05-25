const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyCzxRwKdrNDr6m2J94AL4HavnZQI9SdIuE",
  authDomain: "kiei-final-project-8da54.firebaseapp.com",
  projectId: "kiei-final-project-8da54",
  storageBucket: "kiei-final-project-8da54.appspot.com",
  messagingSenderId: "874218534068",
  appId: "1:874218534068:web:929d6b83ab39ea84ce53e1",
  measurementId: "G-KBK6GDYJXM"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase