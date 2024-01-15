// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVEvC04hJUYkvmcIJ0I_Ex1a7h19vFfM0",
  authDomain: "clone-f87a0.firebaseapp.com",
  projectId: "clone-f87a0",
  storageBucket: "clone-f87a0.appspot.com",
  messagingSenderId: "677294258114",
  appId: "1:677294258114:web:e878db8aecaefe4716c85b",
  measurementId: "G-XCE94GMX20"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)
export const storage = getStorage();
export const db = getFirestore();