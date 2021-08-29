import firebase from "firebase/app";
require('firebase/firestore')
require('firebase/auth')

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBO98Y8ijUSjssB35WG8vZlRmGSsd9Pt-c",
  authDomain: "fire-chat-4f5ed.firebaseapp.com",
  projectId: "fire-chat-4f5ed",
  storageBucket: "fire-chat-4f5ed.appspot.com",
  messagingSenderId: "636602904160",
  appId: "1:636602904160:web:3e5c1df02a41d3ef5e9d05",
  measurementId: "G-46WK9XJBKS",
});


const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
