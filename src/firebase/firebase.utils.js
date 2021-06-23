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

  export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    
    const userRef = firestore.doc(`users/${userAuth.uid}`)
    
    const snapShot = await userRef.get()

    if(!snapShot.exists){
        const {displayName, email} = userAuth
        const createAt = new Date()

        try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
        } catch(error){
            console.log(error.message)
        }
    }
    return userRef
  }

  firebase.initializeApp(config)

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({ prompt: 'select_account'})
  export const signInWithGoogle = ()=> auth.signInWithPopup(provider)

  export default firebase