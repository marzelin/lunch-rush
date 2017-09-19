import firebase from "firebase"

const config = {
  apiKey: "AIzaSyA7kwmuRsdzH_x_MiJIm4KJbmrc1fLHyeQ",
  authDomain: "lunch-rushh.firebaseapp.com",
  databaseURL: "https://lunch-rushh.firebaseio.com",
  projectId: "lunch-rushh",
  storageBucket: "lunch-rushh.appspot.com",
  messagingSenderId: "990314657374"
}

firebase.initializeApp(config)

export default firebase

export const database = firebase.database()
export const auth = firebase.auth()
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
