// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAhLY8eafkvfw7FSocAc4mRnlj_9CA9Hcs",
  authDomain: "producto4-movil.firebaseapp.com",
  projectId: "producto4-movil",
  storageBucket: "producto4-movil.firebasestorage.app",
  messagingSenderId: "964387762818",
  appId: "1:964387762818:web:be293bde202d378c493a9b",
  measurementId: "G-8GJBZJ9S4B",
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage(app);