import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyAB96XxXzdZcVHtdEVZf5nkzCwS6yJ2i4o",
    authDomain: "e-commerce-react-48b97.firebaseapp.com",
    projectId: "e-commerce-react-48b97",
    storageBucket: "e-commerce-react-48b97.appspot.com",
    messagingSenderId: "529477648998",
    appId: "1:529477648998:web:23ae0bfc745f639bf163a7",
    measurementId: "G-7QJMZSTVJR"
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()