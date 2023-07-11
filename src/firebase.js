// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPldKcbvWbN4PY-KDhd05YwZOQR1Zvirg",
  authDomain: "inreal-solutions.firebaseapp.com",
  projectId: "inreal-solutions",
  storageBucket: "inreal-solutions.appspot.com",
  messagingSenderId: "1001884558398",
  appId: "1:1001884558398:web:56ab5bc066bfb161569d6f",
  measurementId: "G-R3GTJ0KSCH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
