/* eslint-disable no-unused-vars */
import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyAqcz3mWw0gLfKqwVscV9mq1gTqWCaxk8g",
    authDomain: "modulo-twitter-clone.firebaseapp.com",
    projectId: "modulo-twitter-clone",
    storageBucket: "modulo-twitter-clone.appspot.com",
    messagingSenderId: "1055714782464",
    appId: "1:1055714782464:web:71dbea6664c8dbcf1e17e5"
};
 
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

