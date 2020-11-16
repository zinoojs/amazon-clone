import firebase from "firebase";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABhgR7uWwrF8ftBmsGMHZbv66H2KFb_3I",
  authDomain: "one-9f27a.firebaseapp.com",
  databaseURL: "https://one-9f27a.firebaseio.com",
  projectId: "one-9f27a",
  storageBucket: "one-9f27a.appspot.com",
  messagingSenderId: "653681113354",
  appId: "1:653681113354:web:4aea3bb4430eefc810e2f3",
  measurementId: "G-7GQY47E3EV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
