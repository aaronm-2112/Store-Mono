import firebase from "firebase/app";
import "firebase/auth";

// firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDWTbJi6L33PTLhx7xxFUGTrkGDQZ1Fhrs",
  authDomain: "mono-store-a0e25.firebaseapp.com",
  projectId: "mono-store-a0e25",
  storageBucket: "mono-store-a0e25.appspot.com",
  messagingSenderId: "732185126715",
  appId: "1:732185126715:web:f5839a1a83da640acfb91e",
  measurementId: "G-LE12X9V1SL",
};

// get the firebase client
const firebaseClient = firebase.initializeApp(firebaseConfig);

// get the auth object out of the firebase client
export const Auth = firebaseClient.auth();

export var provider = new firebase.auth.GoogleAuthProvider();
