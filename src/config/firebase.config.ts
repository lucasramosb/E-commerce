import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { GoogleAuthProvider, getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC8oJKtuDG2Q9i2V1K5kgG7LATUJh941fI",
  authDomain: "e-commerce-3f77a.firebaseapp.com",
  projectId: "e-commerce-3f77a",
  storageBucket: "e-commerce-3f77a.appspot.com",
  messagingSenderId: "479851844888",
  appId: "1:479851844888:web:688b9ee1376c7b69ca3a6d"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app)
export const googlePorvider = new GoogleAuthProvider()

