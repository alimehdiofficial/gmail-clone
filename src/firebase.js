import firebase from 'firebase'

const firebaseConfig = {
  apiKey: 'AIzaSyDiGKF_BeOQqh-O_zodp26BP80ie9s7Pak',
  authDomain: 'fir-a63b0.firebaseapp.com',
  projectId: 'fir-a63b0',
  storageBucket: 'fir-a63b0.appspot.com',
  messagingSenderId: '269344773620',
  appId: '1:269344773620:web:82282f90f64b9fec08d5a1',
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const auth = firebaseApp.auth()
const db = firebaseApp.firestore()
const provider = new firebase.auth.GoogleAuthProvider()

export { db, auth, provider }
