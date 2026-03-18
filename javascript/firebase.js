// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXN7CEJvKcFJvicAZVe1H4kFbzzWQFOes",
  authDomain: "chumchat-e9797.firebaseapp.com",
  databaseURL: "https://chumchat-e9797-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "chumchat-e9797",
  storageBucket: "chumchat-e9797.firebasestorage.app",
  messagingSenderId: "114856196425",
  appId: "1:114856196425:web:7690143c6e3f3b167cc298",
  measurementId: "G-8BQ6HWEXVC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);