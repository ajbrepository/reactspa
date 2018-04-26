// src/firebase.jsx
import firebase from 'firebase'
const config = {
    apiKey: "AIzaSyAsPxHhoQQWhFvd0SQn3rFD3oOk5gh_OWc",
    authDomain: "cyberspa-2018.firebaseapp.com",
    databaseURL: "https://cyberspa-2018.firebaseio.com",
    projectId: "cyberspa-2018",
    storageBucket: "cyberspa-2018.appspot.com",
    messagingSenderId: "752918526172"
};
firebase.initializeApp(config);
export const provider = new firebase.auth.GoogleAuthProvider();
export const auth = firebase.auth();
export default firebase;