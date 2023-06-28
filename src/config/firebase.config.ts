// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC8oJKtuDG2Q9i2V1K5kgG7LATUJh941fI",
  authDomain: "e-commerce-3f77a.firebaseapp.com",
  projectId: "e-commerce-3f77a",
  storageBucket: "e-commerce-3f77a.appspot.com",
  messagingSenderId: "479851844888",
  appId: "1:479851844888:web:688b9ee1376c7b69ca3a6d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

