// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB9eVYcvjCGtP1kqI4qzcgLt4Gp9jDWqsk",
  authDomain: "login-curso-expo-1e27e.firebaseapp.com",
  projectId: "login-curso-expo-1e27e",
  storageBucket: "login-curso-expo-1e27e.appspot.com",
  messagingSenderId: "853343028088",
  appId: "1:853343028088:web:e0f53fe0449cd18564be8d"
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);