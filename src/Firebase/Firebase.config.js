// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyATzpvNOSZ64K9en1si20QhA1BG2m0baXQ",
  authDomain: "report-rise.firebaseapp.com",
  projectId: "report-rise",
  storageBucket: "report-rise.appspot.com",
  messagingSenderId: "737453631082",
  appId: "1:737453631082:web:4b131a39903bcaa2e84c13"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;