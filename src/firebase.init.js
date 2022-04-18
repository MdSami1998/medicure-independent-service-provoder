// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBGy2IKL0OWdZhZ-hfZff-8UFBjtm4m96I",
  authDomain: "medicure-2fe04.firebaseapp.com",
  projectId: "medicure-2fe04",
  storageBucket: "medicure-2fe04.appspot.com",
  messagingSenderId: "49865845849",
  appId: "1:49865845849:web:0bc8f5ff166dff00acd548"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;