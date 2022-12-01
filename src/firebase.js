import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBbwDzXUaD9Z5IgyegbEB3Oi8mvdFJ-HX4",
  authDomain: "bored-chat-2022.firebaseapp.com",
  projectId: "bored-chat-2022",
  storageBucket: "bored-chat-2022.appspot.com",
  messagingSenderId: "422876759990",
  appId: "1:422876759990:web:7a19cd0f093393eb23a317"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
