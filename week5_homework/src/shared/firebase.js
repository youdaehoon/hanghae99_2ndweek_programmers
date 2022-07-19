import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9lth1MZQrb3QKBuBfW5tdPBuGE2N3irA",
    authDomain: "week5-homework-8864e.firebaseapp.com",
    projectId: "week5-homework-8864e",
    storageBucket: "week5-homework-8864e.appspot.com",
    messagingSenderId: "659472710292",
    appId: "1:659472710292:web:738ef68e0d398d7cfa5281",
    measurementId: "G-5LB59EZE6K"
};

const app = initializeApp(firebaseConfig);

export const auth=getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app);
export default app;