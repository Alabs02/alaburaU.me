import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// Firebas init
const firebaseConfig = {
    apiKey: "AIzaSyAKSWsCzrdoYT8noglaanOMSvmzbLJ3veo",
    authDomain: "alaburausmanportfolio.firebaseapp.com",
    databaseURL: "https://alaburausmanportfolio.firebaseio.com",
    projectId: "alaburausmanportfolio",
    storageBucket: "alaburausmanportfolio.appspot.com",
    messagingSenderId: "412249568781",
    appId: "1:412249568781:web:adda28ee3cc771bbc68744",
    measurementId: "G-HPK2X1D37E"
}

firebase.initializeApp(firebaseConfig)


// Utils
const auth = firebase.auth()
const db = firebase.firestore()

// Collections
const msgCollection = db.collection('messages')

export {
    db,
    auth,
    msgCollection
}