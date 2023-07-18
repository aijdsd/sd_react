// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCk7_68GcLrhNNebGxdQFgi1X4YKDfY1-M",
  authDomain: "aijd-rf.firebaseapp.com",
  projectId: "aijd-rf",
  storageBucket: "aijd-rf.appspot.com",
  messagingSenderId: "821948239735",
  appId: "1:821948239735:web:a758e27ff84a03166ddb72",
  measurementId: "G-FRXR43Y6E0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);