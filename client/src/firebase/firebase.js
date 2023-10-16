// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-45ba8.firebaseapp.com",
  projectId: "mern-auth-45ba8",
  storageBucket: "mern-auth-45ba8.appspot.com",
  messagingSenderId: "530454150201",
  appId: "1:530454150201:web:b055871b393bfa5f8021e8"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);