// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional


const firebaseConfig = {
  apiKey: "AIzaSyD2ir85NpZSchb06ycqxNVoYAKKdbTQpPE",
  authDomain: "week4-homework.firebaseapp.com",
  projectId: "week4-homework",
  storageBucket: "week4-homework.appspot.com",
  messagingSenderId: "879275382827",
  appId: "1:879275382827:web:814cd73a00a730df12726e",
  measurementId: "G-FZ37PKNKS0"
};

initializeApp(firebaseConfig);
// Initialize Firebase
// const app = initializeApp(firebaseConfig);


export  const db = getFirestore();
